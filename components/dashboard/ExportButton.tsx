import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export interface ExportButtonProps {
	data: Record<string, unknown>[];
	filename: string;
	label?: string;
}

export default function ExportButton({
	data,
	filename,
	label = "Export CSV",
}: ExportButtonProps) {
	const handleExport = () => {
		if (!data || data.length === 0) return;

		const headers = Object.keys(data[0]);
		const csvContent = [
			headers.join(","),
			...data.map((row) =>
				headers
					.map((header) => {
						const value = row[header];
						if (value === null || value === undefined) return "";
						return typeof value === "string" && value.includes(",")
							? `"${value}"`
							: value;
					})
					.join(","),
			),
		].join("\n");

		const blob = new Blob([csvContent], { type: "text/csv" });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${filename}_${new Date().toISOString().split("T")[0]}.csv`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	};

	return (
		<Button
			onClick={handleExport}
			variant="outline"
			className="gap-2 text-slate-700 border-slate-300 hover:bg-slate-50"
		>
			<Download className="w-4 h-4" />
			{label}
		</Button>
	);
}
