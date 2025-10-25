'use client'

import { useForm } from '@/components/FormContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components//ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/fig/textarea'

export function FormPage4() {
  const { formData, updateFormData, setCurrentPage } = useForm()

  const handleNext = () => {
    setCurrentPage(5)
  }

  const handleBack = () => {
    setCurrentPage(3)
  }

  const movingOptions = [
    { value: 'few-items', label: 'A few items' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
  ]

  const stairsOptions = [
    { value: 'no', label: 'No' },
    { value: 'pickup', label: 'At pickup' },
    { value: 'delivery', label: 'At delivery' },
    { value: 'both', label: 'Both places' },
  ]

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {/* Page Title */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start pb-2 pt-5 px-4 relative w-full">
              <h2 className="text-[#0d141c] text-[24px] leading-[30px] font-bold">
                Provide more details
              </h2>
              <p className="text-[#717182] text-[16px] leading-[20px] mt-1">
                What are you moving?
              </p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="relative shrink-0 w-full px-4 py-3 space-y-6">
          {/* What are you moving */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              What are you moving?
            </Label>
            <div className="flex flex-wrap gap-3">
              {movingOptions.map(option => (
                <button
                  type="button"
                  key={option.value}
                  onClick={() =>
                    updateFormData({ movingItems: option.value as any })
                  }
                  className={`h-11 px-4 py-2 rounded-lg border border-[#cfdbe8] ${
                    formData.movingItems === option.value
                      ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                      : 'bg-transparent text-[#0d141c]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Stairs */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              Are there stairs?
            </Label>
            <div className="flex flex-wrap gap-3">
              {stairsOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() =>
                    updateFormData({ stairs: option.value as any })
                  }
                  className={`h-11 px-4 py-2 rounded-lg border border-[#cfdbe8] ${
                    formData.stairs === option.value
                      ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                      : 'bg-transparent text-[#0d141c]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Key Items */}
          <div>
            <Label
              htmlFor="key-items"
              className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block"
            >
              What key items are you moving?
            </Label>
            <Textarea
              id="key-items"
              placeholder="e.g. Sofa, dining table, washing machine, boxes..."
              value={formData.keyItems}
              onChange={e => updateFormData({ keyItems: e.target.value })}
              className="w-full min-h-24 px-3 py-2 rounded-lg border border-[#cfdbe8] bg-[#f7fafc] resize-none"
            />
          </div>
        </div>

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