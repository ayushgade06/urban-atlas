import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, mobile } = body

    if (!name || !mobile) {
      return NextResponse.json(
        { error: 'Name and mobile number are required' },
        { status: 400 }
      )
    }

    const cleanPhone = mobile.replace(/\D/g, '')

    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Mobile number must be exactly 10 digits' },
        { status: 400 }
      )
    }

    const formBody = new URLSearchParams()

    // Form fields
    formBody.append('entry.774519879', name)
    formBody.append('entry.1025949131', cleanPhone)

    // Hidden fields from the payload
    formBody.append('fvv', '1')
    formBody.append('pageHistory', '0')
    formBody.append('fbzx', '7186003969945169209')

    const response = await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLScMTG-l21K6-_469OMPMguUwTGc1NgLy-zE_qezYvhOA6z14g/formResponse',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      }
    )

    console.log('Google Status:', response.status)

    const text = await response.text()
    console.log('Google Response:', text.slice(0, 500))

    return NextResponse.json({
      success: response.ok,
      googleStatus: response.status,
    })
  } catch (error: any) {
    console.error('Callback route error:', error)

    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}