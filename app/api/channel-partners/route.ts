import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, mobileNumber, areasCovered, experience, activeIn, additionalInformation } = body

    // Server-side validation
    if (!fullName || !mobileNumber || !areasCovered) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 })
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'Mobile number must be exactly 10 digits' }, { status: 400 })
    }

    const formId = process.env.TALLY_CHANNEL_PARTNER_ID || '68MPZA'

    const tallyBody = new URLSearchParams()
    tallyBody.append('Full Name', fullName)
    tallyBody.append('Mobile Number / WhatsApp', `+91${cleanPhone}`)
    if (Array.isArray(areasCovered)) {
      tallyBody.append('Areas You Cover', areasCovered.join(', '))
    } else {
      tallyBody.append('Areas You Cover', areasCovered)
    }
    if (experience) {
      tallyBody.append('Experience', experience)
    }
    if (activeIn && Array.isArray(activeIn)) {
      tallyBody.append('Active In', activeIn.join(', '))
    }
    if (additionalInformation) {
      tallyBody.append('Additional Information', additionalInformation)
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
