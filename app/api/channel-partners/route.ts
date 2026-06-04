import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      fullName,
      mobileNumber,
      areasCovered,
      experience,
      activeIn,
      additionalInformation,
    } = body

    if (!fullName || !mobileNumber || !areasCovered?.length) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '')

    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Mobile number must be exactly 10 digits' },
        { status: 400 }
      )
    }

    const formBody = new URLSearchParams()

    // Full Name
    formBody.append('entry.1971134255', fullName)

    // Mobile Number
    formBody.append('entry.238409359', cleanPhone)

    // Areas Covered (multi-select)
    if (Array.isArray(areasCovered)) {
      areasCovered.forEach((area: string) => {
        formBody.append('entry.1766495771', area)
      })
    }

    // Experience
    if (experience) {
      formBody.append('entry.1332153238', experience)
    }

    // Active In (multi-select)
    if (Array.isArray(activeIn)) {
      activeIn.forEach((item: string) => {
        formBody.append('entry.1434047445', item)
      })
    }

    // Hidden Google fields from captured payload
    formBody.append('hud', 'true')
    formBody.append('entry.1766495771_sentinel', '')
    formBody.append('entry.1332153238_sentinel', '')
    formBody.append('entry.1434047445_sentinel', '')
    formBody.append('fvv', '1')
    formBody.append('pageHistory', '0')
    formBody.append('fbzx', '3572440355709641413')

    console.log('Submitting to Google Form:')
    console.log(formBody.toString())

    const response = await fetch(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfH7O-er5wGc4WNo1A8OuwlUbYrw9MnOi4U-FE_uWN2HLO_iA/formResponse',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      }
    )

    const responseText = await response.text()

    console.log('Google Form Status:', response.status)
    console.log('Google Form Response:', responseText.substring(0, 1000))

    return NextResponse.json({
      success: response.status === 200,
      googleStatus: response.status,
    })
  } catch (error: any) {
    console.error('Channel Partner Submission Error:', error)

    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}