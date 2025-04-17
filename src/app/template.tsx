"use client";

import { animatePageIn } from "@/utils/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
   useEffect(() => {
      animatePageIn();
   }, []);
   return (
      <div className="">
         <div
            id="banner-1"
            className="min-h-screen bg-red-500 z-10 fixed top-0 left-0  w-[25%] "
         />
         <div
            id="banner-2"
            className="min-h-screen bg-red-500 z-10 fixed top-0 left-[25%]   w-[25%]"
         />
         <div
            id="banner-3"
            className="min-h-screen bg-red-500 z-10 fixed top-0 left-[50%]   w-[25%] "
         />
         <div
            id="banner-4"
            className="min-h-screen bg-red-500 z-10 fixed top-0 left-[75%]   w-[25%]"
         />
         <div
            id="banner-5"
            className="min-h-screen bg-red-500 z-10 fixed top-0 left-[100%]   w-[25%]"
         />
         {children}
      </div>
   );
}
