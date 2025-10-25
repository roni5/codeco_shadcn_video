export default function TailForm() {
  return (
    <div className="isolate bg-white py-12 sm:py-24">
      {/* Header with adjusted padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Contact sales
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
      </div>

      {/* Gradient background - hidden on mobile */}
      <div className="hidden sm:block" aria-hidden="true">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-1/2 aspect-[1155/678] w-full max-w-screen-2xl -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Form with responsive layout */}
      <form
        action="#"
        method="POST"
        className="mx-auto mt-10 max-w-xl px-4 sm:px-6 sm:mt-12"
      >
        <fieldset aria-label="Choose a memory option">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium">RAM</div>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              See performance specs
            </a>
          </div>

          {/* Responsive RAM options */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-2">
            {['4 GB', '8 GB', '16 GB', '32 GB', '64 GB', '128 GB'].map(
              (size, index) => (
                <label
                  key={size}
                  className="p-2 border border-gray-300 rounded-md text-center cursor-pointer hover:bg-gray-50 has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition"
                >
                  <input
                    type="radio"
                    name="memory-option"
                    value={size}
                    className="sr-only"
                    defaultChecked={size === '128 GB'}
                  />
                  <span className="text-sm sm:text-base">{size}</span>
                </label>
              )
            )}
          </div>
        </fieldset>

        {/* Responsive form grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {/* First Name */}
          <div className="sm:col-span-1">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                First name
              </span>
            </label>
            <div className="mt-1">
              <input
                id="first-name"
                type="text"
                name="first-name"
                autoComplete="given-name"
                required
                minLength={2}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="sm:col-span-1">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                id="last-name"
                type="text"
                name="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <div className="mt-1">
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="sm:col-span-2">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              Upload
            </label>
            <div className="mt-1">
              <input
                type="file"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Email
              </span>
            </label>
            <div className="mt-1">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Phone
              </span>
            </label>
            <div className="mt-1">
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                pattern="^\+?[0-9]{10,15}$"
                placeholder="077-7749-7045"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Message
              </span>
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                minLength={12}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="sm:col-span-2 flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="agree-to-policies"
                type="checkbox"
                name="agree-to-policies"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agree-to-policies" className="text-gray-700">
                By selecting this, you agree to our{' '}
                <a
                  href="/privacy"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
// export default function tailForm() {
//   return (
//     <>
//       <div className="isolate bg-white py-16 sm:py-24">
//         <header>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6">
//             <div className="mx-auto max-w-2xl text-center">
//               <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
//                 Contact sales
//               </h2>
//               <p className="mt-2 text-lg/8 text-gray-600">
//                 Aute magna irure deserunt veniam aliqua magna enim voluptate.
//               </p>
//             </div>
//           </div>
//         </header>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
//         >
//           <div
//             className="relative left-1/2 aspect-[1155/678] w-full max-w-screen-2xl -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//         <form
//           action="#"
//           method="POST"
//           className="mx-auto mt-16 max-w-xl sm:mt-20"
//         >
//           <fieldset aria-label="Choose a memory option">
//             <div className="flex items-center justify-between -my-4">
//               <div className="-my-3 py-1">RAM</div>
//               <a href="/#" className="text-blue-600 hover:text-blue-800">
//                 {' '}
//                 See performance specs{' '}
//               </a>
//             </div>
//             <div className="my-8 grid grid-cols-6 gap-2 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
//               <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
//                 <input
//                   type="radio"
//                   name="memory-option"
//                   value="4 GB"
//                   className="sr-only"
//                 />
//                 <span>4 GB</span>
//               </label>
//               <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
//                 <input
//                   type="radio"
//                   name="memory-option"
//                   value="8 GB"
//                   className="sr-only"
//                 />
//                 <span>8 GB</span>
//               </label>
//               <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
//                 <input
//                   type="radio"
//                   name="memory-option"
//                   value="16 GB"
//                   className="sr-only"
//                 />
//                 <span>16 GB</span>
//               </label>
//               <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
//                 <input
//                   type="radio"
//                   name="memory-option"
//                   value="32 GB"
//                   className="sr-only"
//                 />
//                 <span>32 GB</span>
//               </label>
//               <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
//                 <input
//                   type="radio"
//                   name="memory-option"
//                   value="64 GB"
//                   className="sr-only"
//                 />
//                 <span>64 GB</span>
//               </label>
//               <label className="p-2 pointer-coarse:p-4 border border-gray-300 rounded-md text-center cursor-pointer has-[:checked]:bg-blue-600 has-[:checked]:text-white has-[:checked]:border-transparent transition duration-200 ease-in-out">
//                 <input
//                   type="radio"
//                   name="memory-option"
//                   value="128 GB"
//                   className="sr-only"
//                   defaultChecked
//                 />
//                 <span>128 GB</span>
//               </label>
//             </div>
//           </fieldset>
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             <div>
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
//                   First name
//                 </span>
//               </label>

//               <div className="mt-2.5">
//                 <input
//                   id="first-name"
//                   type="text"
//                   name="first-name"
//                   autoComplete="given-name"
//                   required
//                   minLength={2}
//                   className="peer block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />
//                 <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
//                   Please provide your first name
//                 </p>
//               </div>
//             </div>
//             {/* <div>
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">
//                   First name
//                 </span>
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="first-name"
//                   type="text"
//                   name="first-name"
//                   autoComplete="given-name"
//                   required
//                   minLength={2}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 invalid:border-pink-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div> */}
//             <div>
//               <label
//                 htmlFor="last-name"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 Last name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="last-name"
//                   type="text"
//                   name="last-name"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="company"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 Company
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="company"
//                   type="text"
//                   name="company"
//                   autoComplete="organization"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="company"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 Upload
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   type="file"
//                   className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ..."
//                 />
//                 {/* <input
//                   id="company"
//                   type="text"
//                   name="company"
//                   autoComplete="organization"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 /> */}
//               </div>
//             </div>
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">
//                   Email
//                 </span>
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
//                 />
//               </div>
//             </div>
//             {/* <div className="block sm:col-span-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
//                   Email
//                 </span>
//               </label>

//               <div className="mt-2.5">
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   autoComplete="email"
//                   required
//                   className="peer block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />
//                 <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
//                   Please provide a valid email address.
//                 </p>
//               </div>
//             </div> */}
//             <div className="block sm:col-span-2 mt-6">
//               <label
//                 htmlFor="phone"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
//                   Phone
//                 </span>
//               </label>

//               <div className="mt-2.5">
//                 <input
//                   id="phone"
//                   type="tel"
//                   name="phone"
//                   required
//                   pattern="^\+?[0-9]{10,15}$"
//                   placeholder="077-7749-7045"
//                   className="peer block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />
//                 <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
//                   Please provide a valid phone number.
//                 </p>
//               </div>
//             </div>
//             {/* <div className="sm:col-span-2">
//               <label
//                 htmlFor="phone-number"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 Phone number
//               </label>
//               <div className="mt-2.5">
//                 <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
//                   <div className="grid shrink-0 grid-cols-1 focus-within:relative">
//                     <select
//                       id="country"
//                       name="country"
//                       autoComplete="country"
//                       aria-label="Country"
//                       className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                     >
//                       <option>UK</option>
//                       <option>EU</option>
//                       <option>US</option>
//                       <option>CA</option>
//                     </select>
//                     <svg
//                       viewBox="0 0 16 16"
//                       fill="currentColor"
//                       data-slot="icon"
//                       aria-hidden="true"
//                       className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                     >
//                       <path
//                         d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
//                         clipRule="evenodd"
//                         fillRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     id="phone-number"
//                     type="text"
//                     name="phone-number"
//                     placeholder="077-7749-7045"
//                     pattern="^\+?[0-9]{10,15}$"
//                     className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 invalid:border-pink-500 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
//                   />
//                 </div>
//               </div>
//             </div> */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="message"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
//                   Message
//                 </span>
//               </label>

//               <div className="mt-2.5">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   required
//                   minLength={12}
//                   className="peer block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />

//                 <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
//                   Message must be at least 12 characters.
//                 </p>
//               </div>
//             </div>

//             {/* <div className="sm:col-span-2">
//               <label
//                 htmlFor="message"
//                 className="block text-sm/6 font-semibold text-gray-900"
//               >
//                 <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*']">
//                   Message
//                 </span>
//               </label>
//               <div className="mt-2.5">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div> */}
//             <div className="flex gap-x-4 sm:col-span-2">
//               <div className="flex h-6 items-center">
//                 <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
//                   <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
//                   <input
//                     id="agree-to-policies"
//                     type="checkbox"
//                     name="agree-to-policies"
//                     aria-label="Agree to policies"
//                     className="absolute inset-0 appearance-none focus:outline-hidden"
//                   />
//                 </div>
//               </div>
//               <label
//                 htmlFor="agree-to-policies"
//                 className="text-sm/6 text-gray-600"
//               >
//                 By selecting this, you agree to our{' '}
//                 <a
//                   href="/privacy"
//                   className="font-semibold whitespace-nowrap text-indigo-600"
//                 >
//                   privacy policy
//                 </a>
//                 .
//               </label>
//             </div>
//           </div>
//           <div className="mt-10">
//             <button
//               type="submit"
//               className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Let's talk
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }
