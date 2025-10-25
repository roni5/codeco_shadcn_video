'use client'

import { Button } from '@/components/ui/button'
import type { OAuthProviderType } from 'next-auth/providers'
import { signIn } from 'next-auth/react'

export default function SigninBtnCustom({
  provider,
}: {
  provider: { id: OAuthProviderType; name: string }
}) {
  return (
    <Button
      className="bg-linear-to-br from-indigo-400 to-rose-500 text-white font-bold py-2 px-4 rounded mx-auto my-auto"
      onClick={() => signIn(provider.id)}
    >
      Sign in with {provider.name}
    </Button>
  )
}
//bg-linear-to-br from-indigo-300 to-crimson-500
