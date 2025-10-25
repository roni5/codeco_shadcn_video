'use client'

import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'

// To add your domain name:
// Go to Settings
// Select Project and Billing
// Click on Preferences
// Enter your domain name and save

// Note: This only affects the domain shown in email headers sent to visitors, not the website where Tidio is installed.

const ChatWidget = () => {
  const [open, setOpen] = useState(false)

  // 1️⃣ Load Tidio script once
  useEffect(() => {
    const existingScript = document.querySelector('script[src*="tidio.co"]')
    if (existingScript) return

    const script = document.createElement('script')
    script.src = '//code.tidio.co/p2gg0ppkdlugaxivilno5xhsv7j2sw0n.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  //2️⃣ Toggle visibility based on `open`
  useEffect(() => {
    const interval = setInterval(() => {
      const tidioAPI = (window as any).tidioChatApi
      if (tidioAPI) {
        clearInterval(interval)
        if (open) {
          tidioAPI.show()
          tidioAPI.open() // Optional: auto-open chat box
          toast.success('Chat opened')
        } else {
          tidioAPI.hide()
          toast.info('Chat closed')
        }
      }
    }, 300)

    return () => clearInterval(interval)
  }, [open])

  return (
    <>
      <Toaster position="top-right" richColors />
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 16px',
          backgroundColor: '#4f46e5',
          color: '#fff',
          border: 'none',
          borderRadius: '999px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        {open ? 'Close Chat' : 'Open Chat'}
      </button>
    </>
  )
}

export default ChatWidget

// 'use client'

// import { useEffect, useState } from 'react'

// const ChatWidget: React.FC = () => {
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     // Inject Tidio script once on mount
//     const script = document.createElement('script')
//     script.src = '//code.tidio.co/p2gg0ppkdlugaxivilno5xhsv7j2sw0n.js'
//     script.async = true
//     document.body.appendChild(script)

//     // Cleanup (optional)
//     return () => {
//       document.body.removeChild(script)
//     }
//   }, [])

//   useEffect(() => {
//     // Once Tidio is loaded, we can toggle visibility using its API
//     const interval = setInterval(() => {
//       const tidioAPI = (window as any).tidioChatApi
//       if (tidioAPI) {
//         clearInterval(interval)
//         open ? tidioAPI.show() : tidioAPI.hide()
//       }
//     }, 500)
//   }, [open])

//   return (
//     <div>
//       {/* Custom Toggle Button */}
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         style={{
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           padding: '12px 16px',
//           borderRadius: '8px',
//           background: '#4f46e5',
//           color: 'white',
//           border: 'none',
//           cursor: 'pointer',
//           zIndex: 1000,
//         }}
//       >
//         {open ? 'Close Chat' : 'Open Chat'}
//       </button>
//     </div>
//   )
// }

// export default ChatWidget

// Tidio sometimes auto-shows itself even if you plan to hide it. To handle this:

/*  
useEffect(() => {
  const interval = setInterval(() => {
    const tidioAPI = (window as any).tidioChatApi
    if (tidioAPI) {
      clearInterval(interval)
      tidioAPI.hide() // Initially hidden
    }
  }, 500)
}, [])

*/
