"use client";

import React, {
	createContext,
	useContext,
	useState,
	type ReactNode,
} from "react";

export interface FormData {
	taskDescription: string;
	taskDate: string;
	dateType: "on-date" | "before-date" | "flexible" | "certain-time";
	taskType: "removals" | "cleaning" | "other";
	// Removals fields
	pickupPostcode: string;
	dropoffPostcode: string;
	movingItems: "few-items" | "apartment" | "house";
	stairs: "no" | "pickup" | "delivery" | "both";
	keyItems: string;
	// Cleaning fields
	cleanType: "regular" | "end-of-lease";
	bedrooms: "none" | "1" | "2" | "3" | "4+";
	bathrooms: "none" | "1" | "2" | "3" | "4+";
	bringSupplies: boolean;
	cleaningDetails: string;
	// Common fields
	taskTitle: string;
	budget: string;
	budgetType: "hourly" | "fixed";
	postcode: string;
	workType: "in-person" | "online";
}

interface FormContextType {
	formData: FormData;
	updateFormData: (data: Partial<FormData>) => void;
	currentPage: number;
	setCurrentPage: (page: number) => void;
	errors: Record<string, string>;
	setErrors: (errors: Record<string, string>) => void;
}

const defaultFormData: FormData = {
	taskDescription: "",
	taskDate: "",
	dateType: "flexible",
	taskType: "other",
	// Removals fields
	pickupPostcode: "",
	dropoffPostcode: "",
	movingItems: "few-items",
	stairs: "no",
	keyItems: "",
	// Cleaning fields
	cleanType: "regular",
	bedrooms: "none",
	bathrooms: "none",
	bringSupplies: true,
	cleaningDetails: "",
	// Common fields
	taskTitle: "",
	budget: "",
	budgetType: "fixed",
	postcode: "",
	workType: "in-person",
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
	const [formData, setFormData] = useState<FormData>(defaultFormData);
	const [currentPage, setCurrentPage] = useState(1);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const updateFormData = (data: Partial<FormData>) => {
		setFormData((prev) => ({ ...prev, ...data }));
	};

	return (
		<FormContext.Provider
			value={{
				formData,
				updateFormData,
				currentPage,
				setCurrentPage,
				errors,
				setErrors,
			}}
		>
			{children}
		</FormContext.Provider>
	);
}

export function useForm() {
	const context = useContext(FormContext);
	if (context === undefined) {
		throw new Error("useForm must be used within a FormProvider");
	}
	return context;
}
