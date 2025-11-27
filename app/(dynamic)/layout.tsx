import type { ReactNode } from "react";
import { auth } from "@/lib/auth";
import SessionProvider from "@/components/session-provider";

export default async function DynamicLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return <SessionProvider session={session}>{children}</SessionProvider>;
}

// import SessionProvider from "@/components/session-provider";
// import { auth } from "@/lib/auth";
// import type { ReactNode } from "react";

// export default async function Layout({ children }: { children: ReactNode }) {
// 	const session = await auth();
// 	return (
// 		<SessionProvider session={session}>
// 			<div className="min-h-screen flex flex-col">
// 				{" "}
// 				{/* Ensure full height and flex column */}
// 				{/* <Navbar /> Include the Navbar here */}
// 				<main className="flex-grow">{children}</main>{" "}
// 				{/* Main content takes remaining space */}
// 			</div>
// 		</SessionProvider>
// 	);
// }
