'use client'

import ReCaptchaProvider from '@/components/ReCaptchaProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google'
import { Calendar, Clock3, MailWarning } from 'lucide-react'
import { startTransition, useActionState, useEffect, useRef } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { toast } from 'sonner'
import {
  type ContactFormState,
  createContact,
} from '../actions/contact/contactAction'
import PasswordField from '@/components/passwordField'
import { DayDropdown } from '@/components/daydrop'
import TestCal from '@/components/testcal'

function ContactFormContent() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, dispatch] = useActionState(createContact, {
    form: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    status: 'default',
  } as ContactFormState)

  const { executeRecaptcha } = useGoogleReCaptcha()

  useEffect(() => {
    if (formState.status === 'success') {
      // Send GTM event on successful form submission
      sendGTMEvent({
        event: 'contact_form_submission',
        formName: 'contact_sales',
        formStatus: 'success',
        email: formState.form.email,
        subject: formState.form.subject || 'Not provided',
      })

      toast.success('Message sent successfully!')

      // Reset the form after successful submission
      if (formRef.current) {
        formRef.current.reset()
      }
    } else if (formState.status === 'error') {
      // Track form submission errors
      sendGTMEvent({
        event: 'contact_form_error',
        formName: 'contact_sales',
        errorType:
          typeof formState.errors === 'string' ? 'general' : 'field_errors',
        errorMessage:
          typeof formState.errors === 'string'
            ? formState.errors
            : Object.values(formState.errors || {}).join(', '),
      })

      toast.error('Failed to send', {
        description:
          typeof formState.errors === 'string'
            ? formState.errors
            : Object.values(formState.errors || {}).join(', '),
        icon: <MailWarning className="h-5 w-5 text-red-500" />,
      })
    } else if (formState.status === 'field-errors') {
      // Track form validation errors
      sendGTMEvent({
        event: 'contact_form_validation_error',
        formName: 'contact_sales',
      })

      toast.error('Form Error', {
        description: 'Please fix the errors in the form and try again.',
        icon: <MailWarning className="h-5 w-5 text-red-500" />,
      })
    }
  }, [formState.status, formState.form, formState.errors])

  // Track form interaction when user focuses on the form
  const handleFormFocus = () => {
    sendGTMEvent({
      event: 'contact_form_interaction',
      formName: 'contact_sales',
      action: 'focus',
    })
  }

  const formAction = async (formData: FormData) => {
    if (!executeRecaptcha) return
    const token = await executeRecaptcha('contact_submit')
    formData.append('recaptchaToken', token)

    // Track form submission attempt
    sendGTMEvent({
      event: 'contact_form_submit_attempt',
      formName: 'contact_sales',
    })

    startTransition(() => {
      dispatch(formData)
    })
  }

  return (
    <div className="isolate mt-8 md:mt-28 px-6 py-24 sm:py-32 lg:px-8">
      <GoogleTagManager gtmId="GTM-P6CXJTBT" />
      <div
        data-component="dialog"
        className="mx-auto max-w-2xl text-center rounded-2xl border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        style={{
          backgroundImage:
            'linear-gradient(120deg, var(--indigo-6), var(--crimson-5)) ',
        }}
      >
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact sales
        </h2>
        <p className="mt-2 text-sm md:text-lg text-gray-600">
          We&apos;d love to hear from you. Please fill out the form below.
        </p>
      </div>

      <form
        ref={formRef}
        action={formAction}
        onFocus={handleFormFocus}
        className="mx-auto mt-16 max-w-xl sm:mt-20 bg-no-repeat bg-center bg-[length:100%_100%] p-8 rounded-lg shadow-lg"
        style={{
          backgroundImage:
            'linear-gradient(120deg, var(--indigo-6), var(--crimson-5))',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <Label htmlFor="name">Your name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              defaultValue={formState.form.name}
              required
              placeholder="John Doe"
              className="mt-2"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              defaultValue={formState.form.email}
              required
              placeholder="you@example.com"
              className="mt-2"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={formState.form.phone}
              placeholder="+44 1234 567890"
              className="mt-2"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              defaultValue={formState.form.subject}
              placeholder="Message subject"
              className="mt-2"
            />
          </div>
          <div className="sm:col-span-1">
            <Label htmlFor="color">Color</Label>
            <Input
              type="color"
              id="color"
              name="color"
              // defaultValue={formState.form.subject}
              // placeholder="Message subject"
              className="mt-2"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              defaultValue={formState.form.message}
              required
              placeholder="Your message..."
              className="mt-2"
            />
          </div>
          <div className="sm:col-span-2">
            {/* <Label htmlFor="date">
              Select Date
              <Calendar className="w-6 h-6 " />
            </Label> */}
            <TestCal />
          </div>
          <div>
            <Label htmlFor="date">
              Date: Click Inside on{' '}
              <Calendar className="w-6 h-6 text-[var(--indigo-6)]" />
            </Label>
            <Input
              type="date"
              id="date"
              min="2025-06-10"
              name="date"
              className="mt-2 text-center my-3 px-3 py-6 text-3xl pointer-events-auto bg-white/40 text-black border-2 border-fuchsia-200 focus:ring-4 focus:ring-fuchsia-400 "
            />
          </div>
          <div>
            <Label htmlFor="time">
              Time: Click Inside on{' '}
              <Clock3 className="w-6 h-6 text-[var(--indigo-6)]" />
            </Label>
            <Input
              type="time"
              id="time"
              name="time"
              min="09:00"
              max="18:00"
              className="peer  mt-2 ml-4 text-center my-3 px-3 py-6 text-sm pointer-events-auto focus:bg-white/40 outline-none  bg-white/40 text-black border-1 border-fuchsia-200 focus:ring-1 focus:ring-fuchsia-400"
            />
          </div>
          <PasswordField />
          <div className="sm:col-span-1">
            <Button type="reset">Reset</Button>
          </div>
        </div>

        <div className="mt-10">
          <Button
            type="submit"
            className="w-full"
            onClick={() => {
              sendGTMEvent({
                event: 'contact_form_button_click',
                formName: 'contact_sales',
              })
            }}
          >
            Let's talk
          </Button>
        </div>
      </form>
    </div>
  )
}
// "use client"

