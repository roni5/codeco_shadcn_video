'use client'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css' // or v9's style import

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import type { DropdownProps } from 'react-day-picker'

function CustomSelectDropdown(props: DropdownProps) {
  const { options, value, onChange } = props
  const handleValueChange = (newVal: string) => {
    if (onChange) {
      const synthetic = {
        target: { value: newVal },
      } as React.ChangeEvent<HTMLSelectElement>
      onChange(synthetic)
    }
  }
  return (
    <Select value={value?.toString()} onValueChange={handleValueChange}>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="—" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map(opt => (
            <SelectItem
              key={opt.value}
              value={opt.value.toString()}
              disabled={opt.disabled}
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default function CalendarWithDropdownNav() {
  const [selected, setSelected] = useState<Date | undefined>(undefined)

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      captionLayout="dropdown"
      components={{ Dropdown: CustomSelectDropdown }}
      classNames={{
        selected: 'bg-indigo-600 text-white',
        day: 'hover:bg-indigo-100',
        nav: 'flex justify-between items-center mb-2',
        button_next: 'text-indigo-600 hover:bg-indigo-200 p-1 rounded',
        button_previous: 'text-indigo-600 hover:bg-indigo-200 p-1 rounded',
      }}
    />
  )
}

