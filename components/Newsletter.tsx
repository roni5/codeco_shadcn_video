'use client'

import {
  type NewsletterFormState,
  createNewsletter,
} from '@/app/actions/newsletter/actions'
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google'
//import { Input } from "@/components/ui/input";
import { MailWarning } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  type HTMLAttributes,
  useActionState,
  useEffect,
  useRef,
  type useTransition,
} from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'

interface NewsProps {
  className?: string
  transition?: ReturnType<typeof useTransition>
}

export default function Newsletters({ className, transition }: NewsProps) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, dispatch] = useActionState(createNewsletter, {
    form: { email: '' },
    status: 'default',
  } as NewsletterFormState)

  // Function to handle form submission with GTM event tracking
  const handleFormSubmit = (formData: FormData) => {
    // Track newsletter submission attempt
    sendGTMEvent({
      event: 'newsletter_submit_attempt',
      location: 'footer',
    })

    // Dispatch the form data
    dispatch(formData)
  }

  useEffect(() => {
    if (formState.status === 'success') {
      // Track successful newsletter signup
      sendGTMEvent({
        event: 'newsletter_signup_success',
        email_domain: formState.form.email.split('@')[1] || 'unknown',
        location: 'footer',
      })

      toast.success('Newsletter Submitted', {
        description: 'Your Newsletter has been sent successfully.',
      })
      void router.push('/')
    }

    if (formState.status === 'error') {
      // Track newsletter signup error
      sendGTMEvent({
        event: 'newsletter_signup_error',
        error_type:
          typeof formState.errors === 'string'
            ? 'server_error'
            : 'validation_error',
        error_message:
          typeof formState.errors === 'string'
            ? formState.errors
            : Object.values(formState.errors || {}).join(', '),
        location: 'footer',
      })

      toast.error('Possibly a duplicate email!', {
        description:
          typeof formState.errors === 'string'
            ? formState.errors
            : Object.values(formState.errors || {}).join(', '),
        icon: <MailWarning className="h-5 w-5 text-red-500" />,
      })
    }

    if (formState.status === 'field-errors') {
      // Track form field validation errors
      sendGTMEvent({
        event: 'newsletter_field_error',
        field_with_error: Object.keys(formState.errors || {}).join(', '),
        location: 'footer',
      })

      toast.error('Form Error', {
        description: 'Check the form for errors and try again.',
        icon: <MailWarning className="h-5 w-5 text-red-500" />,
      })
    }
  }, [formState.status, formState.form.email, formState.errors])

  // Track email input interaction
  const handleEmailFocus = () => {
    sendGTMEvent({
      event: 'newsletter_form_interaction',
      interaction_type: 'focus',
      location: 'footer',
    })
  }

  return (
    <div>
      <GoogleTagManager gtmId="GTM-P6CXJTBT" />
      <section className="relative py-0 md:py-6 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="relative max-w-7xl pt-2 pb-24 md:pt-0 px-6 md:px-16 mx-auto">
            <div className="relative z-10 flex flex-wrap -mx-4 items-end">
              <div className="w-full lg:w-1/2 px-4  ml-0 md:-ml-20   mt-0 md:-mt-5">
                <form ref={formRef} action={handleFormSubmit}>
                  <div className="max-w-lg lg:ml-auto">
                    <div className="full-width sm:flex mb-2 items-center">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={formState.form.email}
                        onFocus={handleEmailFocus}
                        onChange={() => {
                          sendGTMEvent({
                            event: 'newsletter_form_interaction',
                            interaction_type: 'input',
                            location: 'footer',
                          })
                        }}
                        className="w-full  relative group inline-block shrink-0 sm:w-auto py-2 px-5 text-md font-semibold text-slate-50 bg-white-50 rounded-md overflow-hidden  mb-3 sm:mb-0 sm:mr-4  text-sm text-codeco-blue placeholder-gray-400 border border-gray-200 focus:border-sky-500 focus:outline-sky-500 "
                        placeholder="janedoe@gmail.com"
                      />
                      {formState.status === 'field-errors' &&
                        formState.errors?.email && (
                          <p className="text-red-500 text-sm">
                            {formState.errors.email}
                          </p>
                        )}
                      <SubmitButton
                        idleText="Subscribe"
                        submittingText="Submitting..."
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SubmitButton({
  idleText,
  submittingText,
  ...props
}: HTMLAttributes<HTMLButtonElement> & {
  idleText: string
  submittingText: string
}) {
  const { pending } = useFormStatus()

  // Track when the button changes state
  useEffect(() => {
    if (pending) {
      sendGTMEvent({
        event: 'newsletter_submit_processing',
        status: 'pending',
      })
    }
  }, [pending])

  return (
    <button
      {...props}
      disabled={pending}
      onClick={() => {
        // We track the click event here, separate from the form submission
        // This helps track users who click but might encounter client-side validation issues
        sendGTMEvent({
          event: 'newsletter_button_click',
          button_status: pending ? 'processing' : 'ready',
        })
      }}
      className="relative group inline-flex items-center justify-center shrink-0 w-full sm:w-auto py-2 px-5 text-md font-semibold text-white bg-linear-to-r from-primary to-secondary rounded-md overflow-hidden shadow-xl/20 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-200"
      type="submit"
    >
      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"/>
      <div className="relative flex items-center justify-center">
        <span className="mr-3 text-center -mt-0.5">
          {pending ? submittingText : idleText}
        </span>
        <svg
          className="relative inline-block translate-y-[-2px]"
          width="8"
          height="11"
          viewBox="0 0 8 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>chevron</title>
          <path
            d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 0.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  )
}
