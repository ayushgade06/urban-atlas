import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { ownerName, whatsapp, locality, sectorBlock, plotArea, plotFeatures, askingPrice } = body

    // Server-side validation
    if (!ownerName || !whatsapp || !locality || !sectorBlock || !plotArea) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 })
    }

    const cleanPhone = whatsapp.replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'WhatsApp number must be exactly 10 digits' }, { status: 400 })
    }

    const formId = process.env.TALLY_VALUATION_ID || '68MPZA'

    const tallyBody = new URLSearchParams()
    tallyBody.append('Owner Name', ownerName)
    tallyBody.append('WhatsApp', `+91${cleanPhone}`)
    tallyBody.append('Locality', locality)
    tallyBody.append('Sector / Block', sectorBlock)
    tallyBody.append('Plot Area', `${plotArea} sq ft`)
    if (plotFeatures && Array.isArray(plotFeatures)) {
      tallyBody.append('Plot Features', plotFeatures.join(', '))
    }
    if (askingPrice) {
      tallyBody.append('What price are you expecting?', `Rs. ${askingPrice}`)
    }

    const tallyRes = await fetch(`https://tally.so/r/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tallyBody.toString(),
    })

    if (!tallyRes.ok) {
      return NextResponse.json({ error: 'Failed to submit details to backend' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
