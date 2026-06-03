import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, whatsapp, preferredLocality, budgetRange, plotSizeRequirement, purchasePurpose, expectedPurchaseTimeline } = body

    // Server-side validation
    if (!fullName || !whatsapp || !preferredLocality || !budgetRange || !purchasePurpose) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 })
    }

    const cleanPhone = whatsapp.replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'WhatsApp number must be exactly 10 digits' }, { status: 400 })
    }

    const formId = process.env.TALLY_BUYER_CIRCLE_ID || '68MPZA'

    const tallyBody = new URLSearchParams()
    tallyBody.append('Full Name', fullName)
    tallyBody.append('WhatsApp', `+91${cleanPhone}`)
    if (Array.isArray(preferredLocality)) {
      tallyBody.append('Preferred Locality', preferredLocality.join(', '))
    } else {
      tallyBody.append('Preferred Locality', preferredLocality)
    }
    tallyBody.append('Budget Range', budgetRange)
    if (plotSizeRequirement) {
      tallyBody.append('Plot Size Requirement', plotSizeRequirement)
    }
    tallyBody.append('Purchase Purpose', purchasePurpose)
    if (expectedPurchaseTimeline) {
      tallyBody.append('Expected Purchase Timeline', expectedPurchaseTimeline)
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
