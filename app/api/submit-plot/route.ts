import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      ownerName,
      whatsappNumber,
      locality,
      sectorBlock,
      plotArea,
      askingPrice,
      plotFeatures,
      additionalNotes,
    } = body

    // Validation
    if (
      !ownerName ||
      !whatsappNumber ||
      !locality ||
      !sectorBlock ||
      !plotArea ||
      !askingPrice
    ) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      )
    }

    const cleanPhone = whatsappNumber.replace(/\D/g, '')

    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'WhatsApp number must be exactly 10 digits' },
        { status: 400 }
      )
    }

    const formBody = new URLSearchParams()

    // Owner Name
    formBody.append('entry.1932012975', ownerName)

    // WhatsApp Number
    formBody.append('entry.480140398', cleanPhone)

    // Sector / Block
    formBody.append('entry.892670439', sectorBlock)

    // Plot Area
    formBody.append('entry.716996296', String(plotArea))

    // Asking Price
    formBody.append('entry.863980433', String(askingPrice))

    // Additional Notes
    if (additionalNotes?.trim()) {
      formBody.append('entry.526947507', additionalNotes)
    }

    // Locality
    formBody.append('entry.1864533006', locality)

    // Plot Features (Google Form Checkboxes)
    if (Array.isArray(plotFeatures) && plotFeatures.length > 0) {
      plotFeatures.forEach((feature: string) => {
        formBody.append('entry.681795740', feature)
      })
    }

    // Sentinel fields found in payload
    formBody.append('entry.1864533006_sentinel', '')
    formBody.append('entry.681795740_sentinel', '')

    // Google hidden fields
    formBody.append('fvv', '1')
    formBody.append('pageHistory', '0')
    formBody.append('fbzx', '-5920055225785679795')

    console.log('Submitting to Google Form:')
    console.log(formBody.toString())

    const response = await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSf-Q-9rFA9yy1a0ZE8FgpyfiVLsDHuJupM_2U5pbfV17UdV3A/formResponse',
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
    console.error('Submit Plot Error:', error)

    return NextResponse.json(
      {
        error: error.message || 'Internal server error',
      },
      { status: 500 }
    )
  }
}