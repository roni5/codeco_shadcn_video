"use client";
import React, { type ChangeEventHandler, useState } from "react";
import "react-day-picker/dist/style.css";

import { setHours, setMinutes } from "date-fns";
import { DayPicker } from "react-day-picker";

// npm install react-day-picker
//  const { options, value, onChange } = props;
export function InputTime() {
	const [selected, setSelected] = useState<Date>();
	const [timeValue, setTimeValue] = useState<string>("00:00");

	const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const time = e.target.value;
		if (!selected) {
			setTimeValue(time);
			return;
		}
		const [hours, minutes] = time
			.split(":")
			.map((str) => Number.parseInt(str, 10));
		const newSelectedDate = setHours(setMinutes(selected, minutes), hours);
		setSelected(newSelectedDate);
		setTimeValue(time);
	};

	const handleDaySelect = (date: Date | undefined) => {
		if (!timeValue || !date) {
			setSelected(date);
			return;
		}
		const [hours, minutes] = timeValue
			.split(":")
			.map((str) => Number.parseInt(str, 10));
		const newDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			hours,
			minutes,
		);
		setSelected(newDate);
	};

	return (
		<div>
			<form style={{ marginBlockEnd: "1em" }}>
				<label>
					Set the time:{" "}
					<input type="time" value={timeValue} onChange={handleTimeChange} />
				</label>
			</form>
			<DayPicker
				// captionLayout="dropdown"
				// components={{ Dropdown: CustomSelectDropdown }}
				mode="single"
				selected={selected}
				onSelect={handleDaySelect}
				footer={`Selected date: ${
					selected ? selected.toLocaleString() : "none"
				}`}
			/>
		</div>
	);
}
