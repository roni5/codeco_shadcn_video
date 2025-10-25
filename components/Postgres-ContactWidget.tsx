'use client'
import type React from 'react'
import { useState } from 'react'
import { SubmitButton } from './submit-button'

const ContactWidget: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.classList.add('was-validated')
      return
    }

    const formData = new FormData(form)
    const object: Record<string, string> = {}
    formData.forEach((value, key) => {
      object[key] = value.toString()
    })

    const json = JSON.stringify(object)
    setFormStatus('Please wait...')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })

      const resJson = await response.json()
      if (response.status === 200) {
        setFormStatus(resJson.message)
      } else {
        setFormStatus(resJson.message)
      }

      form.reset()
      form.classList.remove('was-validated')
      setTimeout(() => setFormStatus(null), 5000)
    } catch (error) {
      setFormStatus('Something went wrong!')
    }
  }

  return (
    <div className="relative z-50">
      {open && (
        <div className="fixed flex flex-col bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md">
          <div className="flex p-5 flex-col justify-center items-center h-32 bg-linear-to-r from-sky-500 to-red-500">
            <h3 className="text-lg text-white">How can we help?</h3>
            <p className="text-white opacity-50">
              We usually respond in a few hours
            </p>
          </div>
          <div className="bg-gray-50 flex-grow p-6">
            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: 'none' }}
              />

              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="full_name"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <div className="empty-feedback text-red-400 text-sm mt-1">
                  Please provide your full name.
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <div className="empty-feedback text-red-400 text-sm mt-1">
                  Please provide your email address.
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Your Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  className="w-full h-28 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <div className="empty-feedback text-red-400 text-sm mb-1 py-0 ">
                  Please enter your message.
                </div>
              </div>

              <div className="mb-3">
                <SubmitButton>Send Message</SubmitButton>
                {/* <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </button> */}
              </div>
              {/* <p className="text-xs text-center text-gray-400">
                <span>Powered by <a href="https://Web3Forms.com" className="text-gray-600" target="_blank" rel="noopener noreferrer">Web3Forms</a></span>
              </p> */}
              {formStatus && (
                <p className="text-center mt-2 text-sm bg-radial-[at_25%_25%] from-sky-50 to-sky-600 to-75% text-transparent bg-clip-text">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      <button type="button"
        onClick={() => setOpen(!open)}
        className="fixed z-40 right-5 bottom-5 shadow-lg flex justify-center items-center w-14 h-14 bg-conic-180 from-sky-600 via-sky-50 to-sky-600 rounded-full focus:outline-none hover:bg-indigo-600 transition duration-300 ease"
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            className="size-12 ml-3.5 mt-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 23"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M7.5 2.5a5 5 0 0 1 5 5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a5 5 0 0 1 5-5Zm0 0V0M4 11.5h7M.5 8v4m14-4v4m-9-2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
              stroke="#fff"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default ContactWidget