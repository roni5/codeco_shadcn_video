'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export default function SignOutBtnCustom() {
  return (
    <Button
      className="bg-linear-to-r from-sky-500 to-red-500 text-white font-bold py-2 px-4 rounded mx-auto my-auto"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  )
}
