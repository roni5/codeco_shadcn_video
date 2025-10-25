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

  // Track form interactions
  const trackFieldInteraction = (fieldName: string) => {
    sendGTMEvent({
      event: 'contact_form_field_interaction',
      field_name: fieldName,
      page: 'contact_page',
    })
  }

  useEffect(() => {
    if (formState.status === 'success') {
      // Track successful form submission
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
      // Track form submission error
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
      // Track form validation errors
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

  // Track page view when component loads
  useEffect(() => {
    sendGTMEvent({
      event: 'page_view',
      page_name: 'contact_page',
      page_path: '/contact',
    })
  }, [])

  const formAction = async (formData: FormData) => {
    // Track form submission attempt
    sendGTMEvent({
      event: 'contact_form_submit_attempt',
      has_name: !!formData.get('name'),
      has_email: !!formData.get('email'),
      has_phone: !!formData.get('phone'),
      has_subject: !!formData.get('subject'),
      privacy_accepted: !!formData.get('Check1'),
      page: 'contact_page',
    })

    if (!executeRecaptcha) {
      // Track reCAPTCHA error
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

      // Track successful reCAPTCHA verification
      sendGTMEvent({
        event: 'contact_form_recaptcha_success',
        page: 'contact_page',
      })

      // Wrap dispatch in startTransition
      startTransition(() => {
        dispatch(formData)
      })
    } catch (error) {
      console.error('reCAPTCHA error:', error)

      // Track reCAPTCHA error
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
        src="/img/abs-ice.svg"
        alt="robot contact"
        className="hidden backdrop-blur-2xl md:block absolute top-1/2 left-1/2 max-w-none -translate-x-2/4 -translate-y-2/4 image-with-rounded-corners"
        width="1308"
      />
      <div className=" bg-center  [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] border-b border-gray-300  pb-6 pt-8 backdrop-blur-2xl rounded-lg"/>
      <div className="relative bg-white px-4 py-8 md:pt-12 pb-6 md:pb-12 shadow-xl ring-1 ring-white md:ring-codeco-turquoise/2 mx-auto w-full max-w-md md:max-w-lg rounded-lg z-30 mt-6 md:mt-31">
        <div className="mx-auto max-w-md ">
          <div className="mx-auto  block max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
            <form ref={formRef} action={formAction}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-codeco-turquoise prose dark:text-codeco-turquoise-700 "
                >
                  Your name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={formState.form.name}
                  placeholder="Your Name"
                  onFocus={() => trackFieldInteraction('name')}
                  className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise"
                />
              </div>

              {formState.status === 'field-errors' &&
                formState.errors?.name && (
                  <p className="text-red-500 text-sm  font-medium">
                    {formState.errors.name}
                  </p>
                )}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700"
                >
                  Email address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={formState.form.email}
                  placeholder="yourname@email.com"
                  onFocus={() => trackFieldInteraction('email')}
                  className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise"
                  required
                />
              </div>
              {formState.status === 'field-errors' &&
                formState.errors?.email && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.email}
                  </p>
                )}
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700"
                >
                  Subject (Optional)
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  defaultValue={formState.form.subject}
                  placeholder="Subject of your message"
                  onFocus={() => trackFieldInteraction('subject')}
                  className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700"
                >
                  Phone (Optional)
                </label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  defaultValue={formState.form.phone}
                  placeholder="Your phone number"
                  onFocus={() => trackFieldInteraction('phone')}
                  className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise"
                />
              </div>
              <div className="mb-6">
                <Label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  defaultValue={formState.form.message}
                  placeholder="Your message"
                  onFocus={() => trackFieldInteraction('message')}
                  className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise placeholder-codeco-turquoise dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise"
                  required />
              </div>
              {formState.status === 'field-errors' &&
                formState.errors?.message && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.message}
                  </p>
                )}
              <div className="mb-6 flex min-h-[1.5rem] items-center justify-center ps-[1.5rem]">
                <input
                  className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 check:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                  type="checkbox"
                  value=""
                  id="Check1"
                  onChange={e => {
                    sendGTMEvent({
                      event: 'contact_form_privacy_toggle',
                      accepted: e.target.checked,
                      page: 'contact_page',
                    })
                  }}
                />
                <label
                  className="inline-block ps-[0.15rem] pt-[0.15rem] hover:cursor-pointer"
                  htmlFor="Check1"
                >
                  Agree to privacy policy
                </label>
              </div>
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
}: HTMLAttributes<HTMLButtonElement> & {
  idleText: string
  submittingText: string
}) {
  const { pending } = useFormStatus()

  // Track button state changes
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
      className="w-full py-3 text-center bg-linear-to-br from-indigo-400 to-rose-500 hover:opacity-70 text-white rounded-lg hover:bg-sky-900 disabled:bg-gray-400 disabled:cursor-default"
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

// "use client";

// import { HTMLAttributes, useEffect, useRef, useTransition, startTransition } from "react";
// import { toast } from "sonner";
// import { createContact } from "../actions/contact/contactAction";
// import { ContactFormState } from "../actions/contact/contactAction";
// import { Label } from "@/components/ui/label";
// import { useFormStatus } from "react-dom";
// import { useActionState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MailWarning } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import ReCaptchaProvider from "@/components/ReCaptchaProvider";

// interface NewsProps {
//   className?: string;
//   transition?: ReturnType<typeof useTransition>;
// }

// function ContactsPage({ className, transition }: NewsProps) {
//   const router = useRouter();
//   const formRef = useRef<HTMLFormElement>(null);
//   const { executeRecaptcha } = useGoogleReCaptcha();
//   const [formState, dispatch] = useActionState(createContact, {
//     form: { name: "", email: "", message: "" },
//     status: "default",
//   } as ContactFormState);

//   useEffect(() => {
//     if (formState.status === "success") {
//       toast.success("Contact Submitted", {
//         description: "Your message has been sent successfully.",
//       });
//       void router.push("/");
//     }

//     if (formState.status === "error") {
//       toast.error("Possibly a duplicate email!", {
//         description:
//           typeof formState.errors === "string"
//             ? formState.errors
//             : Object.values(formState.errors || {}).join(", "),
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       });
//     }

