import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { motion } from 'framer-motion'
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
	Building2,
	ChevronLeft,
	ChevronRight,
	Mail,
	Phone,
} from "lucide-react";

const statusColors = {
	lead: "bg-amber-100 text-amber-800 border-amber-200",
	active: "bg-green-100 text-green-800 border-green-200",
	inactive: "bg-slate-100 text-slate-800 border-slate-200",
};

export interface Contact {
	id: string | number;
	name: string;
	email: string;
	phone?: string;
	company?: string;
	status?: "lead" | "active" | "inactive";
	lifetime_value?: number;
	last_contact_date?: string | Date;
}

export interface ContactsTableProps {
	contacts: Contact[];
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function ContactsTable({
	contacts,
	currentPage,
	totalPages,
	onPageChange,
}: ContactsTableProps) {
	return (
		<Card className="border-0 shadow-sm bg-white overflow-hidden">
			<div className="p-6 border-b border-slate-100">
				<h2 className="text-xl font-semibold text-slate-900">Contacts</h2>
				<p className="text-sm text-slate-600 mt-1">
					Manage your customer database
				</p>
			</div>

			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-slate-50 border-b border-slate-100">
						<tr>
							<th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
								Contact
							</th>
							<th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
								Company
							</th>
							<th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
								Status
							</th>
							<th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
								Lifetime Value
							</th>
							<th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
								Last Contact
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-100">
						{contacts.map((contact, index) => (
							<motion.tr
								key={contact.id}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.05 }}
								className="hover:bg-slate-50 transition-colors"
							>
								<td className="px-6 py-4">
									<div>
										<div className="font-medium text-slate-900">
											{contact.name}
										</div>
										<div className="flex items-center gap-3 mt-1 text-sm text-slate-600">
											<span className="flex items-center gap-1">
												<Mail className="w-3 h-3" />
												{contact.email}
											</span>
											{contact.phone && (
												<span className="flex items-center gap-1">
													<Phone className="w-3 h-3" />
													{contact.phone}
												</span>
											)}
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									{contact.company && (
										<div className="flex items-center gap-2 text-sm text-slate-700">
											<Building2 className="w-4 h-4 text-slate-400" />
											{contact.company}
										</div>
									)}
								</td>
								<td className="px-6 py-4">
									<Badge
										className={`${statusColors[contact.status || "lead"]} border font-medium`}
									>
										{contact.status || "lead"}
									</Badge>
								</td>
								<td className="px-6 py-4 font-semibold text-slate-900">
									${(contact.lifetime_value || 0).toLocaleString()}
								</td>
								<td className="px-6 py-4 text-sm text-slate-600">
									{contact.last_contact_date
										? format(new Date(contact.last_contact_date), "MMM d, yyyy")
										: "—"}
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>

			{totalPages > 1 && (
				<div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
					<p className="text-sm text-slate-600">
						Page {currentPage} of {totalPages}
					</p>
					<div className="flex gap-2">
						<Button
							onClick={() => onPageChange(currentPage - 1)}
							disabled={currentPage === 1}
							variant="outline"
							size="sm"
							className="gap-1"
						>
							<ChevronLeft className="w-4 h-4" />
							Previous
						</Button>
						<Button
							onClick={() => onPageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							variant="outline"
							size="sm"
							className="gap-1"
						>
							Next
							<ChevronRight className="w-4 h-4" />
						</Button>
					</div>
				</div>
			)}
		</Card>
	);
}
