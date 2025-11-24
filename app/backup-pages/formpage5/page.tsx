'use client'

import { useForm } from '@/components/FormContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components//ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function FormPage5() {
  const { formData, updateFormData, setCurrentPage, errors, setErrors } =
    useForm()

  const validatePage = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Postcode is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (validatePage()) {
      // Here you would normally submit to your server action
      console.log('Submitting form data:', formData)
      alert('Task posted successfully! (This is a demo)')
    }
  }

  const handleBack = () => {
    if (formData.taskType === 'removals') {
      setCurrentPage(4) // Go back to removals details
    } else if (formData.taskType === 'cleaning') {
      setCurrentPage(6) // Go back to cleaning details
    } else {
      setCurrentPage(3) // Go back to general details for other tasks
    }
  }

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {/* Page Title */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start pb-2 pt-5 px-4 relative w-full">
              <h2 className="text-[#0d141c] text-[24px] leading-[30px] font-bold">
                Suggest your budget
              </h2>
              <p className="text-[#717182] text-[16px] leading-[20px] mt-1">
                You can always negotiate the final price.
              </p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="relative shrink-0 w-full px-4 py-3 space-y-6">
          {/* Budget Confirmation */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              What is your budget?
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#717182]">
                $
              </span>
              <Input
                type="number"
                placeholder={formData.budgetType === 'hourly' ? '25' : '100'}
                value={formData.budget}
                onChange={e => updateFormData({ budget: e.target.value })}
                className="w-full h-11 pl-8 pr-3 rounded-lg border border-[#cfdbe8] bg-[#f7fafc]"
              />
              {formData.budgetType === 'hourly' && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#717182]">
                  /hr
                </span>
              )}
            </div>
            <p className="text-[#717182] text-sm mt-1">
              Remember, you can negotiate the final price with your Tasker.
            </p>
          </div>

          {/* Location */}
          <div>
            <Label
              htmlFor="postcode"
              className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block"
            >
              Where do you need this done?
            </Label>
            <Input
              id="postcode"
              type="text"
              placeholder="Enter your postcode"
              value={formData.postcode}
              onChange={e => updateFormData({ postcode: e.target.value })}
              className="w-full h-11 px-3 rounded-lg border border-[#cfdbe8] bg-[#f7fafc]"
            />
            {errors.postcode && (
              <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>
            )}
          </div>

          {/* Work Type */}
          <div>
            <Label className="text-[#0d141c] text-[18px] leading-[23px] font-bold mb-4 block">
              How should the Tasker work?
            </Label>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => updateFormData({ workType: 'in-person' })}
                className={`w-full p-4 rounded-lg border border-[#cfdbe8] text-left ${
                  formData.workType === 'in-person'
                    ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                    : 'bg-transparent text-[#0d141c]'
                }`}
              >
                <div className="font-medium">In-person</div>
                <div
                  className={`text-sm ${formData.workType === 'in-person' ? 'text-blue-100' : 'text-[#717182]'}`}
                >
                  Select this if you need the Tasker physically there
                </div>
              </button>

              <button
                type="button"
                onClick={() => updateFormData({ workType: 'online' })}
                className={`w-full p-4 rounded-lg border border-[#cfdbe8] text-left ${
                  formData.workType === 'online'
                    ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                    : 'bg-transparent text-[#0d141c]'
                }`}
              >
                <div className="font-medium">Online</div>
                <div
                  className={`text-sm ${formData.workType === 'online' ? 'text-blue-100' : 'text-[#717182]'}`}
                >
                  Select this if the Tasker can do it from home
                </div>
              </button>
            </div>
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
              onClick={handleSubmit}
              className="basis-0 grow h-10 rounded-lg bg-[#0d80f2] text-white hover:bg-[#0b6bc7]"
            >
              Get quotes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}