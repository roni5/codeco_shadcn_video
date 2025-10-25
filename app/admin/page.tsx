import { auth, signIn, signOut } from '@/lib/auth'

// import { auth } from "@/lib/auth";
function SignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github')
      }}
    >
      <p>You are not logged in</p>
      <button type="submit">Sign in with GitHub</button>
    </form>
  )
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <p>{children}</p>
        <button type="submit">Sign out</button>
      </form>
      <form
        action={async () => {
          'use server'
          await signIn('google') // <-- This is the key change for Google!
        }}
      >
        <button type="submit">Sign in with Google</button>
      </form>
    </>
  )
}

export default async function Page() {
  const session = await auth()
  const user = session?.user?.email

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 space-y-8 mt-12">
      <section className="space-y-3 text-center">
        <h1>Home</h1>
        <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
      </section>
    </main>
  )
}
