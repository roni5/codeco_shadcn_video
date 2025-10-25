'use client'

import {
  type NewsletterFormState,
  createNewsletter,
} from '@/app/actions/newsletter/actions'
import { Button } from '@/components/ui/button'
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google'
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

export default function Newsletter({ className, transition }: NewsProps) {
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
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="max-w-md">
                  <h4 className="font-heading text-4xl sm:text-3xl prose antialiased text-gray-600 block md:ml-0 text-shadow-md drop-shadow-md z-50 font-semibold mb-8 md:mb-16">
                    Sign up for our newsletter
                  </h4>
                  <div className="md:flex">
                    <div className="mb-6 md:mb-0 md:mr-3 pt-2 text-shadow-md drop-shadow-md z-50 text-gray-600">
                      <svg
                        fill="#FFCF63"
                        width="70px"
                        height="70px"
                        viewBox="0 0 96 96"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title />
                        <path d="M93.6914,1.2644a6.0509,6.0509,0,0,0-5.1445-1.09L41.25,11.9988H24A23.918,23.918,0,0,0,12.69,57.0354L24.3105,91.8973A5.9934,5.9934,0,0,0,30,95.9988H54A5.9991,5.9991,0,0,0,59.69,88.1L51.1472,62.4729l37.4,9.35A6.1224,6.1224,0,0,0,90,71.9988a5.9916,5.9916,0,0,0,6-6v-60A5.997,5.997,0,0,0,93.6914,1.2644ZM24,23.9988H36v24H24a12,12,0,0,1,0-24Zm10.3242,60-7.998-24h11.35l7.998,24ZM84,58.3113l-36-9V22.6863l36-9Z" />
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <p className="text-md md:text-lg font-semibold text-gray-400">
                        Stay in the loop{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <form ref={formRef} action={handleFormSubmit}>
                  <div className="max-w-lg lg:ml-auto">
                    <div className="sm:flex mb-2 items-center">
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
                        /*
                        relative group inline-block flex-shrink-0 w-full sm:w-auto py-2 px-5 text-md font-semibold text-slate-50 bg-sky-500 rounded-md overflow-hidden */
                        className="w-full mb-3 sm:mb-0 sm:mr-4 py-2 px-4 text-sm text-codeco-blue placeholder-gray-400 border border-gray-200 focus:border-sky-500 focus:outline-sky-500 rounded-lg"
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
                    <span className="block text-xs font-semibold text-gray-400">
                      <span className="hidden md:inline-block md:text-xs">
                        We care about your data in our
                      </span>
                      <a
                        className="inline-block text-codeco-blue ml-3"
                        href="/privacy"
                        onClick={() => {
                          sendGTMEvent({
                            event: 'privacy_policy_click',
                            from_location: 'newsletter_footer',
                          })
                        }}
                      >
                        privacy policy
                      </a>
                    </span>
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
    <Button
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
      className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-2 px-5 text-md font-semibold text-slate-50 bg-sky-500 rounded-md overflow-hidden shadow-xl/20"
      type="submit"
    >
      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
      <div className="relative flex items-center justify-center pb-3 mb-3">
        <span className="mr-3 text-center -mt-0.5 ">
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
          <path
            d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </Button>
  )
}

// "use client"

// import type { ReactNode } from "react";
// import { useEffect, useRef, useTransition, HTMLAttributes, } from "react";
// import { createNewsletter, NewsletterFormState } from "@/app/actions/newsletter/actions";
// import { toast } from "sonner"
// //import { SVGProps } from '@/utils/types/helpers';
// import {  useFormStatus } from "react-dom";
// import { useActionState } from "react";

// //import { useToast } from "@/components/ui/use-toast";
// import { Input } from "@/components/ui/input";
// //import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { MailWarning } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRouter } from 'next/navigation'
// import Image from "next/image";
// import { GoogleTagManager } from '@next/third-parties/google'
// import { sendGTMEvent } from '@next/third-parties/google'
// interface NewsProps {
//   className?: string;
//   //children: ReactNode;
//   transition?: ReturnType<typeof useTransition>;
// }

// export default function Newsletter({ className, transition }: NewsProps) {
//   const router = useRouter()
//   //const { toast } = useToast();
//   const formRef = useRef<HTMLFormElement>(null);
//   const [formState, dispatch] = useActionState(createNewsletter, {
//     form: { email: "" },
//     status: "default"
//   } as NewsletterFormState);

