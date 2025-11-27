// app/service-agreement/page.tsx

interface AgreementData {
	agreementDate: string;
	projectName: string;
	provider: {
		address: string;
		email: string;
		phone: string;
		website: string;
	};
	client: {
		companyName: string;
		address: string;
		email: string;
		phone: string;
	};
	totalProjectCost: string;
	appDevelopmentCost: string;
	integrationCost: string;
	automationSetupCost: string;
	trainingDocCost: string;
	payment1Amount: string;
	payment2Amount: string;
	payment3Amount: string;
	hourlyRate: string;
	warrantyPeriodDays: number;
	postWarrantyHourlyRate: string;
	monthlyRetainerAmount: string;
	retainerHours: number;
	providerName: string;
	providerTitle: string;
	clientName: string;
	clientTitle: string;
	governingLaw: string;
	contactEmail: string;
	contactPhone: string;
}

// NOTE: In a real application, this data would come from an API, a database,
// or a static content file. We use a placeholder object here.
const agreementData: AgreementData = {
	agreementDate: "[Insert Date]",
	projectName: "[Insert Project Name]",
	provider: {
		address: "[Your Business Address]",
		email: "[Your Email]",
		phone: "[Your Phone Number]",
		website: "www.codecode.tech",
	},
	client: {
		companyName: "[Client Company Name]",
		address: "[Client Address]",
		email: "[Client Email]",
		phone: "[Client Phone Number]",
	},
	totalProjectCost: "$[Insert Amount]",
	appDevelopmentCost: "$[Amount]",
	integrationCost: "$[Amount]",
	automationSetupCost: "$[Amount]",
	trainingDocCost: "$[Amount]",
	payment1Amount: "$[Amount]",
	payment2Amount: "$[Amount]",
	payment3Amount: "$[Amount]",
	hourlyRate: "$[Hourly Rate]",
	warrantyPeriodDays: 30,
	postWarrantyHourlyRate: "$[Rate]",
	monthlyRetainerAmount: "$[Amount]",
	retainerHours: 8, // Placeholder for [X]
	providerName: "[Your Name]",
	providerTitle: "[Your Title]",
	clientName: "[Client Name]",
	clientTitle: "[Client Title]",
	governingLaw: "[Your State/Country]",
	contactEmail: "[your email]",
	contactPhone: "[your phone]",
};

