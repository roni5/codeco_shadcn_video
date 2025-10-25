import SigninBtnCustom from '@/components/signin-btn-custom'
import SignOutBtnCustom from '@/components/signout-btn.custom'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { auth } from '@/lib/auth'
import Image from 'next/image'

export default async function Page() {
  const session = await auth()
  const user = session?.user

  if (session) {
    return (
      <main className="min-h-screen flex justify-center items-center md:items-center p-8 ">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex justify-center items-center">
              Signed In
            </CardTitle>
            <CardDescription className="text-sm flex justify-center items-center">
              Welcome, {session.user.name}!
            </CardDescription>
          </CardHeader>
          <div className="p-6 flex flex-col items-center space-y-4">
            <Image
              className="h-16 w-16 rounded-full"
              src={user?.image}
              height={64}
              width={64}
              alt={`${user?.name} avatar`}
            />
            <SignOutBtnCustom />
          </div>
        </Card>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex justify-center items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex justify-center items-center">
            Sign in{' '}
          </CardTitle>
          <CardDescription className="text-sm flex justify-center items-center">
            This demo uses GitHub for authentication.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col md:flex-row gap-2 md:gap-1.5">
          <SigninBtnCustom provider={{ id: 'github', name: 'GitHub' }} />
          <SigninBtnCustom provider={{ id: 'google', name: 'Google' }} />
        </CardFooter>
      </Card>
    </main>
  )
}

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
