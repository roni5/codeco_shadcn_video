'use client'
import { useState } from 'react'
import type { ChangeEventHandler } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Calendar, Clock, Info } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function TestCal() {
  const [selected, setSelected] = useState<Date | undefined>()
  const [timeValue, setTimeValue] = useState<string>('09:00')
  const [showTimeHint, setShowTimeHint] = useState(false)
  const [showDateHint, setShowDateHint] = useState(false)

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = e => {
    const time = e.target.value
    if (!selected) {
      setTimeValue(time)
      return
    }
    const [hours, minutes] = time.split(':').map(str => parseInt(str, 10))
    const newSelectedDate = new Date(selected)
    newSelectedDate.setHours(hours, minutes, 0, 0)
    setSelected(newSelectedDate)
    setTimeValue(time)
  }

  const handleDaySelect = (date: Date | undefined) => {
    if (!timeValue || !date) {
      setSelected(date)
      return
    }
    const [hours, minutes] = timeValue.split(':').map(str => parseInt(str, 10))
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes
    )
    setSelected(newDate)
  }

  const formatDisplayDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <TooltipProvider>
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal relative group hover:border-[var(--crimson-5)] hover:shadow-sm transition-all duration-200 hover:bg-[var(--indigo-1)]"
              >
                <div className="flex items-center gap-3 w-full">
                  <Calendar className="w-5 h-5 text-[var(--indigo-6)] group-hover:text-[var(--indigo-7)] transition-colors flex-shrink-0" />
                  <span
                    className={`flex-1 ${!selected ? 'text-[var(--gray-9)]' : 'text-[var(--gray-12)]'}`}
                  >
                    {selected
                      ? formatDisplayDate(selected)
                      : 'Pick a date & time'}
                  </span>
                  {!selected && (
                    <Info className="w-4 h-4 text-[var(--gray-8)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="bg-[var(--gray-12)] text-[var(--gray-1)] border-[var(--gray-6)]"
          >
            <p>Click to select date and time</p>
          </TooltipContent>
        </Tooltip>

        <PopoverContent
          className="w-auto p-0 z-50 bg-white border-[var(--gray-6)] shadow-xl rounded-xl overflow-hidden"
          align="start"
        >
          {/* Time Selection Section */}
          <div className="p-4 border-b border-gray-400 bg-[var(--gray-2)]">
            <div className="space-y-3">
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-900 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-gray-900" />
                  Select Time
                </span>
                <div className="relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <input
                        type="time"
                        value={timeValue}
                        onChange={handleTimeChange}
                        className="w-full border border-[var(--gray-6)] rounded-lg px-4 py-3 text-lg font-mono bg-[var(--gray-1)] hover:border-[var(--indigo-6)] focus:border-[var(--indigo-8)] focus:ring-2 focus:ring-[var(--indigo-3)] transition-all duration-200 cursor-pointer text-[var(--gray-12)]"
                        onMouseEnter={() => setShowTimeHint(true)}
                        onMouseLeave={() => setShowTimeHint(false)}
                      />
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-[var(--indigo-9)] text-[var(--gray-1)]"
                    >
                      <p className="bg-[var(--indigo-6)] text-gray-900  border-2 border-gray-300 rounded-sm px-3 text-sm text-balance">
                        Click below, inside input
                      </p>
                    </TooltipContent>
                  </Tooltip>

                  {showTimeHint && (
                    <div className="absolute -top-2 left-0 right-0 flex justify-center animate-in fade-in duration-200">
                      <div className=" bg-[var(--crimson-5)] text-gray-900 border-2 border-gray-300 rounded-sm px-3 text-sm text-balance">
                        Click the Blue clock icon →
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Visual Separator */}
              <div className="flex items-center gap-2 text-xs text-[var(--gray-10)]">
                <div className="h-px bg-[var(--gray-6)] flex-1" />
                <span className="px-2 bg-[var(--gray-2)]">then</span>
                <div className="h-px bg-[var(--gray-6)] flex-1" />
              </div>

              {/* Date Selection Hint */}
              <div className="text-sm text-gray-900 flex items-center gap-2 bg-[var(--blue-2)] p-3 rounded-lg border border-[var(--blue-4)]">
                <Info className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>Select a date below by clicking on any day</span>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="p-4">
            <div
              onMouseEnter={() => setShowDateHint(true)}
              onMouseLeave={() => setShowDateHint(false)}
            >
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={handleDaySelect}
                className="bg-white"
                classNames={{
                  day_selected:
                    'bg-white text-[var(--gray-1)] font-semibold rounded-lg hover:bg-[var(--indigo-10)]',
                  day: 'hover:bg-[var(--indigo-3)] rounded-lg transition-colors duration-150 cursor-pointer text-[var(--gray-12)]',
                  day_today:
                    'bg-[var(--indigo-4)] text-[var(--indigo-11)] font-semibold border border-[var(--indigo-6)]',
                  head_cell: 'text-[var(--gray-10)] font-medium text-sm',
                  caption: 'text-[var(--gray-12)] font-semibold text-lg mb-4',
                  nav_button:
                    'hover:bg-[var(--gray-4)] rounded-full p-1 transition-colors text-[var(--gray-11)]',
                  table: 'w-full',
                  cell: 'text-center p-1',
                }}
              />
            </div>

            {showDateHint && !selected && (
              <div className="mt-2 text-center animate-in fade-in duration-200">
                <div className="inline-block bg-[var(--amber-3)] text-[var(--amber-11)] text-xs px-3 py-1 rounded-full border border-[var(--amber-6)]">
                  👆 Click any date to select
                </div>
              </div>
            )}
          </div>

          {/* Selected DateTime Display */}
          {selected && (
            <div className="p-4 bg-[var(--green-2)] border-t border-[var(--green-4)] animate-in slide-in-from-bottom duration-300">
              <div className="flex items-center gap-2 text-[var(--green-11)]">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-sm">
                  Selected: {formatDisplayDate(selected)}
                </span>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  )
}
// 'use client'

// import { useState } from 'react'
// import type { ChangeEventHandler } from 'react'
// import { DayPicker } from 'react-day-picker'
// import 'react-day-picker/dist/style.css'
// import { setHours, setMinutes } from 'date-fns'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
// import { Button } from '@/components/ui/button'

// export default function TestCal() {
//   const [selected, setSelected] = useState<Date | undefined>()
//   const [timeValue, setTimeValue] = useState<string>('00:00')

//   const handleTimeChange: ChangeEventHandler<HTMLInputElement> = e => {
//     const time = e.target.value
//     if (!selected) {
//       setTimeValue(time)
//       return
//     }
//     const [hours, minutes] = time.split(':').map(str => parseInt(str, 10))
//     const newSelectedDate = setHours(setMinutes(selected, minutes), hours)
//     setSelected(newSelectedDate)
//     setTimeValue(time)
//   }

//   const handleDaySelect = (date: Date | undefined) => {
//     if (!timeValue || !date) {
//       setSelected(date)
//       return
//     }
//     const [hours, minutes] = timeValue.split(':').map(str => parseInt(str, 10))
//     const newDate = new Date(
//       date.getFullYear(),
//       date.getMonth(),
//       date.getDate(),
//       hours,
//       minutes
//     )
//     setSelected(newDate)
//   }

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="outline" className="w-full justify-start text-left">
//           {selected ? selected.toLocaleString() : 'Pick a date & time'}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-4 z-50 space-y-4" align="start">
//         <input
//           type="time"
//           value={timeValue}
//           onChange={handleTimeChange}
//           className="w-full border border-gray-300 rounded px-3 py-2"
//         />
//         <DayPicker
//           mode="single"
//           selected={selected}
//           onSelect={handleDaySelect}
//           className="bg-white py-3"
//         />
//       </PopoverContent>
//     </Popover>
//   )
// }
// 'use client'
// import { useState } from 'react'
// import { DayPicker } from 'react-day-picker'
// import 'react-day-picker/dist/style.css'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
// import { Button } from '@/components/ui/button'

// export default function TestCal() {
//   const [selected, setSelected] = useState<Date | undefined>()

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="outline" className="w-full justify-start text-left">
//           {selected ? selected.toDateString() : 'Pick a date'}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0 z-50" align="start">
//         <DayPicker
//           mode="single"
//           selected={selected}
//           onSelect={setSelected}
//           className="bg-white"
//         />
//       </PopoverContent>
//     </Popover>
//   )
// }