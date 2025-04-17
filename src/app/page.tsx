import Image from "next/image";
import EditZone from "./editzone/page";

export default function Home() {
   return (
      <div className="w-full min-h-screen flex justify-center text-white bg-BgPrimary">
         <main className="relative w-full min-h-screen max-w-screen-screenPrimary px-14 overflow-clip flex items-center justify-center">
            <EditZone />
         </main>
      </div>
   );
}
