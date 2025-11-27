interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	variant?:
		| "default"
		| "secondary"
		| "destructive"
		| "outline"
		| "success"
		| "warning";
	children: React.ReactNode;
}

export function Badge({
	className = "",
	variant = "default",
	children,
	...props
}: BadgeProps) {
	const variantStyles = {
		default: "bg-blue-600 text-white hover:bg-blue-700",
		secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
		destructive: "bg-red-600 text-white hover:bg-red-700",
		outline:
			"border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100",
		success: "bg-green-600 text-white hover:bg-green-700",
		warning: "bg-yellow-500 text-white hover:bg-yellow-600",
	};

	return (
		<span
			className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantStyles[variant]} ${className}`}
			{...props}
		>
			{children}
		</span>
	);
}

// ContactsTable Types
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

// interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
//   variant?:
//     | 'default'
//     | 'secondary'
//     | 'destructive'
//     | 'outline'
//     | 'success'
//     | 'warning'
//   children: React.ReactNode
// }

// export function Badge({
//   className = '',
//   variant = 'default',
//   children,
//   ...props
// }: BadgeProps) {
//   const variantStyles = {
//     default: 'bg-blue-600 text-white hover:bg-blue-700',
//     secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
//     destructive: 'bg-red-600 text-white hover:bg-red-700',
//     outline:
//       'border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100',
//     success: 'bg-green-600 text-white hover:bg-green-700',
//     warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
//   }

//   return (
//     <span
//       className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantStyles[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </span>
//   )
// }
