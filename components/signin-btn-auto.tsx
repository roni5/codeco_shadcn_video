"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInBtnAuto() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user?.name} <br />
				<button type="button" onClick={() => signOut()}>
					Sign Out
				</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button type="button" onClick={() => signIn()}>
				Sign In
			</button>
		</>
	);
}
