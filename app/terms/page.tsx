'use client'

import SEO from '@/components/seo';
//import type { Metadata } from 'next';



export default function TermsPage() {
  return (
    <div className="relative mx-auto pt-24 pb-8 px-6">
      <SEO
        pageTitle="Terms and Conditions"
        pageDescription="All Terms and Conditions "
      />
      <div className="flex w-full flex-col border-opacity-50 prose text-pretty dark:prose-invert mx-3 p-4 antialiased space-y-4">
        <h1 className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center text-codeco-blue mb-5 md:mb-10">
          Terms of Service
        </h1>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Introduction
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            These terms and conditions (&quot;Terms&quot;) govern your use of
            the your-awesome-site.com Web platform (&quot;Service&quot;). By
            accessing or using the Service, you agree to be bound by these
            Terms. If you do not agree to all the Terms, you may not use the
            Service. Start your project with a Postgres database,
            Authentication, instant APIs, Edge Functions, Realtime
            subscriptions, Storage, and Vector embeddings.
          </p>
          <h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Your Account
          </h2>
          {/* Privacy Policy content here */}
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            You may need to create an account to use certain features of the
            Service. You are responsible for maintaining the security of your
            account and for all activity that occurs under your account. You
            agree to notify your-awesome-site.com immediately of any
            unauthorized use of your account or any other security breach.
          </p>
          <h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Your Content
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            You may submit content (e.g., data uploads) to the Service. You
            retain ownership of your content. By submitting content, you grant
            your-awesome-site.com a non-exclusive, royalty-free license to use,
            reproduce, modify, distribute, and display your content for the
            purpose of providing the Service.
          </p>
          <h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            intellectual property rights
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            We own all intellectual property rights in the Service and its
            content. You may not remove, obscure, or alter any of
            your-awesome-site.com&apos;s branding, logos, or legal notices.
          </p>
          <h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Third-Party Content
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            The Service may contain content from third parties. You may not use
            this content without the third party&apos;s permission or as
            otherwise allowed by law. The views expressed in the content of
            third parties are their own and don&apos;t necessarily reflect
            your-awesome-site.com&apos;s views.
          </p>
          <h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Acceptable Use
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            You may not use the Service for any illegal or unauthorized purpose.
            You may not interfere with or disrupt the Service or its servers.
            You may not violate the security of the Service.
          </p>
          <h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Termination
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-base font-normal mb-4 text-gray-700 antialiased">
            Our Company may terminate your access to the Service for any reason,
            at any time, and without notice.
          </p>
          <h2 className="text-2xl my-8 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Disclaimers
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-base font-normal mb-3 text-gray-700 antialiased">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE,&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            your-awesome-site.com DOES NOT WARRANT THAT THE SERVICE WILL BE
            UNINTERRUPTED, SECURE, OR ERROR-FREE.
          </p>
          <h2 className="text-normal my-8 py-6  xs:text-center  font-bold text-gray-800 ">
            Limitation of Liability
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-base font-normal mb-3 text-gray-700 antialiased">
            IN NO EVENT SHALL your-awesome-site.com BE LIABLE FOR ANY DIRECT,
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES
            (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, DATA,
            OR GOODWILL) ARISING OUT OF OR RELATING TO THE USE OR INABILITY TO
            USE THE SERVICE, EVEN IF your-awesome-site.com HAS BEEN ADVISED OF
            THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <h2 className="text-2xl my-9 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Governing Law
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            These Terms shall be governed by and construed in accordance with
            the laws of the United Kingdom
          </p>
          <h2 className="text-2xl my-9 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Dispute Resolution
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            Any dispute arising out of or relating to these Terms shall be
            resolved by binding arbitration in accordance with the rules of the
            American Arbitration Association. The arbitration shall be held in
            United Kingdom
          </p>
          <h2 className="text-2xl my-9 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Entire Agreement
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
            These Terms constitute the entire agreement between you and
            your-awesome-site.com regarding the use of the Service.
          </p>
          <h2 className="text-2xl my-9 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
            Severability
          </h2>
          <p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-12 md:mb-24 text-gray-700 antialiased">
            If any provision of these Terms is held to be invalid or
            unenforceable, such provision shall be struck and the remaining
            provisions shall remain in full force and effect.
          </p>
        </div>
      </div>
    </div>
  )
}