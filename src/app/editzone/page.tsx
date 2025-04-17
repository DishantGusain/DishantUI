import AnimatedBeamDemo from "@/components/AnimatedBeam/animated-beam-demo";
import RainingLetters from "@/components/RainingLetters";
import Timeline from "@/components/Timeline";
import ShinyButton from "@/components/Typography/MineBlue/Buttons/FramerButtons";
import { ButtonWithPageOutAnimation } from "@/components/Typography/MineBlue/Buttons/GsapButtons";
import { ArrowRight } from "lucide-react";

export default function EditZone() {
   return (
      <div className="relative w-full">
         <div className="top-0 right-0 absolute">
            <img
               className=""
               src="/test.gif"
            />
         </div>
         <div className="relative space-y-6 px-56 text-center">
            <h1 className="font-extralight text-[82px] leading-none tracking-tight">
               Power <span className="text-red-400"> Generative AI </span>{" "}
               <br /> With Your Data
            </h1>

            <p className="">
               Make the best models with the best data. Scale Data Engine powers
               nearly every major foundation model, and with Scale GenAI
               Platform, leverages your enterprise data to unlock the value of
               AI.
            </p>

            <div className="flex justify-center space-x-4 font-medium">
               <button className="inline-flex bg-white px-5 py-2 rounded-xl text-black">
                  Book a Demo
                  <span className="ml-2">
                     <ArrowRight />
                  </span>
               </button>
               <button className="inline-flex px-5 py-2 rounded-xl">
                  Build AI
                  <span className="ml-2">
                     <ArrowRight />
                  </span>
               </button>
               <ButtonWithPageOutAnimation href="/testpage">
                  Change Page
               </ButtonWithPageOutAnimation>
               <ShinyButton />
            </div>
         </div>

         <Timeline/>
         <RainingLetters/>
         <AnimatedBeamDemo/>
      </div>
   );
}