// import { useActionState, useRef, useEffect, startTransition } from "react"
// import { toast } from "sonner"
// import { MailWarning } from "lucide-react"
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
// import ReCaptchaProvider from "@/components/ReCaptchaProvider"

// import { createContact } from "../actions/contact/contactAction"
// import { ContactFormState } from "../actions/contact/contactAction"

// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { GoogleTagManager } from '@next/third-parties/google'
// import { sendGTMEvent } from '@next/third-parties/google'
// function ContactFormContent() {
//   const formRef = useRef<HTMLFormElement>(null)
//   const [formState, dispatch] = useActionState(createContact, {
//     form: {
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     },
//     status: "default",
//   } as ContactFormState)

//   const { executeRecaptcha } = useGoogleReCaptcha()

//   useEffect(() => {
//     if (formState.status === "success") {
//       toast.success("Message sent successfully!")
//     } else if (formState.status === "error") {
//       toast.error("Failed to send", {
//         description:
//           typeof formState.errors === "string"
//             ? formState.errors
//             : Object.values(formState.errors || {}).join(", "),
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       })
//     } else if (formState.status === "field-errors") {
//       toast.error("Form Error", {
//         description: "Please fix the errors in the form and try again.",
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       })
//     }
//   }, [formState.status])

//   const formAction = async (formData: FormData) => {
//     if (!executeRecaptcha) return
//     const token = await executeRecaptcha("contact_submit")
//     formData.append("recaptchaToken", token)

//     startTransition(() => {
//       dispatch(formData)
//     })
//   }

//   return (
//     <div  className="isolate  px-6 py-24 sm:py-32 lg:px-8" >
//       <GoogleTagManager gtmId="GTM-P6CXJTBT" />
//       <div data-component="dialog" className="mx-auto max-w-2xl text-center rounded-2xl  border-b border-gray-300  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" style={{
//         backgroundImage: 'linear-gradient(120deg, var(--indigo-6), var(--crimson-5))'
//       }}>
//         <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl" >Contact sales</h2>
//         <p className="mt-2 text-lg text-gray-600">We'd love to hear from you. Please fill out the form below.</p>
//       </div>

//       <form
//         ref={formRef}
//         action={formAction}
//         className="mx-auto mt-16 max-w-xl sm:mt-20  bg-no-repeat bg-center bg-[length:100%_100%] p-8 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: 'linear-gradient(120deg, var(--indigo-6), var(--crimson-5))'
//         }}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
//           <div>
//             <Label htmlFor="name">Your name</Label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               defaultValue={formState.form.name}
//               required
//               placeholder="John Doe"
//               className="mt-2"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               defaultValue={formState.form.email}
//               required
//               placeholder="you@example.com"
//               className="mt-2"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <Label htmlFor="phone">Phone</Label>
//             <Input
//               type="tel"
//               id="phone"
//               name="phone"
//               defaultValue={formState.form.phone}
//               placeholder="+44 1234 567890"
//               className="mt-2"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <Label htmlFor="subject">Subject</Label>
//             <Input
//               type="text"
//               id="subject"
//               name="subject"
//               defaultValue={formState.form.subject}
//               placeholder="Message subject"
//               className="mt-2"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               name="message"
//               rows={4}
//               defaultValue={formState.form.message}
//               required
//               placeholder="Your message..."
//               className="mt-2"
//             />
//           </div>
//         </div>

