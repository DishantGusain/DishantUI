import { ReactNode } from "react";

interface TestProps {
   children: ReactNode;
   className?: string;
}

export default function ({ children, className = "" }: TestProps) {
   return (
      <button
         className={`text-[20px] font-ZenDots  bg-[#FF0078] rounded-[10px] py-4 px-6 flex items-center justify-between ${className}`}
      >
         {children}
         <img
            className=""
            src="/Images/Mineblue/DownButton.png"
         />
      </button>
   );
}
