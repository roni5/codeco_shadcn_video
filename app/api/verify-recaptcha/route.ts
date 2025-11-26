import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  console.log('API route hit: /api/verify-recaptcha') // Debug log

  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'No token provided' },
        { status: 400 }
      )
    }

    // Log environment variable (remove in production)
    console.log('Secret key exists:', !!process.env.RECAPTCHA_SECRET)

    const secretKey = process.env.RECAPTCHA_SECRET // Match your .env variable name
    if (!secretKey) {
      console.log('Missing RECAPTCHA_SECRET environment variable') // Debug log
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Construct verification URL
    const verificationURL = 'https://www.google.com/recaptcha/api/siteverify'
    const formData = new URLSearchParams()
    formData.append('secret', secretKey)
    formData.append('response', token)

    console.log('Sending verification request to Google') // Debug log

    // Make request to Google
    const verificationResponse = await fetch(verificationURL, {
      method: 'POST',
      body: formData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    if (!verificationResponse.ok) {
      console.error('Google API response not ok:', verificationResponse.status) // Debug log
      return NextResponse.json(
        { success: false, error: 'Failed to verify with Google' },
        { status: 500 }
      )
    }

    const verification = await verificationResponse.json()
    console.log('Google verification response:', verification) // Debug log

    // Return response based on verification result
    if (verification.success && verification.score > 0.5) {
      return NextResponse.json(
        { success: true, score: verification.score },
        { status: 200 }
      )
    }

    // No useless else after early return
    return NextResponse.json(
      {
        success: false,
        score: verification.score,
        error: 'Verification failed',
        errorCodes: verification['error-codes'],
      },
      { status: 400 }
    )
  } catch (error) {
    console.error('Server error:', error) // Debug log
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
// import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   console.log('API route hit: /api/verify-recaptcha') // Debug log

//   try {
//     const body = await request.json()
//     //console.log('Received body:', body); // Debug log

//     const { token } = body
//     if (!token) {
//       //console.log('No token provided in request'); // Debug log
//       return NextResponse.json(
//         {
//           success: false,
//           error: 'No token provided',
//         },
//         { status: 400 }
//       )
//     }

//     // Log environment variable (remove in production)
//     console.log('Secret key exists:', !!process.env.RECAPTCHA_SECRET)

//     const secretKey = process.env.RECAPTCHA_SECRET // Match your .env variable name
//     if (!secretKey) {
//       console.log('Missing RECAPTCHA_SECRET environment variable') // Debug log
//       return NextResponse.json(
//         {
//           success: false,
//           error: 'Server configuration error',
//         },
//         { status: 500 }
//       )
//     }

//     // Construct verification URL
//     const verificationURL = 'https://www.google.com/recaptcha/api/siteverify'
//     const formData = new URLSearchParams()
//     formData.append('secret', secretKey)
//     formData.append('response', token)

//     console.log('Sending verification request to Google') // Debug log

//     // Make request to Google
//     const verificationResponse = await fetch(verificationURL, {
//       method: 'POST',
//       body: formData.toString(),
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     })

//     if (!verificationResponse.ok) {
//       console.error('Google API response not ok:', verificationResponse.status) // Debug log
//       return NextResponse.json(
//         {
//           success: false,
//           error: 'Failed to verify with Google',
//         },
//         { status: 500 }
//       )
//     }

//     const verification = await verificationResponse.json()
//     console.log('Google verification response:', verification) // Debug log

//     // Return response based on verification result
//     if (verification.success && verification.score > 0.5) {
//       return NextResponse.json(
//         {
//           success: true,
//           score: verification.score,
//         },
//         { status: 200 }
//       )
//     } else {
//       return NextResponse.json(
//         {
//           success: false,
//           score: verification.score,
//           error: 'Verification failed',
//           errorCodes: verification['error-codes'],
//         },
//         { status: 400 }
//       )
//     }
//   } catch (error) {
//     console.error('Server error:', error) // Debug log
//     return NextResponse.json(
//       {
//         success: false,
//         error: 'Internal server error',
//       },
//       { status: 500 }
//     )
//   }
// }