//     if (formState.status === "field-errors") {
//       toast.error("Form Error", {
//         description: "Check the form for errors and try again.",
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       });
//     }
//   }, [formState.status]);

//   const formAction = async (formData: FormData) => {
//     if (!executeRecaptcha) {
//       toast.error("Security Error", {
//         description:
//           "Security verification not available. Please try again.",
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       });
//       return;
//     }

//     try {
//       const token = await executeRecaptcha("contact_submit");
//       formData.append("recaptchaToken", token);

//       // Wrap dispatch in startTransition
//       startTransition(() => {
//         dispatch(formData);
//       });
//     } catch (error) {
//       console.error("reCAPTCHA error:", error);
//       toast.error("Security Error", {
//         description:
//           "Security verification not available. Please try again.",
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       });
//     }
//   };

//   return (
//     <div className="relative flex flex-col min-h-screen justify-start overflow-hidden bg-white py-2 md:py-8 lg:py-24">
//       <img
//         src="/img/abs-ice.svg"
//         alt="robot contact"
//         className="hidden md:block absolute top-1/2 left-1/2 max-w-none -translate-x-2/4 -translate-y-2/4 image-with-rounded-corners"
//         width="1308"
//       />
//       <div className="absolute inset-0 bg-[url(/img/web-design.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] border-b border-gray-300  pb-6 pt-8 backdrop-blur-2xl"></div>
//       <div className="relative bg-white px-4 py-8 md:pt
//       y-12 pb-6 md:pb-12 shadow-xl ring-1 ring-white md:ring-codeco-turquoise/2 mx-auto w-full max-w-md md:max-w-lg rounded-lg z-30">
//         <div className="mx-auto max-w-md">
//           <div
//             className="mx-auto block max-w-md rounded-lg bg-white  p-6 shadow-4 dark:bg-surface-dark">
//             <form
//               ref={formRef}
//               action={formAction}
//             >
//               <div className="mb-6">
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-codeco-turquoise prose dark:text-codeco-turquoise-700 ">Your name</label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   defaultValue={formState.form.name}
//                   placeholder="Your Name"
//                   className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise" />
//               </div>

//               {formState.status === "field-errors" && formState.errors?.name && (
//                 <p className="text-red-500 text-sm  font-medium">{formState.errors.name}</p>
//               )}
//               <div className="mb-6">
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700">Email address</label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   defaultValue={formState.form.email}
//                   placeholder="yourname@email.com"
//                   className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise"
//                   required
//                 />
//               </div>
//               {formState.status === "field-errors" && formState.errors?.email && (
//                 <p className="text-red-500 text-sm">{formState.errors.email}</p>
//               )}
//               <div className="mb-6">
//                 <label htmlFor="subject" className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700">Subject (Optional)</label>
//                 <Input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
//                   defaultValue={formState.form.subject}
//                   placeholder="Subject of your message"
//                   className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise" />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="phone" className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700">Phone (Optional)</label>
//                 <Input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   defaultValue={formState.form.phone}
//                   placeholder="Your phone number"
//                   className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise-400 placeholder-codeco-turquoise-700 dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise" />
//               </div>
//               <div className="mb-6">
//                 <Label htmlFor="message" className="block mb-2 text-sm font-medium text-codeco-turquoise dark:text-codeco-turquoise-700">Message</Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   defaultValue={formState.form.message}
//                   placeholder="Your message"
//                   className="bg-pink-50 border border-codeco-turquoise text-codeco-turquoise- dark:text-codeco-turquoise placeholder-codeco-turquoise dark:placeholder-codeco-turquoise text-sm rounded-lg focus:ring-codeco focus:border-codeco block w-full p-2.5 dark:bg-gray-700 dark:border-codeco-turquoise"
//                   required>
//                 </Textarea>
//               </div>
//               {formState.status === "field-errors" && formState.errors?.message && (
//                 <p className="text-red-500 text-sm">{formState.errors.message}</p>
//               )}
//               <div className="mb-6 flex min-h-[1.5rem] items-center justify-center ps-[1.5rem]">
//                 <input
//                   className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
//                   type="checkbox"
//                   value=""
//                   id="Check1" />
//                 <label
//                   className="inline-block ps-[0.15rem] pt-[0.15rem] hover:cursor-pointer"
//                   htmlFor="exampleCheck10">
//                   Agree to privacy policy
//                 </label>

//               </div>
//               <SubmitButton idleText="Submit" submittingText="Submitting..." />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ContactPage() {
//   return (
//     <ReCaptchaProvider>
//       <ContactsPage />
//     </ReCaptchaProvider>
//   );
// }

// function SubmitButton({
//   idleText,
//   submittingText,
//   ...props
// }: HTMLAttributes<HTMLButtonElement> & {
//   idleText: string;
//   submittingText: string;
// }) {
//   const { pending } = useFormStatus();

//   return (
//     <Button
//       type="submit"
//       {...props}
//       className="w-full py-3 text-center bg-sky-500 text-white rounded-lg hover:bg-sky-600 disabled:bg-gray-400 disabled:cursor-default"
//       disabled={pending}
//     >
//       {pending ? submittingText : idleText}
//     </Button>
//   );
// }
