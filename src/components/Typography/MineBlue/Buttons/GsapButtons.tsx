"use client";
import { animatePageOut } from "@/utils/animations";
import { usePathname, useRouter } from "next/navigation";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonWithPageOutAnimation
   extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   href: string;
}

function ButtonWithPageOutAnimation({
   children,
   href,
   ...props
}: ButtonWithPageOutAnimation) {
   const router = useRouter();
   const pathname = usePathname();

   const handleAnimatePageOut = () => {
      if (pathname !== href) {
         animatePageOut(href, router);
      }
   };

   return (
      <button
         className=""
         {...props}
         onClick={handleAnimatePageOut}
      >
         {children}
      </button>
   );
}

export { ButtonWithPageOutAnimation };











