'use client'

import { useForm } from '@/components/FormContext'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function FormPage1() {
  const { formData, updateFormData, setCurrentPage, errors, setErrors } =
    useForm()

  const validatePage = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.taskDescription.trim()) {
      newErrors.taskDescription = 'Please describe what you need done'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validatePage()) {
      setCurrentPage(2)
    }
  }

  const dateOptions = [
    { value: 'on-date', label: 'On date' },
    { value: 'before-date', label: 'Before date' },
    { value: 'flexible', label: "I'm flexible" },
    {
      value: 'certain-time',
      label: 'I need a certain time of day',
    },
  ]

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {/* Page Title */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start pb-2 pt-5 px-4 relative w-full">
              <h2 className="text-[#0d141c] text-[24px] leading-[30px] font-bold">
                Let's start with the basics
              </h2>
            </div>
          </div>
        </div>

        {/* Task Description */}
        <div className="max-w-[480px] relative shrink-0 w-full">
          <div className="flex flex-row items-end max-w-inherit relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-end flex gap-4 items-end justify-start max-w-inherit px-4 py-3 relative w-full">
              <div className="basis-0 grow min-h-px min-w-40 relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start min-w-inherit p-0 relative w-full">
                  <Textarea
                    placeholder="In a few words, what do you need done?"
                    value={formData.taskDescription}
                    onChange={e =>
                      updateFormData({
                        taskDescription: e.target.value,
                      })
                    }
                    className="basis-0 bg-[#f7fafc] grow min-h-36 min-w-px relative rounded-lg shrink-0 w-full border border-[#cfdbe8] resize-none"
                  />
                  {errors.taskDescription && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.taskDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When do you need this done */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start pb-2 pt-4 px-4 relative w-full">
              <h3 className="text-[#0d141c] text-[18px] leading-[23px] font-bold">
                When do you need this done?
              </h3>
            </div>
          </div>
        </div>

        {/* Date Options */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-start flex flex-wrap gap-3 items-start justify-start p-4 relative w-full">
              {dateOptions.map(option => (
                <button type="button"
                  key={option.value}
                  onClick={() =>
                    updateFormData({
                      dateType: option.value as any,
                    })
                  }
                  className={`h-11 relative rounded-lg shrink-0 border border-[#cfdbe8] px-[17px] py-px ${
                    formData.dateType === option.value
                      ? 'bg-[#0d80f2] border-[#0d80f2]'
                      : 'bg-transparent'
                  }`}
                >
                  <p
                    className={`text-[14px] leading-[21px] font-medium ${
                      formData.dateType === option.value
                        ? 'text-white'
                        : 'text-[#0d141c]'
                    }`}
                  >
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-start justify-start px-4 py-3 relative w-full">
              <Button
                onClick={handleNext}
                className="basis-0 bg-[#0d80f2] grow h-10 max-w-[480px] min-h-px min-w-[84px] relative rounded-lg shrink-0 text-white hover:bg-[#0b6bc7]"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}