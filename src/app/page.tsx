import Image from "next/image";

export default function Home() {
   return (
      <div className="flex justify-center items-center font-[family-name:var(--font-geist-sans)] w-full min-h-screen bg-blue-500">
         <div className="flex flex-col justify-center items-center gap-16 p-8 sm:p-20 pb-20 max-w-screen-2xl min-h-screen bg-red-400">
            <main className="flex flex-col items-center sm:items-start gap-8 row-start-2 bg-red-500">
               <Image
                  className="dark:invert"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={180}
                  height={38}
                  priority
               />
               <ol className="font-[family-name:var(--font-geist-mono)] text-center text-sm sm:text-left list-decimal list-inside">
                  <li className="mb-2">
                     Get started by earted by arted by arted by arted by arted
                     by arted by arted by arted arted by arted by arted by arted
                     by arted by arted by arted by arted by arted by arted by by
                     arted by arted by arted by arted by arted by diting{" "}
                     <code className="px-1 py-0.5 font-semibold bg-black/[.05] dark:bg-white/[.06] rounded">
                        src/app/page.tsx
                     </code>
                     .
                  </li>
                  <li>Save and see your changes instantly.</li>
               </ol>

               <div className="flex sm:flex-row flex-col items-center gap-4">
                  <a
                     className="flex justify-center items-center gap-2 px-4 sm:px-5 text-background text-sm sm:text-base h-10 sm:h-12 bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] border border-transparent border-solid rounded-full transition-colors"
                     href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        className="dark:invert"
                        src="/vercel.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                     />
                     Deploy now
                  </a>
                  <a
                     className="flex justify-center items-center dark:border-white/[.145] px-4 sm:px-5 text-sm sm:text-base sm:min-w-44 h-10 sm:h-12 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] border hover:border-transparent border-black/[.08] border-solid rounded-full transition-colors"
                     href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Read our docs
                  </a>
               </div>
            </main>
            <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3">
               <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     aria-hidden
                     src="/file.svg"
                     alt="File icon"
                     width={16}
                     height={16}
                  />
                  Learn
               </a>
               <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     aria-hidden
                     src="/window.svg"
                     alt="Window icon"
                     width={16}
                     height={16}
                  />
                  Examples
               </a>
               <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     aria-hidden
                     src="/globe.svg"
                     alt="Globe icon"
                     width={16}
                     height={16}
                  />
                  Go to nextjs.org →
               </a>
            </footer>
         </div>
      </div>
   );
}
