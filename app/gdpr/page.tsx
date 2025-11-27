import SEO from "@/components/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "your-awesome-site.com GDPR Statement",
	description:
		" your-awesome-site.com, an online platform connecting individuals seeking assistance with local Taskers. ",
};

export default function GdprPage() {
	return (
		<div className=" flex w-full flex-col mx-auto border-opacity-50 antialiased  space-4 ">
			<SEO pageTitle="GDPR" pageDescription="All our GDPR legals " />
			<span className="max-w-sm mt-4 w-8 h-8 mr-1 pl-1">
				{/* <BackButton /> */}
			</span>
			<h1 className="text-3xl mx-auto my-12 md:text-5xl lg:text-6xl font-bold text-center text-codeco-blue mb-5 md:mb-10">
				GDPR Statement
			</h1>
			<div className="max-w-3xl mx-auto">
				<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
					At your-awesome-site.com, we are committed to protecting your privacy
					and ensuring the security of your personal data. This index statement
					outlines how we collect, process, and handle your personal information
					in accordance with the General Data Protection Regulation.
				</p>
				<h2 className="text-2xl my-12 py-6  xs:text-center md:text-4xl font-bold text-gray-800 ">
					Data Collection and Use
				</h2>
				{/* Privacy Policy content here */}
				<p className="wrap-break-word mx-auto xs:mx-6 text-xl font-normal mb-4 text-gray-700 antialiased">
					GDPR Statement At your-awesome-site.com, we are committed to
					protecting your privacy and ensuring the security of your personal
					data. This GDPR statement outlines how we collect, process, and handle
					your personal information in accordance with the General Data
					Protection Regulation. Data Collection and Use a. Personal
					Information: We may collect personal information such as your name,
					email address, and contact details when you interact with our website,
					subscribe to our newsletters, or use our services. We use this
					information solely for the purpose of providing and improving our
					services, communicating with you, and fulfilling any contractual
					obligations. b. Cookies and Tracking Technologies: Our website may use
					cookies and similar tracking technologies to enhance your browsing
					experience and collect information about how you use our website. This
					information is used to analyze trends, administer the website, track
					users movements, and gather demographic information. Lawful Basis for
					Processing We will only process your personal data when there is a
					lawful basis to do so, such as: a. Contractual Necessity: Processing
					is necessary for the performance of a contract or to take steps at
					your request before entering into a contract. b. Consent: Processing
					is based on your explicit consent, which you may withdraw at any time.
					c. Legal Obligations: Processing is necessary to comply with legal
					obligations imposed on us. d. Legitimate Interests: Processing is
					necessary for our legitimate interests or those of a third party,
					provided that your fundamental rights and freedoms do not override
					those interests. Data Sharing and Disclosure We do not sell, rent, or
					trade your personal information to third parties for marketing
					purposes. However, we may share your data with trusted third-party
					service providers who assist us in operating our website and providing
					our services, subject to appropriate data protection agreements. Data
					Security We implement appropriate technical and organizational
					measures to protect your personal data from unauthorized access,
					accidental loss, alteration, or disclosure. However, please be aware
					that no method of transmission over the internet or electronic storage
					is 100% secure. Data Retention We will retain your personal data only
					for as long as necessary to fulfill the purposes for which it was
					collected, including any legal or reporting requirements. When your
					data is no longer required, we will securely delete or anonymize it.
					Your Rights Under the GDPR, you have certain rights regarding your
					personal data, including the right to access, rectify, restrict
					processing, and erase your data. You also have the right to object to
					processing and the right to data portability. To exercise these
					rights, please contact us using the information provided below.
					Contact Information If you have any questions, concerns, or requests
					regarding our GDPR statement or the processing of your personal data,
					please contact us at: Company Name: your-awesome-site.com Address:
					[Hamilton House Mereden Road London sw1 3sx] Email:
					info@your-awesome-site.com Phone: +44 123 456 789
				</p>
			</div>{" "}
			<div className="py-4 px-4 mt-7 xs:my-16 sm:-mb-16 lg:my-16 xl:my-16 xs:py-32 sm:py-6 md:py-12 lg:py-16 xl:py-16 rounded  " />
		</div>
	);
}
