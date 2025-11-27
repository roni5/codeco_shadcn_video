import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export interface DateFilterProps {
	value: string;
	onChange: (value: string) => void;
}

export default function DateFilter({ value, onChange }: DateFilterProps) {
	const ranges = [
		{ label: "Last 7 Days", value: "7d" },
		{ label: "Last 30 Days", value: "30d" },
		{ label: "Last 3 Months", value: "3m" },
		{ label: "Last Year", value: "1y" },
		{ label: "All Time", value: "all" },
	];

	return (
		<div className="flex items-center gap-2 flex-wrap">
			<Calendar className="w-4 h-4 text-slate-500" />
			{ranges.map((range) => (
				<Button
					key={range.value}
					onClick={() => onChange(range.value)}
					variant={value === range.value ? "default" : "outline"}
					size="sm"
					className={
						value === range.value
							? "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white"
							: "text-slate-600 hover:bg-slate-50"
					}
				>
					{range.label}
				</Button>
			))}
		</div>
	);
}
