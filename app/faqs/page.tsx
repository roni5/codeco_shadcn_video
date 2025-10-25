//'use client'

import CalendarWithDropdownNav from '@/components/CalendarWithDropdownNav'
import ChatBubble from '@/components/chatBubble'
import ChatBubbleAudio from '@/components/chatBubbleAudio'
import ChatBubbleUpload from '@/components/chatBubbleUpload'
import DateRangepicker from '@/components/dateRangepicker'
import { DayDropdown } from '@/components/daydrop'
import ImageFigure from '@/components/imageFigure'
import { InputTime } from '@/components/InputTime'
import LaptopMockup from '@/components/LaptopMockup'
import MockupMobile from '@/components/mockupMobile'
import Stepper from '@/components/ProgressStepper'
import SEO from '@/components/seo'
import TabletMockup from '@/components/TabletMockup'
import TestCal from '@/components/testcal'
import { DayPicker } from 'react-day-picker'

export default function Faqs() {
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       // Optionally, you can automatically open the accordion item
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, []);

  return (
    <div>
      <SEO
        pageTitle="Faqspage"
        pageDescription="Any unanswered question you find here"
      />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <ChatBubble />
            <DateRangepicker />
            <InputTime />
            <ImageFigure />
            <Stepper />
            <TestCal />
            <CalendarWithDropdownNav />
            <ChatBubbleUpload />
            <ChatBubbleAudio />
            <MockupMobile />
            <LaptopMockup />
            <div className="text-center" id="target">
              <h1 className="text-5xl font-bold text-gradient-indigo-to-rose bg-clip-text">
                Gradient Text
              </h1>
              <h2 className="text-1xl font-bold tracking-tighter sm:text-lg md:text-2xl text-gradient-indigo-to-rose">
                Get Tasks Done Easily and Quickly
              </h2>
              <TabletMockup />
            </div>
            <div className="mb-2 font-semibold">
              TaskFul connects you with skilled and reliable taskers in your
              neighborhood. Post your task, choose a tasker, and get it done.
              From home repairs to errands, we’ve got you covered. Sign up today
              and experience the convenience!
            </div>
            <div className="mb-2 font-semibold">📝 Rules and policies</div>
            <div className="h-5 w-5 transition-transform group-[.open]:rotate-180" />
          </div>
        </div>
      </section>
    </div>
  )
}
