'use client'
import { useState, useRef, useEffect } from 'react'
import {
  Upload,
  Send,
  X,
  Image as ImageIcon,
  FileText,
  Bot,
  User,
} from 'lucide-react'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  images?: { data: string; mimeType: string; name: string }[]
  timestamp?: Date
}

interface UploadedFile {
  data: string
  mimeType: string
  name: string
  type: 'image' | 'text'
}

export default function ClaudeChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content:
        "Hello! I'm Claude, your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = event => {
        const result = event.target?.result as string
        const base64Data = result.split(',')[1]

        const fileType = file.type.startsWith('image/') ? 'image' : 'text'

        setUploadedFiles(prev => [
          ...prev,
          {
            data: base64Data,
            mimeType: file.type,
            name: file.name,
            type: fileType,
          },
        ])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const sendMessage = async () => {
    if (!input.trim() && uploadedFiles.length === 0) return

    const imageFiles = uploadedFiles.filter(f => f.type === 'image')

    // Process text files - add their content to the message
    let messageContent = input
    const textFiles = uploadedFiles.filter(f => f.type === 'text')
    if (textFiles.length > 0) {
      const textContents = await Promise.all(
        textFiles.map(async file => {
          const decoded = atob(file.data)
          return `\n\n[File: ${file.name}]\n${decoded}`
        })
      )
      messageContent += textContents.join('')
    }

    const newMessage: Message = {
      role: 'user',
      content: messageContent,
      images: imageFiles.length > 0 ? imageFiles : undefined,
      timestamp: new Date(),
    }

    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setInput('')
    setUploadedFiles([])
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
          images: imageFiles.length > 0 ? imageFiles : undefined,
        }),
      })

      if (!res.ok) throw new Error('Failed to get response')

      const data = await res.json()
      setMessages([...newMessages, { ...data.reply, timestamp: new Date() }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
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
    <div className="min-h-screen my-16 py-12 bg-gradient-to-br from-slate-50 to-sky-50/20 p-4">
      <div className="max-w-4xl mx-auto min-h-[70vh] md:min-h-[80vh] max-h-[95vh] flex flex-col shadow-[0_0_14px_0_rgba(74,74,74,0.20)] rounded-2xl ">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-t-2xl border-b border-slate-200 p-8 ">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-800">
                Claude Assistant
              </h1>
              <p className="text-sm text-slate-500">
                Powered by Amazon Bedrock
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 bg-white/80 backdrop-blur-sm p-6 overflow-y-auto space-y-6"
        >
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : message.role === 'system'
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-500 text-white'
                }`}
              >
                {message.role === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>

              <div
                className={`flex-1 max-w-3xl ${message.role === 'user' ? 'text-right' : ''}`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white ml-12'
                      : message.role === 'system'
                        ? 'bg-green-50 text-green-800 border border-green-200 mr-12'
                        : 'bg-slate-50 text-slate-800 border border-slate-200 mr-12'
                  }`}
                >
                  {/* Show uploaded images */}
                  {message.images && message.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {message.images.map((img, idx) => (
                        <div key={idx} className="relative">
                          <img
                            src={`data:${img.mimeType};base64,${img.data}`}
                            alt={img.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <div className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            {img.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="whitespace-pre-wrap">{message.content}</p>

                  {message.timestamp && (
                    <p
                      className={`text-xs mt-2 ${
                        message.role === 'user'
                          ? 'text-blue-200'
                          : 'text-slate-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 mr-12">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.1s' }}
                  />
                  <div
                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-white/80 backdrop-blur-sm rounded-b-2xl border-t border-slate-200 p-4">
          {/* Uploaded Files Preview */}
          {uploadedFiles.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="bg-slate-100 rounded-lg p-2 flex items-center gap-2 text-sm"
                  >
                    {file.type === 'image' ? (
                      <ImageIcon className="w-4 h-4" />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                    <span className="truncate max-w-32">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 items-center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/*,.txt,.md,.json,.csv,.pdf"
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-shrink-0 w-10 h-10 bg-sky-300 hover:bg-sky-400 rounded-full flex items-center justify-center transition-transform hover:scale-105"
            >
              <Upload className="w-5 h-5 text-slate-600" />
            </button>

            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Shift+Enter for new line"
                // className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                className="w-full resize-none border border-slate-300 rounded-2xl px-4 py-3 pr-12 focus:ring-2 focus:ring-sky-400 focus:outline-none min-h-[48px] max-h-32"
                rows={1}
                style={{ height: 'auto' }}
                onInput={e => {
                  e.currentTarget.style.height = 'auto'
                  e.currentTarget.style.height =
                    Math.min(e.currentTarget.scrollHeight, 128) + 'px'
                }}
              />
            </div>

            <button
              type="button"
              onClick={sendMessage}
              disabled={
                isLoading || (!input.trim() && uploadedFiles.length === 0)
              }
              className="flex-shrink-0  w-10 h-10 bg-sky-300 hover:bg-sky-400 rounded-full flex items-center justify-center transition-transform hover:scale-105"
            >
              <Send className="w-5 h-5 text-white " />
            </button>
          </div>

          <p className="text-xs text-slate-500 mt-2 text-center">
            Upload images, text files, or type a message. Press Enter to send.
          </p>
        </div>
      </div>
    </div>
  )
}