//         <div className="mt-10">
//           <Button type="submit" className="w-full">Let’s talk</Button>
//         </div>
//       </form>
//     </div>
//   )
// }

export default function ContactPage() {
  return (
    <ReCaptchaProvider>
      <ContactFormContent />
    </ReCaptchaProvider>
  )
}

// "use client"

// import { useActionState, useTransition, useRef, useEffect } from "react"
// import { toast } from "sonner"
// import { MailWarning } from "lucide-react"
// import { z } from "zod"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
// import ReCaptchaProvider from "@/components/ReCaptchaProvider"

// import { createContact } from "../actions/contact/contactAction"
// import { ContactFormState } from "../actions/contact/contactAction"

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

// const FormSchema = z.object({
//   firstName: z.string().min(1, { message: "First name is required" }),
//   lastName: z.string().min(1, { message: "Last name is required" }),
//   email: z.string().email({ message: "Invalid email address" }),
//   phone: z.string().optional(),
//   message: z.string().min(5, { message: "Message must be at least 5 characters" }),
// })

// type FormSchemaType = z.infer<typeof FormSchema>

// function ContactFormContent() {
//   const formRef = useRef<HTMLFormElement>(null)
//   const [formState, dispatch] = useActionState(createContact, {
//     form: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       message: "",
//     },
//     status: "default",
//   } as ContactFormState)

//   const { executeRecaptcha } = useGoogleReCaptcha()
//   const form = useForm<FormSchemaType>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: formState.form,
//   })

//   useEffect(() => {
//     if (formState.status === "success") {
//       toast.success("Form submitted!", {
//         description: `${formState.form.firstName} ${formState.form.lastName} — Thanks for reaching out!`,
//       })
//     } else if (formState.status === "error") {
//       toast.error("Failed to send", {
//         description:
//           typeof formState.errors === "string"
//             ? formState.errors
//             : Object.values(formState.errors || {}).join(", "),
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       })
//     } else if (formState.status === "field-errors") {
//       toast.error("Form Error", {
//         description: "Please fix the errors in the form and try again.",
//         icon: <MailWarning className="h-5 w-5 text-red-500" />,
//       })
//     }
//   }, [formState.status])

//   const formAction = async (formData: FormData) => {
//     if (!executeRecaptcha) return
//     const token = await executeRecaptcha("contact_submit")
//     formData.append("recaptchaToken", token)
//     dispatch(formData)
//   }

//   return (
//     <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact sales</h2>
//         <p className="mt-2 text-lg text-gray-600">We'd love to hear from you. Please fill out the form below.</p>
//       </div>

//       <Form {...form}>
//         <form
//           ref={formRef}
//           action={formAction}
//           className="mx-auto mt-16 max-w-xl sm:mt-20"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
//             <FormField control={form.control} name="firstName" render={({ field }) => (
//               <FormItem>
//                 <FormLabel>First name</FormLabel>
//                 <FormControl><Input placeholder="John" {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />
//             <FormField control={form.control} name="lastName" render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Last name</FormLabel>
//                 <FormControl><Input placeholder="Doe" {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />
//             <FormField control={form.control} name="email" render={({ field }) => (
//               <FormItem className="sm:col-span-2">
//                 <FormLabel>Email</FormLabel>
//                 <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />
//             <FormField control={form.control} name="phone" render={({ field }) => (
//               <FormItem className="sm:col-span-2">
//                 <FormLabel>Phone</FormLabel>
//                 <FormControl><Input type="tel" placeholder="+44 1234 567890" {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />
//             <FormField control={form.control} name="message" render={({ field }) => (
//               <FormItem className="sm:col-span-2">
//                 <FormLabel>Message</FormLabel>
//                 <FormControl><Textarea rows={4} placeholder="Let us know how we can help..." {...field} /></FormControl>
//                 <FormMessage />
//               </FormItem>
//             )} />
//           </div>

//           <div className="mt-10">
//             <Button type="submit" className="w-full">Let’s talk</Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   )
// }

// export default function ContactPage() {
//   return (
//     <ReCaptchaProvider>
//       <ContactFormContent />
//     </ReCaptchaProvider>
//   )
// }
