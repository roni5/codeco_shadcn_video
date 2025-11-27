"use client";
import SEO from "@/components/seo";

import Link from "next/link";

export default function PrivacyPage() {
	return (
		<div className="relative mx-auto pt-24 pb-8 px-6">
			<SEO pageTitle="GDPR" pageDescription="All our GDPR legals " />
			<div className="flex w-full flex-col border-opacity-50 prose text-pretty dark:prose-invert mx-3 p-4 antialiased space-y-4">
				<span className="max-w-sm w-8 h-8 my-2 sm:my-4 py-2 sm:py-4">
					{/* <BackButton /> */}
				</span>
				<h1 className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center text-codeco-blue mb-5 md:mb-10">
					Privacy Policy
				</h1>
				<div className="max-w-3xl mx-auto">
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						At your-awesome-site.com, we are committed to protecting your
						privacy and providing a secure online experience. This privacy
						policy outlines the types of information we collect, how we use it,
						and the choices you have regarding your information. Please read
						this policy carefully to understand our practices regarding your
						personal data.{" "}
					</p>
				</div>
				<div className="max-w-3xl mx-auto">
					<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						Your Account
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						In addition to the information provided automatically by your
						browser when you visit the Site, to become a subscriber to the
						Service you will need to create a personal profile. You can create a
						profile by registering with the Service and entering your email
						address, and creating a user name and a password. By registering,
						you are authorizing us to collect, store and use your email address
						in accordance with this Privacy Policy.
					</p>
					<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						Own Company
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						Personal Information: This may include your first and last name,
						email address, and any other information necessary for you to access
						and use our services. Usage Data: We may collect information about
						how you interact with our website and services, such as your IP
						address, browser type, pages visited, and time spent on our
						platform.
					</p>
					<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						Information Collection and Use
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						For a better experience while using our Service, we may require you
						to provide us with certain personally identifiable information,
						including but not limited to your name, phone number, and postal
						address. The information that we collect will be used to contact or
						identify you.
					</p>
					<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						Log Data
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						We want to inform you that whenever you visit our Service, we
						collect information that your browser sends to us that is called Log
						Data. This Log Data may include information such as your computer's
						Internet Protocol (IP) address, browser version, pages of our
						Service that you visit, the time and date of your visit, the time
						spent on those pages, and other statistics.
					</p>
					<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						Security
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						We value your trust in providing us your Personal Information, thus
						we are striving to use commercially acceptable means of protecting
						it. But remember that no method of transmission over the internet,
						or method of electronic storage is 100% secure and reliable, and we
						cannot guarantee its absolute security.
					</p>
					<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						Disclaimers
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						We do not offer human-based support for our free products. If you
						have a custom question as a user of our free products, first you'll
						need to subscribe to one of our plans. However, we aim to keep all
						our users satisfied with the quality of our products, therefore, we
						have created documentation to guide you through installing and using
						our products. Please check the documentation and if you still cannot
						find your answer, leave a comment on the product page. When you
						purchase a Developer license or Team License from
						your-awesome-site.com, you are getting 12 months of Premium Support.
					</p>
					<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						General Privacy
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						Helping you use the features within our product Bug fixes – if you
						discovered bug in your downloaded product we will fix it Customize
						you theme according to your design – For custom development needs,
						contact us. Fix hosting, server environment, or software issues.
						Schedule a specific time to offer support and use screen sharing
						applications. Take responsibility in case any issues arise from your
						changes to the theme outside the functionalities provided by us.
					</p>
					<h2 className="text-2xl my-8 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
						Europeon Law GDPR
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						GDPR Statement your-awesome-site.com, we are committed to protecting
						your privacy and ensuring the security of your personal data.
					</p>
					<Link
						href="/gdpr"
						className="mt-4 py-2 px-4 rounded-md no-underline text-white bg-primary hover:bg-sky-400 active:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-pelorous-600 focus:ring-offset-1 transition-colors duration-200 inline-flex items-center group text-xs md:text-sm font-semi-bold antialiased shadow-sm"
					>
						GDPR
					</Link>
					<h2 className="text-normal my-8 py-6  xs:text-center md:text-2xl font-bold text-gray-800 ">
						Data Collection and Use
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						Lawful Basis for Processing We will only process your personal data
						when there is a lawful basis to do so, such as: a. Contractual
						Necessity. Our website may use cookies and similar tracking
						technologies to enhance your browsing experience
					</p>
					<h2 className="text-xl my-9 py-6  xs:text-center md:text-2xl font-bold text-gray-800 ">
						Cookies
					</h2>
					<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
						Even if you use more than one device or computer on a regular basis,
						we can link cookies together so you will still receive a
						personalised online experience.
					</p>
					<Link
						href="/cookies"
						className="mt-4 py-2 px-4 rounded-md no-underline text-white bg-primary hover:bg-sky-400 active:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-1 transition-colors duration-200 inline-flex items-center group text-xs md:text-sm font-semi-bold antialiased shadow-sm"
					>
						Cookies
					</Link>

					<div className="my-12 md:my-24" />
				</div>
			</div>
		</div>
	);
}
