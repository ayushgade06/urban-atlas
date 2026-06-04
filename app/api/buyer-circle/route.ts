import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      fullName,
      whatsapp,
      preferredLocality,
      budgetRange,
      plotSizeRequirement,
      purchasePurpose,
      expectedPurchaseTimeline,
    } = body

    // Validation
    if (
      !fullName ||
      !whatsapp ||
      !preferredLocality ||
      !budgetRange ||
      !purchasePurpose
    ) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    const cleanPhone = whatsapp.replace(/\D/g, '')

    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'WhatsApp number must be exactly 10 digits' },
        { status: 400 }
      )
    }

    const formBody = new URLSearchParams()

    // Full Name
    formBody.append('entry.1120852240', fullName)

    // WhatsApp
    formBody.append('entry.1462031601', cleanPhone)

    // Preferred Locality (Checkboxes)
    if (Array.isArray(preferredLocality)) {
      preferredLocality.forEach((locality: string) => {
        formBody.append('entry.1725023768', locality)
      })
    } else {
      formBody.append('entry.1725023768', preferredLocality)
    }

    // Budget Range
    formBody.append('entry.1876984395', budgetRange)

    // Plot Size Requirement
    if (plotSizeRequirement) {
      formBody.append(
        'entry.1751685105',
        plotSizeRequirement
      )
    }

    // Purchase Purpose
    formBody.append('entry.449646021', purchasePurpose)

    // Expected Purchase Timeline
    if (expectedPurchaseTimeline) {
      formBody.append(
        'entry.633181953',
        expectedPurchaseTimeline
      )
    }

    // Sentinel fields
    formBody.append('entry.1725023768_sentinel', '')
    formBody.append('entry.1876984395_sentinel', '')
    formBody.append('entry.1751685105_sentinel', '')
    formBody.append('entry.449646021_sentinel', '')
    formBody.append('entry.633181953_sentinel', '')

    // Google hidden fields
    formBody.append('fvv', '1')
    formBody.append('pageHistory', '0')
    formBody.append('fbzx', '4659208607888357832')

    console.log('Submitting to Google Form:')
    console.log(formBody.toString())

    const response = await fetch(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkSE-qXJoFBA4VKPWzfKncgEul7WcIZRaO8dvzKTB3E070Vg/formResponse',
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
    console.log(
      'Google Form Response:',
      responseText.substring(0, 1000)
    )

    return NextResponse.json({
      success: response.ok,
      googleStatus: response.status,
    })
  } catch (error: any) {
    console.error('Buyer Circle Submission Error:', error)

    return NextResponse.json(
      {
        error: error.message || 'Internal server error',
      },
      { status: 500 }
    )
  }
}