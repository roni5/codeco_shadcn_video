'use client'

import { CardWithForm } from '@/components/card-project'
import ChatWidget from '@/components/ChatWidget'
import HeroSection from '@/components/HeroSecton'
import LoadingSpinner from '@/components/LoadingSpinner'
import TailForm from '@/components/tail-form'
import { useState } from 'react'

//import PostgresTutorial from '@/components/postgres-tutorial'


export default function Leepage() {

  const [messages, setMessages] = useState([
    { role: 'system', content: 'How can I help you today?' },
  ])
  const [input, setInput] = useState('')

   async function sendMessage() {
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages }),
    })

    const data = await res.json()
    setMessages([...newMessages, data.reply])
  }
  // max-md:py-10  py-18
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center   bg-gray-50  pt-18 w-full max-w-full overflow-x-hidden">
      <div className="flex flex-col -px-2">
        {/* <HeroSection /> */}
        {/* <LoadingSpinner size={80} /> */}
        <TailForm />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="max-w-2xl mx-auto bg-white p-4 rounded shadow">
            <div className="space-y-2 mb-4 h-[400px] overflow-y-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`text-${m.role === 'user' ? 'right' : 'left'}`}
                >
                  <p
                    className={`text-sm p-2 rounded ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}
                  >
                    {m.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                className="flex-1 border p-2 rounded"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button
                type="button"
                onClick={sendMessage}
                className="bg-blue-500 text-white px-4 rounded"
              >
                Send
              </button>
            </div>
          </div>
          {/* <CardWithForm  below pagination button /> */}
          <div className="flex">
            <a
              href="/"
              className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </a>
            <a
              href="/"
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                type="button"
                className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Prev
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
