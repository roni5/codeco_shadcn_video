import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Props = {
  href: ComponentProps<typeof Link>["href"]; // matches Next.js Link href type
  children: ReactNode;
  className?: string;
};

export default function ActiveButton({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex w-40 h-16 select-none rounded-lg text-white',
        'bg-[#ff4f97] border-b border-[#cd0084]', // colours
        'transition-all duration-150 ease-in-out',
        'shadow-[0_10px_0_0_#cd0084,0_15px_0_0_#ff4f9755]', // 3-D shadow
        'active:translate-y-2',
        'active:shadow-[0_0px_0_0_#cd0084,0_0px_0_0_#ff4f9755]',
        'active:border-b-0',
        'focus:outline-none',
        className
      )}
    >
      <span className="flex h-full w-full items-center justify-center font-bold text-lg">
        {children}
      </span>
    </Link>
  )
}
// import clsx from "clsx";
// import Link from "next/link";



// export default function ActiveButton({ href, children, className }: Props) {
//   return (
//     <Link
//       href={href}
//       className={clsx(
//         'inline-flex w-40 h-16 select-none rounded-lg text-white',
//         'bg-[#ff4f97] border-b border-[#cd0084]', // colours
//         'transition-all duration-150 ease-in-out',
//         'shadow-[0_10px_0_0_#cd0084,0_15px_0_0_#ff4f9755]', // 3-D shadow
//         'active:translate-y-2',
//         'active:shadow-[0_0px_0_0_#cd0084,0_0px_0_0_#ff4f9755]',
//         'active:border-b-0',
//         'focus:outline-none',
//         className
//       )}
//     >
//       <span className="flex h-full w-full items-center justify-center font-bold text-lg">
//         {children}
//       </span>
//     </Link>
//   )
// }