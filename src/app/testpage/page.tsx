import { ButtonWithPageOutAnimation } from "@/components/Typography/MineBlue/Buttons/GsapButtons";

export default function TestPage() {
   return (
      <div className="w-full min-h-screen bg-blue-300 flex justify-center items-center">
         <ButtonWithPageOutAnimation
            href="/"
            className="bg-red-500 px-6 py-2 rounded-xl"
         >
            Home Page
         </ButtonWithPageOutAnimation>
      </div>
   );
}
