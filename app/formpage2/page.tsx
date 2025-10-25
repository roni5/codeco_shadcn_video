'use client'

import { useForm } from '@/components/FormContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components//ui/input'
import { Label } from '@/components//ui/label'

export function FormPage2() {
  const { formData, updateFormData, setCurrentPage, errors, setErrors } =
    useForm()

  const validatePage = () => {
    const newErrors: Record<string, string> = {}

    if (formData.taskType === 'removals' && !formData.pickupPostcode.trim()) {
      newErrors.pickupPostcode = 'This field is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validatePage()) {
      setCurrentPage(3)
    }
  }

  const handleBack = () => {
    setCurrentPage(1)
  }

  const taskTypes = [
    { value: 'removals', label: 'Removals' },
    { value: 'cleaning', label: 'Cleaning' },
    { value: 'handyman ', label: 'Handyman ' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {/* Page Title */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start pb-2 pt-5 px-4 relative w-full">
              <h2 className="text-[#0d141c] text-[24px] leading-[30px] font-bold">
                Task Type
              </h2>
              <p className="text-[#717182] text-[16px] leading-[20px] mt-1">
                What type of task do you need help with?
              </p>
            </div>
          </div>
        </div>

        {/* Task Type Selection */}
        <div className="relative shrink-0 w-full px-4 py-3">
          <div className="flex flex-wrap gap-3 mb-4">
            {taskTypes.map(type => (
              <button type="button"
                key={type.value}
                onClick={() => updateFormData({ taskType: type.value as any })}
                className={`h-11 px-6 py-2 rounded-lg border border-[#cfdbe8] ${
                  formData.taskType === type.value
                    ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                    : 'bg-transparent text-[#0d141c]'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conditional Removals Fields */}
        {formData.taskType === 'removals' && (
          <div className="relative shrink-0 w-full px-4 py-3 space-y-4">
            <div>
              <Label
                htmlFor="pickup-postcode"
                className="text-[#0d141c] text-[16px] leading-[20px] font-medium mb-2 block"
              >
                Pickup postcode
              </Label>
              <Input
                id="pickup-postcode"
                type="text"
                placeholder="Enter pickup postcode"
                value={formData.pickupPostcode}
                onChange={e =>
                  updateFormData({ pickupPostcode: e.target.value })
                }
                className="w-full h-11 px-3 rounded-lg border border-[#cfdbe8] bg-[#f7fafc]"
              />
              {errors.pickupPostcode && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupPostcode}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="dropoff-postcode"
                className="text-[#0d141c] text-[16px] leading-[20px] font-medium mb-2 block"
              >
                Drop-off postcode (optional)
              </Label>
              <Input
                id="dropoff-postcode"
                type="text"
                placeholder="Enter drop-off postcode"
                value={formData.dropoffPostcode}
                onChange={e =>
                  updateFormData({ dropoffPostcode: e.target.value })
                }
                className="w-full h-11 px-3 rounded-lg border border-[#cfdbe8] bg-[#f7fafc]"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="relative shrink-0 w-full px-4 py-3 mt-auto">
          <div className="flex gap-3">
            <Button
              onClick={handleBack}
              variant="outline"
              className="basis-0 grow h-10 rounded-lg border border-[#cfdbe8] bg-transparent text-[#0d141c] hover:bg-[#f7fafc]"
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="basis-0 grow h-10 rounded-lg bg-[#0d80f2] text-white hover:bg-[#0b6bc7]"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}