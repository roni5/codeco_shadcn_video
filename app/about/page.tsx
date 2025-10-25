import { CardWithForm } from '@/components/card-project'
import { NameTransition } from '@/components/name'

export default async function AboutPage() {
  return (
    <main className=" min-h-screen flex justify-center items-center md:items-center p-8">
      <div className="flex items-center text-center justify-center gap-2">
        <h1 className="font-semibold antialiased md:subpixel-antialiased text-lg md:text-2xl text-gradient-indigo-to-rose">
          About
        </h1>
        <h1 className="font-semibold antialiased md:subpixel-antialiased text-lg text-sky-500 md:text-2xl">
          Settings
        </h1>
      </div>
      <div className="flex items-center text-center justify-center gap-2">
        <CardWithForm />
        <NameTransition />
      </div>
    </main>
  )
}
