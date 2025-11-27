"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutBtnCustom() {
	// const handleSignOut = async () => {
	//   // Implement your sign-out logic here
	//   console.log('Signing out')
	// }

	return (
		<Button
			onClick={() => signOut()}
			variant="outline"
			className="w-full gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-102"
			size="lg"
		>
			<LogOut className="w-4 h-4" />
			Sign Out
		</Button>
	);
}

// 'use client'

// import { Button } from '@/components/ui/button'
// import { signOut } from 'next-auth/react'

// export default function SignOutBtnCustom() {
//   return (
//     <Button
//       className="bg-gradient-to-r from-sky-500 to-red-500 text-white font-bold py-2 px-4 rounded mx-auto my-auto"
//       onClick={() => signOut()}
//     >
//       Sign Out
//     </Button>
//   )
// }
