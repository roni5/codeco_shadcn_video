'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: Date
}

export default function FrontChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content:
        "👋 Hi! I'm Claude, your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: The scrollHeight depends on the number of messages.
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages.length])

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok) throw new Error('Failed to get response')

      const data = await res.json()
      setMessages([...newMessages, { ...data.reply, timestamp: new Date() }])
    } catch (err) {
      console.error(err)
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ Sorry, there was an error. Please try again!',
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <>
      {/* ✅ Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed z-50 bottom-5 right-5 shadow-lg w-14 h-14 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-700 transition"
      >
        {open ? (
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
      </button>

      {/* ✅ Modal Backdrop + Container */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div
            role="button"
            tabIndex={0}
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            onKeyDown={handleKeyDown}
          />

          {/* Chat Box */}
          <div className="relative w-full sm:w-[350px] max-h-[90%] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden m-4 sm:m-0">
            {/* Header */}
            <div className="bg-sky-600 text-white px-4 py-3 flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h2 className="font-semibold text-sm">Claude Assistant</h2>
            </div>

            {/* Chat area */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-xs ${
                      msg.role === 'user'
                        ? 'bg-sky-600 text-white'
                        : msg.role === 'assistant'
                          ? 'bg-white border border-slate-200'
                          : 'bg-green-50 border border-green-200 text-green-700'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    {msg.timestamp && (
                      <p className="text-[10px] opacity-50 mt-1">
                        {msg.timestamp.toLocaleTimeString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-slate-200 p-3 bg-white flex gap-2 items-end">
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 resize-none border border-slate-300 rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                rows={1}
                onInput={e => {
                  e.currentTarget.style.height = 'auto'
                  e.currentTarget.style.height =
                    Math.min(e.currentTarget.scrollHeight, 128) + 'px'
                }}
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="flex-shrink-0 w-10 h-10 bg-sky-600 hover:bg-sky-700 transition rounded-full flex items-center justify-center text-white"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
