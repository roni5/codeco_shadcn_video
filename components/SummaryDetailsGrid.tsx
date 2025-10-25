import {
  Database,
  Mail,
  Bot,
  Layers,
  Globe,
  Settings,
  Code2,
  Rocket,
} from 'lucide-react'

export default function SummaryDetailsGrid() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Background gradient behind LEFT card */}
      <div
        className="absolute left-1/2 top-0 aspect-[1155/678] w-full max-w-screen-2xl -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-400 to-sky-300 opacity-30 blur-2xl shadow-md z-10"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />

      {/* bg-gradient-to-r from-indigo-600 to-pink-500*/}
      <div className="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-2xl shadow-xl   bg-[linear-gradient(120deg,var(--indigo-6),var(--crimson-5))] border border-neutral-200 dark:border-neutral-800 p-6">
        <h2 className="text-2xl font-bold mb-2 text-white dark:text-white relative bg-gradient-to-r from-sky-300 to-pink-400  p-2 rounded-md ">
          READY TO DEPLOY A MODERN WEB UI/UX PLATFORM?
        </h2>
        <p className="text-lg font-semibold bg-clip-text bg-gradient-to-br from-sky-300 to-pink-400 dark:from-indigo-400 dark:to-pink-400 mb-6">
          100% AI AGILE INTEGRATION
        </p>

        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
          <li className="flex items-center gap-3">
            <Database className="w-5 h-5 text-indigo-500" />
            <span>Contact form + DB storage (searchable admin view)</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#ff80b5]" />
            <span>Newsletter signup (stubbed provider integration)</span>
          </li>
          <li className="flex items-center gap-3">
            <Bot className="w-5 h-5 text-indigo-500" />
            <span>Stubbed ChatGPT client + serverAction endpoints</span>
          </li>
          <li className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#ff80b5]" />
            <span>Next.js 15 + Tailwind V4 starter, responsive layout</span>
          </li>
          <li className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-indigo-500" />
            <span>SEO defaults and sitemap generation</span>
          </li>
          <li className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-[#ff80b5]" />
            <span>Favicon generation script included</span>
          </li>
          {/* <li className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-indigo-500" />
            <span>Stripe checkout patterns and cart state examples</span>
          </li> */}
          <li className="flex items-center gap-3">
            <Rocket className="w-5 h-5 text-indigo-500" />
            <span>Google Lighthouse-friendly performance baseline</span>
          </li>
        </ul>
      </div>

      {/* --- RIGHT CARD --- */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 p-6">
        <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white relative bg-gradient-to-r from-sky-300 to-pink-300  p-2 rounded-md ">
          BUILT-IN WEB DEV ESSENTIALS — THE COMPLETE SETUP
        </h2>
        <p className="text-lg text-pink-500 font-semibold bg-clip-text bg-gradient-to-br from-indigo-300 to-pink-600 dark:from-indigo-400 dark:to-pink-400 mb-6">
          Simple as possible, but not simpler.
        </p>
        {/* bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] */}
        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
          <li className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#ff80b5]" />
            <span>robots.ts &amp; sitemap.xml</span>
          </li>
          <li className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-indigo-500" />
            <span>Favicon &amp; meta automation</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#ff80b5]" />
            <span>Contact &amp; Newsletter components</span>
          </li>
          <li className="flex items-center gap-3">
            <Database className="w-5 h-5 text-indigo-500" />
            <span>Dashboard &amp; database layer</span>
          </li>
          <li className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-[#ff80b5]" />
            <span>Privacy, T&amp;C, Cookies &amp; GDPR pages</span>
          </li>
          <li className="flex items-center gap-3">
            <Rocket className="w-5 h-5 text-indigo-500" />
            <span>Security best practices pre-wired</span>
          </li>
          <li className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#ff80b5]" />
            <span>Deploy-ready environment config</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

