'use client'
import { useRouter } from 'next/navigation'

const BackButton = (): React.ReactNode => {
  const router = useRouter()
  const goBack = () => router.back()

  return (
    <button
      type="button"
      onClick={goBack}
      className="absolute left-8 top-14 mt-4 py-2 px-4 rounded-md no-underline text-foreground bg-zinc-100 hover:bg-zinc-200   flex items-center group text-xs md:text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
      >
        <title>back button</title>
        <polyline points="15 18 9 12 15 6" />
      </svg>
      <span>Back</span>
    </button>
  )
}

export default BackButton
