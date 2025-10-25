'use client'

import { ArrowLeft } from 'lucide-react'
import { useForm } from './FormContext'

export function FormHeader() {
  const { currentPage, setCurrentPage } = useForm()

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="bg-[#f7fafc] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-between pb-2 pt-4 px-4 relative w-full">
          <div className="relative shrink-0 size-12">
            <button
              onClick={handleBack}
              className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-start p-0 relative size-12"
              disabled={currentPage === 1}
            >
              <div className="relative shrink-0 size-6">
                <ArrowLeft className="size-6 text-[#0d141c]" />
              </div>
            </button>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col items-center relative size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-start pl-0 pr-12 py-0 relative w-full">
                <h1 className="text-[#0d141c] text-[18px] text-center font-bold leading-[23px]">
                  Post a Task
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}