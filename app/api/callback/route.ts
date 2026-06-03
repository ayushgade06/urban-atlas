import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, mobile } = body

    // Server-side validation
    if (!name || !mobile) {
      return NextResponse.json({ error: 'Name and mobile number are required' }, { status: 400 })
    }

    const cleanPhone = mobile.replace(/\D/g, '')
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'Mobile number must be exactly 10 digits' }, { status: 400 })
    }

    const formId = process.env.TALLY_CALLBACK_ID || '68MPZA'

    const tallyBody = new URLSearchParams()
    tallyBody.append('Name', name)
    tallyBody.append('Mobile Number', `+91${cleanPhone}`)

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
