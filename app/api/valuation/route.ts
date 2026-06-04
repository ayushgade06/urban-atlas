import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      ownerName,
      whatsapp,
      locality,
      sectorBlock,
      plotArea,
      plotFeatures,
      askingPrice,
    } = body

    // Validation
    if (
      !ownerName ||
      !whatsapp ||
      !locality ||
      !sectorBlock ||
      !plotArea
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

    // Owner Name
    formBody.append('entry.2040453638', ownerName)

    // WhatsApp
    formBody.append('entry.1272368716', cleanPhone)

    // Sector / Block
    formBody.append('entry.2022994557', sectorBlock)

    // Plot Area
    formBody.append('entry.1299513441', String(plotArea))

    // Asking Price
    if (askingPrice) {
      formBody.append('entry.515855747', String(askingPrice))
    }

    // Locality
    formBody.append('entry.1381981154', locality)

    // Plot Features (Checkboxes)
    if (Array.isArray(plotFeatures)) {
      plotFeatures.forEach((feature: string) => {
        formBody.append('entry.329113743', feature)
      })
    }

    // Sentinel fields
    formBody.append('entry.1381981154_sentinel', '')
    formBody.append('entry.329113743_sentinel', '')

    // Hidden Google fields
    formBody.append('fvv', '1')
    formBody.append('pageHistory', '0')
    formBody.append('fbzx', '-8036467680122660405')

    console.log('Submitting to Google Form:')
    console.log(formBody.toString())

    const response = await fetch(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLScDPoPbcIhsVQh9wymn9NPE7DLYW_R-as5YvKwUTgSyxjuRPA/formResponse',
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
      success: response.status === 200,
      googleStatus: response.status,
    })
  } catch (error: any) {
    console.error('Valuation Submission Error:', error)

    return NextResponse.json(
      {
        error: error.message || 'Internal server error',
      },
      { status: 500 }
    )
  }
}