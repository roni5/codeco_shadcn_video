import SigninBtnCustom from '@/components/signin-btn-custom'
import SignOutBtnCustom from '@/components/signout-btn.custom'

// import SigninBtnCustom from '@/components/signin-btn-custom'
// import SignOutBtnCustom from '@/components/signout-btn-custom'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { auth } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

import { Shield, CheckCircle, Zap, Lock } from 'lucide-react'
import FloatingCode from '@/components/floating-code'

export default async function SignInPage() {
  const session = await auth()
  const user = session?.user

  if (session) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/images/a-20lava-20lamp-20effect-20with-20oscillating-20waves-20and-20subtle-20movement-2c-20soft-20color-20transitions-2c-20organic-20fluid-20motion-2c-20dreamy-20atmosphere.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/40 via-purple-500/40 via-pink-500/40 to-yellow-400/40" />
        </div>
        {/* </CHANGE> */}

        <FloatingCode />

        {/* <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-white flex items-center gap-2"
            >
              <Shield className="w-8 h-8" />
              Codeco
            </Link>
            <Link
              href="/"
              className="text-white/90 hover:text-white transition"
            >
              Back to Home
            </Link>
          </div>
        </nav> */}
        {/* </CHANGE> */}

        <main className="container mx-auto px-4 py-32 md:py-42 flex justify-center items-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Main Profile Card */}
              <Card className="lg:col-span-2 bg-white/95 backdrop-blur border-0 shadow-2xl">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Image
                        className="h-24 w-24 rounded-full ring-4 ring-purple-200"
                        src={
                          user?.image || '/placeholder.svg?height=96&width=96'
                        }
                        height={96}
                        width={96}
                        alt={`${user?.name} avatar`}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Welcome back, {user?.name}!
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 mt-2">
                    {user?.email}
                  </CardDescription>
                </CardHeader>

                <div className="p-6 space-y-6">
                  {/* Account Status */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-purple-600" />
                      <h3 className="font-semibold text-gray-900">
                        Account Status
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Status</p>
                        <p className="font-semibold text-gray-900">Active</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Member Since</p>
                        <p className="font-semibold text-gray-900">2025</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-cyan-50 rounded-lg p-4 text-center border border-cyan-200">
                      <div className="text-2xl font-bold text-cyan-600">12</div>
                      <div className="text-xs text-gray-600 mt-1">Projects</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">
                        48
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Tasks</div>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4 text-center border border-pink-200">
                      <div className="text-2xl font-bold text-pink-600">
                        98%
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Complete</div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Quick Actions
                    </h3>
                    <Link
                      href="/services"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <Zap className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-700">
                        View Services
                      </span>
                    </Link>
                    <Link
                      href="/blog"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <Lock className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-700">
                        Read Blog Posts
                      </span>
                    </Link>
                  </div>
                </div>

                <CardFooter className="bg-gray-50 border-t">
                  <SignOutBtnCustom />
                </CardFooter>
              </Card>

              {/* Side Cards */}
              <div className="space-y-4">
                {/* Security Card */}
                <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-lg p-6">
                  <Lock className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Secure Access</h3>
                  <p className="text-sm text-white/90">
                    Your account is protected with industry-standard security.
                  </p>
                </Card>

                {/* Activity Card */}
                <Card className="bg-white/95 backdrop-blur border-0 shadow-lg p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    All Set
                  </h3>
                  <p className="text-sm text-gray-600">
                    You're signed in and ready to explore.
                  </p>
                </Card>
              </div>
            </div>
          </div>
          {/* </CHANGE> */}
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/images/a-20lava-20lamp-20effect-20with-20oscillating-20waves-20and-20subtle-20movement-2c-20soft-20color-20transitions-2c-20organic-20fluid-20motion-2c-20dreamy-20atmosphere.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-purple-500/40 via-pink-500/40 to-yellow-400/40" />
      </div>
      {/* </CHANGE> */}

      <FloatingCode />

      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <Shield className="w-8 h-8" />
            Codeco
          </Link>
          <Link href="/" className="text-white/90 hover:text-white transition">
            Back to Home
          </Link>
        </div>
      </nav>
      {/* </CHANGE> */}

      <main className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Sign In Card */}
            <Card className="lg:col-span-2 bg-white/95 backdrop-blur border-0 shadow-2xl">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-4">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Sign in to Codeco
                </CardTitle>
                <CardDescription className="text-base text-gray-600 mt-2">
                  Choose your preferred authentication method to continue
                </CardDescription>
              </CardHeader>

              <div className="p-6 space-y-6">
                {/* Sign In Buttons */}
                <div className="space-y-3">
                  <SigninBtnCustom
                    provider={{ id: 'github', name: 'GitHub' }}
                  />
                  <SigninBtnCustom
                    provider={{ id: 'google', name: 'Google' }}
                  />
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-gray-500">
                      Trusted by thousands
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        Secure Authentication
                      </p>
                      <p className="text-xs text-gray-600">
                        Industry-standard security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        Fast Access
                      </p>
                      <p className="text-xs text-gray-600">One-click sign in</p>
                    </div>
                  </div>
                </div>
              </div>

              <CardFooter className="bg-gray-50 border-t flex-col gap-3">
                <p className="text-xs text-gray-600 text-center">
                  By signing in, you agree to our{' '}
                  <Link
                    href="/terms"
                    className="text-purple-600 hover:underline"
                  >
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/privacy"
                    className="text-purple-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </CardFooter>
            </Card>

            {/* Side Cards */}
            <div className="space-y-4">
              {/* Benefits Card */}
              <Card className="bg-gradient-to-br from-cyan-600 to-purple-600 text-white border-0 shadow-lg p-6">
                <Zap className="w-8 h-8 mb-4" />
                <h3 className="font-bold text-lg mb-2">Why Sign In?</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    Access exclusive features
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    Save your preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    Track your progress
                  </li>
                </ul>
              </Card>

              {/* Security Badge */}
              <Card className="bg-white/95 backdrop-blur border-0 shadow-lg p-6">
                <Lock className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Secure & Private
                </h3>
                <p className="text-sm text-gray-600">
                  Your data is encrypted and protected with enterprise-grade
                  security.
                </p>
              </Card>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}
      </main>
    </div>
  )
}