//   useEffect(() => {
//     if (formState.status === "success") {
//       toast.success("Newsletter Submitted", {
//         description: "Your Newsletter has been sent successfully.",
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

//   return (
//     <div>
//       <GoogleTagManager gtmId="GTM-P6CXJTBT" />
//       <section className="relative py-0 md:py-6 overflow-hidden">
//         <div className="container px-4 mx-auto">
//           <div className="relative max-w-7xl pt-2 pb-24 md:pt-0 px-6 md:px-16 mx-auto">
//             {/* <Image width={800}
//               height={600} quality={75} className="absolute top-0 left-0 w-full h-full rotate-180" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/images/auth-bg_2.png" alt="Background-Newsletter" /> */}
//             <div className="relative z-10 flex flex-wrap -mx-4 items-end">
//               <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
//                 <div className="max-w-md">
//                   <h4 className="font-heading  text-4xl sm:text-3xl prose antialiased text-gray-600 block md:ml-0 text-shadow-md drop-shadow-md z-50  font-semibold mb-8 md:mb-16">Sign up for our newsletter</h4>
//                   <div className="md:flex">
//                     <div className="mb-6 md:mb-0 md:mr-3 pt-2 text-shadow-md drop-shadow-md z-50 text-gray-600">
//                       <svg fill="#FFCF63" width="70px" height="70px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M93.6914,1.2644a6.0509,6.0509,0,0,0-5.1445-1.09L41.25,11.9988H24A23.918,23.918,0,0,0,12.69,57.0354L24.3105,91.8973A5.9934,5.9934,0,0,0,30,95.9988H54A5.9991,5.9991,0,0,0,59.69,88.1L51.1472,62.4729l37.4,9.35A6.1224,6.1224,0,0,0,90,71.9988a5.9916,5.9916,0,0,0,6-6v-60A5.997,5.997,0,0,0,93.6914,1.2644ZM24,23.9988H36v24H24a12,12,0,0,1,0-24Zm10.3242,60-7.998-24h11.35l7.998,24ZM84,58.3113l-36-9V22.6863l36-9Z" /></svg>
//                     </div>
//                     <div className="max-w-xs">
//                       <p className="text-md md:text-lg font-semibold text-gray-400">Stay in the loop </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full lg:w-1/2 px-4">
//                 <form
//                   ref={formRef}
//                   action={dispatch}>
//                   <div className="max-w-lg lg:ml-auto">
//                     <div className="sm:flex mb-2 items-center">
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         defaultValue={formState.form.email}
//                         className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-codeco-blue placeholder-gray-400 border border-gray-200 focus:border-sky-500 focus:outline-sky-500 rounded-lg" placeholder="janedoe@gmail.com" />
//                       {formState.status === "field-errors" && formState.errors?.email && (
//                         <p className="text-red-500 text-sm">{formState.errors.email}</p>
//                       )}
//                       <SubmitButton idleText="Subscribe" submittingText="Submitting..." />
//                       <button
//                         onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'newsletter' })}
//                       >
//                         Send Event
//                       </button>
//                     </div>
//                     <span className="block text-xs font-semibold text-gray-400">
//                       <span className="hidden md:inline-block md:text-xs">We care about your data in our</span>
//                       <a className="inline-block text-codeco-blue ml-3" href="/privacy">privacy policy</a>
//                     </span>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
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
//       {...props}
//       disabled={pending}
//       className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-2 px-5 text-md font-semibold text-slate-50 bg-sky-500 rounded-md overflow-hidden" type="submit">
//       <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
//       <div className="relative flex items-center justify-center pb-3 mb-3">
//         <span className="mr-3 text-center ">{pending ? submittingText : idleText}</span>
//         <svg className="relative inline-block translate-y-[-2px]" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z" fill="currentColor"></path>
//         </svg>
//       </div>
//     </Button>
//   );
// }

// useEffect(() => {
//   if (formState.status === "success") {
//     toast({
//       title: "Newsletter Submitted",
//       description: "Your Newsletter has been sent successfully.",
//     });
//     void router.push("/");

//   }
// }, [formState.status, toast]);
//absolute top-0 right-0 lg:w-125 -mr-40 md:-mr-24 lg:-mr-0
