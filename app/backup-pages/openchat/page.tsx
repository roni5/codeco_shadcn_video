'use client'
import { useState } from 'react'

export default function OpenChatPage() {
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

  return (
    <main className="min-h-screen p-6  mt-24 py-12 px-4 sm:px-6 lg:px-8  max-md:relative max-md2 bg-white/90 max-md:py-10">
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
    </main>
  )
}