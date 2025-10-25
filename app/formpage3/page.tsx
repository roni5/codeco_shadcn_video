'use client'

import { useForm } from '@/components/FormContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components//ui/input'
import { Label } from '@/components//ui/label'

export function FormPage3() {
  const { formData, updateFormData, setCurrentPage, errors, setErrors } =
    useForm()

  const validatePage = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.taskTitle.trim()) {
      newErrors.taskTitle = 'Task title is required'
    }

    if (!formData.budget.trim()) {
      newErrors.budget = 'Budget is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validatePage()) {
      // Route based on task type
      if (formData.taskType === 'removals') {
        setCurrentPage(4) // Removals details page
      } else if (formData.taskType === 'cleaning') {
        setCurrentPage(6) // Cleaning details page (we'll update this number)
      } else {
        setCurrentPage(5) // Skip to final page for other tasks
      }
    }
  }

  const handleBack = () => {
    setCurrentPage(2)
  }

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {/* Page Title */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-start pb-2 pt-5 px-4 relative w-full">
              <h2 className="text-[#0d141c] text-[24px] leading-[30px] font-bold">
                Details &amp; Budget
              </h2>
              <p className="text-[#717182] text-[16px] leading-[20px] mt-1">
                Provide more details about your task and budget.
              </p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="relative shrink-0 w-full px-4 py-3 space-y-6">
          {/* Task Title */}
          <div>
            <Label
              htmlFor="task-title"
              className="text-[#0d141c] text-[16px] leading-[20px] font-medium mb-2 block"
            >
              Task Title
            </Label>
            <Input
              id="task-title"
              type="text"
              placeholder="Enter a title for your task"
              value={formData.taskTitle}
              onChange={e => updateFormData({ taskTitle: e.target.value })}
              className="w-full h-11 px-3 rounded-lg border border-[#cfdbe8] bg-[#f7fafc]"
            />
            {errors.taskTitle && (
              <p className="text-red-500 text-sm mt-1">{errors.taskTitle}</p>
            )}
          </div>

          {/* Task Date */}
          <div>
            <Label
              htmlFor="task-date"
              className="text-[#0d141c] text-[16px] leading-[20px] font-medium mb-2 block"
            >
              Task Date
            </Label>
            <Input
              id="task-date"
              type="date"
              value={formData.taskDate}
              onChange={e => updateFormData({ taskDate: e.target.value })}
              className="w-full h-11 px-3 rounded-lg border border-[#cfdbe8] bg-[#f7fafc]"
            />
          </div>

          {/* Budget */}
          <div>
            <Label className="text-[#0d141c] text-[16px] leading-[20px] font-medium mb-2 block">
              Budget
            </Label>

            {/* Budget Type Selection */}
            <div className="flex gap-3 mb-3">
              <button
                type="button"
                onClick={() => updateFormData({ budgetType: 'fixed' })}
                className={`h-9 px-4 py-1 rounded-lg border border-[#cfdbe8] text-sm ${
                  formData.budgetType === 'fixed'
                    ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                    : 'bg-transparent text-[#0d141c]'
                }`}
              >
                Fixed Price
              </button>
              <button
                type="button"
                onClick={() => updateFormData({ budgetType: 'hourly' })}
                className={`h-9 px-4 py-1 rounded-lg border border-[#cfdbe8] text-sm ${
                  formData.budgetType === 'hourly'
                    ? 'bg-[#0d80f2] border-[#0d80f2] text-white'
                    : 'bg-transparent text-[#0d141c]'
                }`}
              >
                Hourly
              </button>
            </div>

            {/* Budget Input */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#717182]">
                £
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
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
            )}
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