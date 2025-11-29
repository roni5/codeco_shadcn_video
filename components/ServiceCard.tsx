// components/ServiceCard.tsx
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  className?: string; 
}

const ServiceCard = ({ icon, title, details, className = "" }: ServiceCardProps) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className={`
          group relative mb-9 rounded-2xl p-10 md:px-7 xl:px-10
          bg-slate-900/40 backdrop-blur border border-slate-800
          transition-all duration-300 hover:shadow-xl
      
          /* Hover theme comes from parent */
          ${className}
        `}
      >
        <div className="
          mb-8 flex h-[70px] w-[70px] items-center justify-center 
          rounded-2xl bg-slate-900 transition-colors duration-300
          group-hover:bg-white/10
          group-hover:text-current
        ">
          {/* Icon automatically inherits group-hover color */}
          <div className="text-white group-hover:text-current">{icon}</div>
        </div>

        <h4 className="
          mb-3.5 text-2xl font-semibold text-white 
          transition-all duration-300 
          group-hover:text-current
          group-hover:pl-1
        ">
          {title}
        </h4>

        <p className="
          text-slate-300 transition-all duration-300 
          group-hover:text-current
          group-hover:pl-1
        ">
          {details}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

// // components/ServiceCard.tsx
// import React from "react";

// interface ServiceCardProps {
//   icon: React.ReactNode;
//   title: string;
//   details: string;
//   className?: string; // allow custom styling
// }

// const ServiceCard = ({ icon, title, details, className = "" }: ServiceCardProps) => {
//   return (
//     <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//       <div
//         className={`
//           group mb-9 bg-linear-to-r from-gray-100 via-gray-200 to-gray-200 
//           p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 
//           md:px-7 xl:px-10 backdrop-blur-sm rounded-2xl 
//           transition-all duration-300 border border-slate-700/50
//           ${className}   /* user overrides injected here */
//         `}
//       >
//         <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gray-900">
//           {icon}
//         </div>

//         <h4 className="mb-3.5 text-2xl font-semibold text-dark group-hover:pl-2 group-hover:rounded-sm group-hover:bg-zinc-800 group-hover:text-white transition-colors duration-300">
//           {title}
//         </h4>

//         <p className="text-slate-950 group-hover:pl-2 group-hover:rounded-sm group-hover:bg-zinc-800 group-hover:text-white transition-colors duration-300">
//           {details}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
