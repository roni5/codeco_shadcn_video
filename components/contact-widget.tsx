'use client'

import { useState, useRef, useLayoutEffect } from 'react'
import { Send, Bot, User, MessageCircleWarning, Ellipsis } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: Date
}

const ContactWidget = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content:
        "👋 Hi! I'm Codeco, your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

 /* biome-ignore lint/correctness/useExhaustiveDependencies: keep deps minimal for perf and stability */
 useLayoutEffect(() => {
  const el = chatContainerRef.current
  if (!el) return
  el.scrollTop = el.scrollHeight
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [messages.length, open])

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

  return (
    <div className="relative z-50">
      {/* Modal */}
      {open && (
        <>
          <div className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm" />
          <div className="fixed bottom-[100px] right-5 z-[60] w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-[0_24px_80px_rgba(2,8,23,0.35)] flex flex-col overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-linear-to-r from-primary to-secondary  text-white px-4 py-3 flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <h2 className="font-semibold text-sm">Codeco Chat</h2>
            <MessageCircleWarning className="w-5 h-5" />
          </div>

          {/* Chat area */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
            style={{ maxHeight: '500px' }}
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
                        : 'bg-sky-50 border border-sky-200 text-sky-700'
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
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce">
                      <Ellipsis className="w-5 h-5" />
                    </div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75">
                      {' '}
                      <Ellipsis className="w-5 h-5" />
                    </div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150">
                      {' '}
                      <Ellipsis className="w-5 h-5" />
                    </div>
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
              className="shrink-0 w-10 h-10 bg-linear-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center ring-1 ring-black/5 dark:ring-white/10 shadow-[0_8px_24px_rgba(2,8,23,0.25)] hover:shadow-[0_16px_40px_rgba(2,8,23,0.32)] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
        </>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed z-[70] right-5 bottom-5 flex justify-center items-center w-14 h-14 rounded-full bg-linear-to-r from-primary to-secondary text-white ring-1 ring-black/5 dark:ring-white/10 shadow-[0_16px_48px_rgba(2,8,23,0.30)] hover:shadow-[0_28px_72px_rgba(2,8,23,0.38)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none"
      >
        {open ? (
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>robot</title>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  )
}

export default ContactWidget
