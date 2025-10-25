'use client'

import { Home, List, Plus, MessageSquare, User } from 'lucide-react'

export function BottomNavigation() {
  const navItems = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: List, label: 'My Tasks', id: 'tasks' },
    { icon: Plus, label: 'Post a Task', id: 'post', active: true },
    { icon: MessageSquare, label: 'Inbox', id: 'inbox' },
    { icon: User, label: 'Profile', id: 'profile' },
  ]

  return (
    <div className="bg-[#f7fafc] relative shrink-0 w-full">
      <div className="absolute border-[#e8edf5] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row gap-2 items-start justify-start pb-3 pt-[9px] px-4 relative w-full">
          {navItems.map(item => (
            <div
              key={item.id}
              className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-1 h-[72px] items-center justify-end p-0 relative w-full">
                <div className="h-8 relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-8 items-center justify-center p-0 relative">
                    <item.icon
                      className={`size-6 ${item.active ? 'text-[#0d141c]' : 'text-[#4a739c]'}`}
                    />
                  </div>
                </div>
                <div className="relative shrink-0">
                  <p
                    className={`text-[12px] leading-[18px] font-medium ${
                      item.active ? 'text-[#0d141c]' : 'text-[#4a739c]'
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f7fafc] h-5 relative shrink-0 w-full" />
    </div>
  )
}