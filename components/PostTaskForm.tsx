'use client'

import { useForm } from '@/components/FormContext'
import { FormHeader } from '@/components/FormHeader'
import { BottomNavigation } from '@/components/BottomNavigation'
import { FormPage1 } from '@/app/formpage1/page'
import { FormPage2 } from '@/app/formpage2/page'
import { FormPage3 } from '@/app/formpage3/page'
import { FormPage4 } from '@/app/formpage4/page'
import { FormPage4Cleaning } from '@/app/formpage4cleaning/page'
import { FormPage5 } from '@/app/formpage5/page'

export function PostTaskForm() {
  const { currentPage } = useForm()

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <FormPage1 />
      case 2:
        return <FormPage2 />
      case 3:
        return <FormPage3 />
      case 4:
        return <FormPage4 /> // Removals details
      case 5:
        return <FormPage5 /> // Final page
      case 6:
        return <FormPage4Cleaning /> // Cleaning details
      default:
        return <FormPage1 />
    }
  }

  return (
    <div className="bg-[#f7fafc] min-h-screen relative shrink-0 w-full max-w-md mx-auto">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start justify-between min-h-screen overflow-clip p-0 relative w-full">
        {/* Header */}
        <div className="w-full">
          <FormHeader />
          {/* Main Content */}
          <div className="flex-1">{renderCurrentPage()}</div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  )
}