// import SigninBtnCustom from '@/components/signin-btn-custom'
// import SignOutBtnCustom from '@/components/signout-btn.custom'
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import { auth } from '@/lib/auth'
// import Image from 'next/image'

// export default async function Page() {
//   const session = await auth()
//   const user = session?.user

//   if (session) {
//     return (
//       <main className="min-h-screen flex justify-center items-center md:items-center p-8 ">
//         <Card className="w-full max-w-sm">
//           <CardHeader>
//             <CardTitle className="text-lg font-semibold flex justify-center items-center">
//               Signed In
//             </CardTitle>
//             <CardDescription className="text-sm flex justify-center items-center">
//               Welcome, {session.user.name}!
//             </CardDescription>
//           </CardHeader>
//           <div className="p-6 flex flex-col items-center space-y-4">
//             <Image
//               className="h-16 w-16 rounded-full"
//               src={user?.image}
//               height={64}
//               width={64}
//               alt={`${user?.name} avatar`}
//             />
//             <SignOutBtnCustom />
//           </div>
//         </Card>
//       </main>
//     )
//   }

//   return (
//     <main className="min-h-screen flex justify-center items-center p-8">
//       <Card className="w-full max-w-sm">
//         <CardHeader>
//           <CardTitle className="text-2xl flex justify-center items-center">
//             Sign in{' '}
//           </CardTitle>
//           <CardDescription className="text-sm flex justify-center items-center">
//             This demo uses GitHub for authentication.
//           </CardDescription>
//         </CardHeader>
//         <CardFooter className="flex flex-col md:flex-row gap-2 md:gap-1.5">
//           <SigninBtnCustom provider={{ id: 'github', name: 'GitHub' }} />
//           <SigninBtnCustom provider={{ id: 'google', name: 'Google' }} />
//         </CardFooter>
//       </Card>
//     </main>
//   )
// }

// {/* <div className="space-y-3 text-center w-full max-w-sm">
// <h1 className="text-gray-800 text-2xl font-semibold md:text-3xl">Sign in Github</h1>
// <SigninBtnCustom provider={{ id: "github", name: "GitHub" }} />
// </div>
// <div className="space-y-3 text-center">
// <h1 className="text-gray-800 text-2xl font-semibold md:text-3xl">Sign in Google</h1>
// <SigninBtnCustom provider={{ id: "google", name: "Google" }} />
// </div>
// <div className="space-y-3 text-center">
// <h1 className="text-gray-800 text-2xl font-semibold md:text-3xl">Project</h1>
// {/* <CardWithForm /> */}
// //</div> */}
