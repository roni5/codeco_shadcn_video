'use client'

import ReCaptchaProvider from '@/components/ReCaptchaProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google'
import { MailWarning } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  type HTMLAttributes,
  startTransition,
  useActionState,
  useEffect,
  useRef,
  type useTransition,
} from 'react'
import { useFormStatus } from 'react-dom'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { toast } from 'sonner'
import {
  type ContactFormState,
  createContact,
} from '../actions/contact/contactAction'

interface NewsProps {
  className?: string
  transition?: ReturnType<typeof useTransition>
}

function ContactsPage({ className, transition }: NewsProps) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [formState, dispatch] = useActionState(createContact, {
    form: { name: '', email: '', message: '' },
    status: 'default',
  } as ContactFormState)

  const trackFieldInteraction = (fieldName: string) => {
    sendGTMEvent({
      event: 'contact_form_field_interaction',
      field_name: fieldName,
      page: 'contact_page',
    })
  }

  useEffect(() => {
    if (formState.status === 'success') {
      sendGTMEvent({
        event: 'contact_form_success',
        user_type: formState.form.email
          ? formState.form.email.includes('@')
            ? 'business'
            : 'personal'
          : 'unknown',
        has_phone: !!formState.form.phone,
        page: 'contact_page',
      })
      toast.success('Contact Submitted', {
        description: 'Your message has been sent successfully.',
      })
      void router.push('/')
    }

    if (formState.status === 'error') {
      sendGTMEvent({
        event: 'contact_form_error',
        error_type: 'server_error',
        error_message:
          typeof formState.errors === 'string'
            ? formState.errors
            : Object.values(formState.errors || {}).join(', '),
        page: 'contact_page',
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
      sendGTMEvent({
        event: 'contact_form_validation_error',
        field_errors: Object.keys(formState.errors || {}),
        page: 'contact_page',
      })
      toast.error('Form Error', {
        description: 'Check the form for errors and try again.',
        icon: <MailWarning className="h-5 w-5 text-red-500" />,
      })
    }
  }, [formState.status, formState.form, formState.errors])

  useEffect(() => {
    sendGTMEvent({
      event: 'page_view',
      page_name: 'contact_page',
      page_path: '/contact',
    })
  }, [])

  const formAction = async (formData: FormData) => {
    sendGTMEvent({
      event: 'contact_form_submit_attempt',
      has_name: !!formData.get('name'),
      has_email: !!formData.get('email'),
      has_phone: !!formData.get('phone'),
      has_subject: !!formData.get('subject'),
      page: 'contact_page',
    })

    if (!executeRecaptcha) {
      sendGTMEvent({
        event: 'contact_form_recaptcha_error',
        error_type: 'recaptcha_not_available',
        page: 'contact_page',
      })
      toast.error('Security Error', {
        description: 'Security verification not available. Please try again.',
        icon: <MailWarning className="h-5 w-5 text-red-500" />,
      })
      return
    }

    try {
      const token = await executeRecaptcha('contact_submit')
      formData.append('recaptchaToken', token)
      sendGTMEvent({ event: 'contact_form_recaptcha_success', page: 'contact_page' })
      startTransition(() => {
        dispatch(formData)
      })
    } catch (error) {
      console.error('reCAPTCHA error:', error)
      sendGTMEvent({
        event: 'contact_form_recaptcha_error',
        error_type: 'execution_error',
        page: 'contact_page',
      })
      toast.error('Security Error', {
        description: 'Security verification not available. Please try again.',
        icon: <MailWarning className="h-5 w-5 text-red-500" />,
      })
    }
  }

  return (
    <div className="relative flex flex-col min-h-screen justify-start overflow-hidden bg-white py-2 md:py-8 lg:py-24">
      <GoogleTagManager gtmId="GTM-P6CXJTBT" />
      <img
        src="/img/dot-bg.svg"
        alt="robot contact"
        className="hidden backdrop-blur-2xl md:block absolute top-[60%] left-1/2 max-w-none -translate-x-2/4 -translate-y-2/4 image-with-rounded-corners"
        width="1700"
        height="1708"
      />
      <div className="bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] border-b border-primary/10 pb-6 pt-8 backdrop-blur-2xl rounded-lg" />
      <div className="relative bg-white px-4 py-8 md:pt-12 pb-6 md:pb-12 shadow-xl ring-1 ring-white/40 mx-auto w-full max-w-md md:max-w-lg rounded-lg z-30 mt-6">
        <div className="mx-auto max-w-md ">
          <div className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4">
            <form ref={formRef} action={formAction}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-primary">
                  Your name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={formState.form.name}
                  placeholder="Your Name"
                  onFocus={() => trackFieldInteraction('name')}
                  className="bg-white border border-primary text-primary placeholder-primary/60 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                />
              </div>

              {formState.status === 'field-errors' && formState.errors?.name && (
                <p className="text-red-500 text-sm font-medium">{formState.errors.name}</p>
              )}

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                  Email address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={formState.form.email}
                  placeholder="your@email.com"
                  onFocus={() => trackFieldInteraction('email')}
                  className="bg-white border border-primary text-primary placeholder-primary/60 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                />
              </div>

              {formState.status === 'field-errors' && formState.errors?.email && (
                <p className="text-red-500 text-sm">{formState.errors.email}</p>
              )}

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-primary">
                  Subject (Optional)
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  defaultValue={formState.form.subject}
                  placeholder="Subject of your message"
                  onFocus={() => trackFieldInteraction('subject')}
                  className="bg-white border border-primary text-primary placeholder-primary/60 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                  Phone (Optional)
                </label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  defaultValue={formState.form.phone}
                  placeholder="Your phone number"
                  onFocus={() => trackFieldInteraction('phone')}
                  className="bg-white border border-primary text-primary placeholder-primary/60 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  defaultValue={formState.form.message}
                  placeholder="Your message"
                  onFocus={() => trackFieldInteraction('message')}
                  className="bg-white border border-primary text-primary placeholder-primary/60 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                />
              </div>

              {formState.status === 'field-errors' && formState.errors?.message && (
                <p className="text-red-500 text-sm">{formState.errors.message}</p>
              )}

              {/* Checkbox removed per your earlier requirement */}

              <SubmitButton idleText="Submit" submittingText="Submitting..." />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <ReCaptchaProvider>
      <ContactsPage />
    </ReCaptchaProvider>
  )
}

function SubmitButton({
  idleText,
  submittingText,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { idleText: string; submittingText: string }) {
  const { pending } = useFormStatus()

  useEffect(() => {
    if (pending) {
      sendGTMEvent({
        event: 'contact_form_submit_processing',
        status: 'pending',
        page: 'contact_page',
      })
    }
  }, [pending])

  return (
    <Button
      type="submit"
      {...props}
      className="w-full py-3 text-center bg-gradient-to-br from-primary to-secondary hover:opacity-70 text-white rounded-lg disabled:bg-primary/40 disabled:cursor-default"
      disabled={pending}
      onClick={() => {
        sendGTMEvent({
          event: 'contact_form_button_click',
          button_status: pending ? 'processing' : 'ready',
          page: 'contact_page',
        })
      }}
    >
      {pending ? submittingText : idleText}
    </Button>
  )
}