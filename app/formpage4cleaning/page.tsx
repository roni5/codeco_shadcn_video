'use client'

import { useForm } from '@/components/FormContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components//ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/fig/textarea'

export function FormPage4Cleaning() {
  const { formData, updateFormData, setCurrentPage } = useForm()

  const handleNext = () => {
    setCurrentPage(5)
  }

  const handleBack = () => {
    setCurrentPage(3)
  }

  const cleanTypes = [
    { value: 'regular', label: 'Regular' },
    { value: 'end-of-lease', label: 'End of Lease' },
  ]

  const bedroomOptions = [
    { value: 'none', label: 'None' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4+', label: '4+' },
  ]

  const bathroomOptions = [
    { value: 'none', label: 'None' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4+', label: '4+' },
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
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="relative shrink-0 w-full px-4 py-3 space-y-6">
          {/* Clean Type */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              What type of clean do you need?
            </Label>
            <div className="flex flex-wrap gap-3">
              {cleanTypes.map(type => (
                <button
                  key={type.value}
                  onClick={() =>
                    updateFormData({ cleanType: type.value as any })
                  }
                  className={`h-11 px-4 py-2 rounded-lg border border-[#cfdbe8] ${
                    formData.cleanType === type.value
                      ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                      : 'bg-transparent text-[#0d141c]'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              How many bedrooms?
            </Label>
            <div className="flex flex-wrap gap-3">
              {bedroomOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() =>
                    updateFormData({ bedrooms: option.value as any })
                  }
                  className={`h-11 px-4 py-2 rounded-lg border border-[#cfdbe8] ${
                    formData.bedrooms === option.value
                      ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                      : 'bg-transparent text-[#0d141c]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              How many bathrooms?
            </Label>
            <div className="flex flex-wrap gap-3">
              {bathroomOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() =>
                    updateFormData({ bathrooms: option.value as any })
                  }
                  className={`h-11 px-4 py-2 rounded-lg border border-[#cfdbe8] ${
                    formData.bathrooms === option.value
                      ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                      : 'bg-transparent text-[#0d141c]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment and Supplies */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              Should the cleaner bring equipment and supplies?
            </Label>
            <div className="space-y-3">
              <button
                onClick={() => updateFormData({ bringSupplies: true })}
                className={`w-full p-4 rounded-lg border border-[#cfdbe8] text-left ${
                  formData.bringSupplies
                    ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                    : 'bg-transparent text-[#0d141c]'
                }`}
              >
                <div className="font-medium">Yes, bring supplies</div>
              </button>

              <button
                onClick={() => updateFormData({ bringSupplies: false })}
                className={`w-full p-4 rounded-lg border border-[#cfdbe8] text-left ${
                  !formData.bringSupplies
                    ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                    : 'bg-transparent text-[#0d141c]'
                }`}
              >
                <div className="font-medium">No, I will provide</div>
              </button>
            </div>
          </div>

          {/* Cleaning Details */}
          <div>
            <Label
              htmlFor="cleaning-details"
              className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block"
            >
              What needs cleaning?
            </Label>
            <Textarea
              id="cleaning-details"
              placeholder="E.g. carpets vacuumed, oven cleaned"
              value={formData.cleaningDetails}
              onChange={e =>
                updateFormData({ cleaningDetails: e.target.value })
              }
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