const ServiceAgreementPage: React.FC = () => {
	const {
		agreementDate,
		projectName,
		provider,
		client,
		totalProjectCost,
		appDevelopmentCost,
		integrationCost,
		automationSetupCost,
		trainingDocCost,
		payment1Amount,
		payment2Amount,
		payment3Amount,
		hourlyRate,
		warrantyPeriodDays,
		postWarrantyHourlyRate,
		monthlyRetainerAmount,
		retainerHours,
		providerName,
		providerTitle,
		clientName,
		clientTitle,
		governingLaw,
		contactEmail,
		contactPhone,
	} = agreementData;

	// Helper component for section titles
	const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
		children,
	}) => (
		<h2 className="text-xl font-semibold mt-6 mb-3 border-b-2 border-gray-200 pb-1 print:border-black">
			{children}
		</h2>
	);

	// Helper component for sub-sections
	const SubSectionTitle: React.FC<{
		number: string;
		children: React.ReactNode;
	}> = ({ number, children }) => (
		<h3 className="text-lg font-medium mt-4 mb-2">
			{number} {children}
		</h3>
	);

	return (
		<div className="max-w-4xl mx-auto p-8 bg-white shadow-xl print:shadow-none print:p-0">
			<header className="text-center mb-10 print:mb-6">
				<p className="text-xs text-gray-500 mb-1 print:hidden">
					Content is user-generated and unverified.
				</p>
				<h1 className="text-3xl font-bold mb-2">
					SOFTWARE DEVELOPMENT &amp; AUTOMATION SERVICE AGREEMENT
				</h1>
				<p className="text-lg">Agreement Date: **{agreementDate}**</p>
				<p className="text-lg">Project Name: **{projectName}**</p>
			</header>

			{/* --- PARTIES --- */}
			<SectionTitle>PARTIES</SectionTitle>
			<div className="grid md:grid-cols-2 gap-8 text-sm">
				<div>
					<h3 className="font-bold text-base mb-2">SERVICE PROVIDER:</h3>
					<p>
						<strong>CodeCode.Tech</strong>
					</p>
					<p>{provider.address}</p>
					<p>Email: {provider.email}</p>
					<p>Phone: {provider.phone}</p>
					<p>
						Website:{" "}
						<a
							href={`https://${provider.website}`}
							className="text-blue-600 print:text-black"
							target="_blank"
							rel="noopener noreferrer"
						>
							{provider.website}
						</a>
					</p>
				</div>
				<div>
					<h3 className="font-bold text-base mb-2">CLIENT:</h3>
					<p>
						<strong>{client.companyName}</strong>
					</p>
					<p>{client.address}</p>
					<p>Email: {client.email}</p>
					<p>Phone: {client.phone}</p>
				</div>
			</div>

			{/* --- PROJECT SCOPE --- */}
			<SectionTitle>1. PROJECT SCOPE</SectionTitle>
			<SubSectionTitle number="1.1">Deliverables</SubSectionTitle>
			<p className="text-sm mb-4">
				CodeCode.Tech (&quot;Provider&quot;) agrees to develop and deliver the
				following services to Client:
			</p>

			<ul className="list-none space-y-3 pl-0 text-sm">
				<li>
					<h4 className="font-semibold">A. Custom Application Development</h4>
					<ul className="list-disc ml-6">
						<li>Web/Mobile application as specified in project requirements</li>
						<li>User interface and user experience design</li>
						<li>Database architecture and implementation</li>
						<li>Authentication and authorization systems</li>
						<li>Responsive design for multiple devices</li>
					</ul>
				</li>
				<li>
					<h4 className="font-semibold">B. Third-Party Integrations</h4>
					<ul className="list-disc ml-6">
						<li>AWS Web Services integration</li>
						<li>Chat system integration and setup</li>
						<li>Zoom Video conferencing API integration</li>
						<li>Cal.com appointment scheduling integration</li>
						<li>Real-time synchronization between systems</li>
					</ul>
				</li>
				<li>
					<h4 className="font-semibold">C. Automation Workflows</h4>
					<ul className="list-disc ml-6">
						<li>Automated appointment booking workflows</li>
						<li>Zoom meeting link generation upon Cal.com booking</li>
						<li>Email/SMS notifications via integrated chat system</li>
						<li>Calendar synchronization</li>
						<li>Customer data management automation</li>
						<li>[Additional automations as specified]</li>
					</ul>
				</li>
				<li>
					<h4 className="font-semibold">D. Documentation &amp; Training</h4>
					<ul className="list-disc ml-6">
						<li>Technical documentation for all integrations</li>
						<li>User manual and admin guide</li>
						<li>2-hour live training session for Client team</li>
						<li>Video tutorials for common tasks</li>
					</ul>
				</li>
			</ul>

			{/* --- PROJECT TIMELINE --- */}
			<SectionTitle>2. PROJECT TIMELINE</SectionTitle>
			<div className="space-y-4 text-sm">
				<p>
					<strong>Phase 1: Setup &amp; Planning (Week 1)</strong>
				</p>
				<ul className="list-disc ml-6">
					<li>Kickoff meeting and requirements finalization</li>
					<li>Technical architecture design</li>
					<li>Wireframes and mockup approval</li>
					<li>Development environment setup</li>
					<li>
						<strong className="font-semibold">Deliverable:</strong> Approved
						project plan and design documents
					</li>
				</ul>

				<p>
					<strong>Phase 2: Core Development (Weeks 2-6)</strong>
				</p>
				<ul className="list-disc ml-6">
					<li>Application frontend and backend development</li>
					<li>Database implementation</li>
					<li>Core features development</li>
					<li>Weekly progress demos</li>
					<li>
						<strong className="font-semibold">Deliverable:</strong> Functional
						application (MVP)
					</li>
				</ul>

				<p>
					<strong>Phase 3: Automation Implementation (Weeks 7-8)</strong>
				</p>
				<ul className="list-disc ml-6">
					<li>Cal.com webhook configuration</li>
					<li>Zoom API integration</li>
					<li>Chat system connection</li>
					<li>AWS services integration</li>
					<li>Automation workflow implementation</li>
					<li>
						<strong className="font-semibold">Deliverable:</strong> Fully
						integrated automation system
					</li>
				</ul>

				<p>
					<strong>Phase 4: Testing &amp; Launch (Weeks 9-10)</strong>
				</p>
				<ul className="list-disc ml-6">
					<li>Quality assurance testing</li>
					<li>User acceptance testing (UAT)</li>
					<li>Bug fixes and refinements</li>
					<li>Production deployment</li>
					<li>Training and handover</li>
					<li>
						<strong className="font-semibold">Deliverable:</strong>{" "}
						Production-ready application with full documentation
					</li>
				</ul>

				<p>
					<strong>Total Estimated Timeline: 10 weeks</strong> from project
					commencement
				</p>
				<p className="italic mt-2">
					Note: Timeline may be adjusted based on Client feedback response times
					and scope changes.
				</p>
			</div>

			{/* --- PAYMENT TERMS --- */}
			<SectionTitle>3. PAYMENT TERMS</SectionTitle>
			<SubSectionTitle number="3.1">Project Fee</SubSectionTitle>
			<div className="text-sm">
				<p className="font-semibold mb-2">
					Total Project Cost: {totalProjectCost}
				</p>
				<p className="font-semibold">Breakdown:</p>
				<ul className="list-disc ml-6">
					<li>Application Development: {appDevelopmentCost}</li>
					<li>Integration Services: {integrationCost}</li>
					<li>Automation Setup: {automationSetupCost}</li>
					<li>Training &amp; Documentation: {trainingDocCost}</li>
				</ul>
			</div>

			<SubSectionTitle number="3.2">Payment Schedule</SubSectionTitle>
			<div className="text-sm">
				<ul className="list-disc ml-6">
					<li>Payment 1 (30%): {payment1Amount} - Due upon contract signing</li>
					<li>
						Payment 2 (30%): {payment2Amount} - Due upon completion of Phase 2
						(MVP delivery)
					</li>
					<li>
						Payment 3 (40%): {payment3Amount} - Due upon final delivery and
						training completion
					</li>
				</ul>
			</div>

			<SubSectionTitle number="3.3">Payment Methods</SubSectionTitle>
			<div className="text-sm">
				<p>
					Accepted payment methods:{" "}
					<strong>Bank transfer, Credit Card, PayPal, Stripe</strong>
				</p>
				<p className="mt-2">
					Invoices are due within **7 days** of issuance. Late payments may
					incur a **1.5% monthly interest charge** and may result in work
					suspension.
				</p>
			</div>

			<SubSectionTitle number="3.4">Additional Work</SubSectionTitle>
			<div className="text-sm">
				<p>
					Any work outside the agreed scope will be billed separately at **
					{hourlyRate}/hour** or by separate fixed-price proposal.
				</p>
			</div>

			{/* --- CLIENT RESPONSIBILITIES --- */}
			<SectionTitle>4. CLIENT RESPONSIBILITIES</SectionTitle>
			<div className="text-sm">
				<p>Client agrees to:</p>
				<ul className="list-disc ml-6">
					<li>
						Provide timely feedback and approvals (within **3-5 business days**)
					</li>
					<li>
						Supply all necessary content, credentials, and access to third-party
						services
					</li>
					<li>Assign a primary point of contact for project communications</li>
					<li>Provide access to existing systems and APIs as needed</li>
					<li>Complete testing within agreed timeframes</li>
					<li>Make payments according to the schedule outlined</li>
				</ul>
				<p className="font-semibold mt-3 italic text-red-700 print:text-black">
					Important: Delays in Client responsibilities may impact project
					timeline.
				</p>
			</div>

			{/* --- INTELLECTUAL PROPERTY --- */}
			<SectionTitle>5. INTELLECTUAL PROPERTY</SectionTitle>
			<SubSectionTitle number="5.1">Ownership</SubSectionTitle>
			<div className="text-sm">
				<p>
					Upon receipt of final payment, **Client will own all custom code and
					designs** created specifically for this project. Provider retains
					rights to:
				</p>
				<ul className="list-disc ml-6">
					<li>Pre-existing code libraries and frameworks</li>
					<li>General development methodologies</li>
					<li>Portfolio rights (with Client approval)</li>
				</ul>
			</div>
			<SubSectionTitle number="5.2">Third-Party Software</SubSectionTitle>
			<p className="text-sm">
				All third-party APIs, libraries, and services remain property of their
				respective owners and are subject to their licensing terms.
			</p>

			{/* --- WARRANTIES & SUPPORT --- */}
			<SectionTitle>6. WARRANTIES &amp; SUPPORT</SectionTitle>
			<SubSectionTitle number="6.1">Warranty Period</SubSectionTitle>
			<p className="text-sm">
				Provider warrants that the delivered software will function
				substantially as specified for **{warrantyPeriodDays} days** after final
				delivery (the &quot;Warranty Period&quot;).
			</p>

			<SubSectionTitle number="6.2">Bug Fixes</SubSectionTitle>
			<p className="text-sm">
				During the Warranty Period, Provider will fix any bugs or defects
				reported by Client at **no additional charge**.
			</p>

			<SubSectionTitle number="6.3">Post-Warranty Support</SubSectionTitle>
			<div className="text-sm">
				<p>After the Warranty Period, support is available via:</p>
				<ul className="list-disc ml-6">
					<li>
						<strong>Hourly Rate:</strong> {postWarrantyHourlyRate}/hour for
						ad-hoc support
					</li>
					<li>
						<strong>Monthly Retainer:</strong> {monthlyRetainerAmount}/month for
						ongoing maintenance (optional)
					</li>
				</ul>
				<p className="font-semibold mt-2">Retainer includes:</p>
				<ul className="list-disc ml-6">
					<li>
						Up to **{retainerHours} hours** of development/support per month
					</li>
					<li>Priority response times</li>
					<li>Proactive monitoring</li>
					<li>Security updates</li>
				</ul>
			</div>

			{/* --- CONFIDENTIALITY --- */}
			<SectionTitle>7. CONFIDENTIALITY</SectionTitle>
			<div className="text-sm">
				<p>
					Both parties agree to keep **confidential** all proprietary
					information shared during this engagement, including but not limited
					to:
				</p>
				<ul className="list-disc ml-6">
					<li>Business processes and strategies</li>
					<li>Technical specifications</li>
					<li>API keys and credentials</li>
					<li>Customer data</li>
					<li>Financial information</li>
				</ul>
				<p className="mt-2">
					This obligation survives contract termination for **3 years**.
				</p>
			</div>

			{/* --- LIMITATION OF LIABILITY --- */}
			<SectionTitle>8. LIMITATION OF LIABILITY</SectionTitle>
			<div className="text-sm">
				<p className="font-semibold">
					Provider&apos;s total liability under this agreement shall not exceed
					the total project fee paid by Client. Provider is not liable for:
				</p>
				<ul className="list-disc ml-6">
					<li>Third-party service outages or failures</li>
					<li>Data loss due to Client&apos;s infrastructure</li>
					<li>Unauthorized access to Client systems</li>
					<li>Indirect, consequential, or punitive damages</li>
				</ul>
			</div>

			{/* --- TERMINATION --- */}
			<SectionTitle>9. TERMINATION</SectionTitle>
			<SubSectionTitle number="9.1">Termination by Client</SubSectionTitle>
			<div className="text-sm">
				<p>
					Client may terminate this agreement with **14 days written notice**.
					Client remains responsible for:
				</p>
				<ul className="list-disc ml-6">
					<li>All work completed to date</li>
					<li>Any outstanding invoices</li>
					<li>Reimbursement of third-party costs incurred</li>
				</ul>
			</div>

			<SubSectionTitle number="9.2">Termination by Provider</SubSectionTitle>
			<div className="text-sm">
				<p>Provider may terminate if:</p>
				<ul className="list-disc ml-6">
					<li>Client fails to make payment within **30 days** of invoice</li>
					<li>Client breaches material terms of this agreement</li>
					<li>
						Client fails to provide necessary materials/access for **30+ days**
					</li>
				</ul>
			</div>

			<SubSectionTitle number="9.3">Effect of Termination</SubSectionTitle>
			<p className="text-sm">
				Upon termination, Provider will deliver all completed work in exchange
				for payment of outstanding amounts.
			</p>

			{/* --- GENERAL PROVISIONS --- */}
			<SectionTitle>10. GENERAL PROVISIONS</SectionTitle>
			<div className="space-y-3 text-sm">
				<p>
					<strong>10.1 Changes to Scope:</strong> Any changes to project scope
					must be documented in writing and may result in timeline and cost
					adjustments.
				</p>
				<p>
					<strong>10.2 Communication:</strong> Primary communication will be via
					email and scheduled video calls. Response time for non-urgent matters:
					**1-2 business days**.
				</p>
				<p>
					<strong>10.3 Governing Law:</strong> This agreement is governed by the
					laws of **{governingLaw}**.
				</p>
				<p>
					<strong>10.4 Dispute Resolution:</strong> Parties agree to attempt
					good-faith negotiation before pursuing legal action. If unresolved,
					disputes will be handled through **binding arbitration**.
				</p>
				<p>
					<strong>10.5 Entire Agreement:</strong> This agreement constitutes the
					entire understanding between parties and supersedes all prior
					discussions or agreements.
				</p>
				<p>
					<strong>10.6 Amendments:</strong> Amendments must be in writing and
					signed by both parties.
				</p>
			</div>

			{/* --- ACCEPTANCE --- */}
			<SectionTitle>11. ACCEPTANCE</SectionTitle>
			<p className="text-sm mb-8">
				By signing below, both parties agree to the terms and conditions
				outlined in this Service Agreement.
			</p>

			<div className="grid md:grid-cols-2 gap-12 text-sm mt-10">
				<div>
					<h4 className="font-bold mb-4">FOR CODECODE.TECH:</h4>
					<p className="border-b border-dashed border-black pb-2 mb-2">
						Signature: &nbsp;
					</p>
					<p className="mb-2">Name: **{providerName}**</p>
					<p className="mb-2">Title: **{providerTitle}**</p>
					<p className="border-b border-dashed border-black pb-2">
						Date: &nbsp;
					</p>
				</div>
				<div>
					<h4 className="font-bold mb-4">FOR CLIENT:</h4>
					<p className="border-b border-dashed border-black pb-2 mb-2">
						Signature: &nbsp;
					</p>
					<p className="mb-2">Name: **{clientName}**</p>
					<p className="mb-2">Title: **{clientTitle}**</p>
					<p className="border-b border-dashed border-black pb-2">
						Date: &nbsp;
					</p>
				</div>
			</div>

			{/* --- APPENDIX & CONTACT --- */}
			<footer className="mt-12 pt-6 border-t border-gray-300 text-xs text-gray-600 print:text-black print:border-black">
				<SubSectionTitle number="APPENDIX A:">
					TECHNICAL SPECIFICATIONS
				</SubSectionTitle>
				<p className="ml-6 mb-3">
					[Attach detailed technical requirements document]
				</p>

				<SubSectionTitle number="APPENDIX B:">
					PROJECT MILESTONES
				</SubSectionTitle>
				<p className="ml-6 mb-3">
					[Attach detailed milestone schedule with acceptance criteria]
				</p>

				<p className="mt-6 text-sm">
					Questions or concerns? Contact us at{" "}
					<a
						href={`mailto:${contactEmail}`}
						className="text-blue-600 print:text-black"
					>
						{contactEmail}
					</a>{" "}
					or {contactPhone}
				</p>
			</footer>
		</div>
	);
};

export default ServiceAgreementPage;
