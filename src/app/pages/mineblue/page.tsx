import ButtonPrimary from "@/components/Typography/MineBlue/ButtonPrimary";
import TextPrimary from "@/components/Typography/MineBlue/TextPrimary";
import TextSecondary from "@/components/Typography/MineBlue/TextSecondary";

export default function () {
   return (
      <div className="bg-red-500 w-full min-h-screen">
         <div className="w-full min-h-screen flex justify-center text-white bg-BgPrimary">
            <main className="relative w-full min-h-screen max-w-screen-screenPrimary px-14 overflow-clip">
               {/* --------------- NEW COMMENT --------------- */}

               <section
                  id="Partners"
                  className="relative w-full  my-20 "
               >
                  <TextPrimary className="text-5xl text-center z-10">
                     PARTNERS
                  </TextPrimary>
                  <div className=" absolute w-full  ">
                     <TextPrimary className="text-[190px] text-center overflow-clip text-black">
                        MINEBLUE
                     </TextPrimary>
                  </div>
                  <img
                     className="absolute z-20 -bottom-[140%] right-[45%] opacity-60 scale-[1]"
                     src="/Images/Mineblue/Rectangle2233.png"
                  />
                  <img
                     className="absolute    -bottom-[190%] -right-[30%] opacity-30 scale-[0.6]"
                     src="/Images/Mineblue/Rectangle12.png"
                  />
                  <div className="relative flex items-center justify-center space-x-14 z-10">
                     <div className="">
                        <img
                           className=""
                           src="/Images/Mineblue/minati-token.png"
                        />
                     </div>
                     <div className="">
                        <img
                           className=""
                           src="/Images/Mineblue/x.png"
                        />
                     </div>
                     <div className="">
                        <img
                           className=""
                           src="/Images/Mineblue/Asset5new.png"
                        />
                     </div>
                  </div>
               </section>

               {/* --------------- NEW COMMENT --------------- */} 
               <section
                  id="Purchase-Mineblue-Token"
                  className="my-20 relative z-20"
               >
                  <div className="border-t-8 border-[#11365B] overflow-clip relative bg-black rounded-b-[100px] flex items-center justify-between">
                     <div className="w-1/2 p-10 space-y-10">
                        <TextPrimary className="text-6xl leading-tight relative">
                           <div className="relative z-10">
                              PURCHASE <br /> MINEBLUE <br /> TOKEN <br />{" "}
                           </div>
                           <img
                              className="absolute right-16 top-6 z-0 opacity-35"
                              src="/Images/Mineblue/Rectangle9.png"
                           />
                        </TextPrimary>

                        {/* --------------- NEW COMMENT --------------- */}
                        <div className="space-y-4">
                           <div className="flex items-start justify-start">
                              <img
                                 className=""
                                 src="/Images/Mineblue/RatingCircled.png"
                              />
                              <TextSecondary>
                                 Supercharge your $CYBRO investment by
                                 purchasing $1,000 or more during our Presale
                                 phase
                              </TextSecondary>
                           </div>

                           <div className="flex items-start justify-start">
                              <img
                                 className=""
                                 src="/Images/Mineblue/RatingCircled.png"
                              />
                              <TextSecondary>
                                 You'll automatically join our Pre-Alpha Yield
                                 Program and earn a variable yield in ETH, paid
                                 out weekly
                              </TextSecondary>
                           </div>

                           <div className="flex items-start justify-start">
                              <img
                                 className=""
                                 src="/Images/Mineblue/RatingCircled.png"
                              />
                              <TextSecondary>
                                 Withdraw your rewards after the TGE
                              </TextSecondary>
                           </div>
                        </div>
                        <div className="flex justify-center">
                           <ButtonPrimary className="w-[425px]">
                              Buy MINEBLUE TOKEN
                           </ButtonPrimary>
                        </div>
                     </div>

                     <div className="w-1/2  relative  flex justify-end">
                        <img
                           className="rounded-b-[100px] z-10"
                           src="/Images/Mineblue/rise-humanoids.png"
                        />
                     </div>

                     <img
                        className="absolute -right-[20%] w-[90%] opacity-55"
                        src="/Images/Mineblue/Rectangle12.png"
                     />
                  </div>
               </section>

               {/* --------------- NEW COMMENT --------------- */}

               <section className="relative my-20  w-full ">
                  <div className="flex justify-center mb-16  ">
                     <div className="relative   ">
                        <TextPrimary className="relative z-10 text-5xl text-center">
                           WHY CHOOSE US
                        </TextPrimary>
                        <img
                           className="absolute -right-14 top-0 z-0 opacity-35"
                           src="/Images/Mineblue/Rectangle1010.png"
                        />
                     </div>
                  </div>

                  <div className="  absolute w-auto -top-12 -right-16 opacity-20  ">
                     <img
                        className=" "
                        src="/Images/Mineblue/file3.png"
                     />
                  </div>

                  <div className="pb-[155px] flex items-center justify-between px-6 relative z-10">
                     {/* --------------- Card 1 --------------- */}
                     <div className="flex relative flex-col items-center text-center   clip-custom justify-evenly w-[300px] h-[313px]  space-y-3 px-3 py-3  ">
                        <div className="h-[50%] flex flex-col justify-center ">
                           <div className="  w-28 h-28 rounded-full bg-[#111112] border-opacity-20 border-white border flex items-center justify-center">
                              <img
                                 className=""
                                 src="/Images/Mineblue/secureFarming.png"
                              />
                           </div>
                        </div>
                        <div className="h-[50%] space-y-2">
                           <TextPrimary className="text-xl">
                              Secure Farming
                           </TextPrimary>

                           <TextSecondary className="text-base">
                              Multiple strategies to farm APY and Points
                              combined in a top-tier user interface.
                           </TextSecondary>
                        </div>
                     </div>
                     {/* --------------- Card 2 --------------- */}
                     <div className="flex flex-col items-center text-center  clip-custom justify-evenly w-[300px] h-[313px]  space-y-3 px-3 py-3   ">
                        <div className="h-[50%] flex flex-col justify-center ">
                           <div className="  w-28 h-28 rounded-full bg-[#111112] border-opacity-20 border-white border flex items-center justify-center">
                              <img
                                 className=""
                                 src="/Images/Mineblue/ai-technology.png"
                              />
                           </div>
                        </div>
                        <div className="h-[50%] space-y-2">
                           <TextPrimary className="text-xl">
                              AI-Powered
                           </TextPrimary>

                           <TextSecondary className="text-base">
                              AI portfolio creation tailored to user preferences
                           </TextSecondary>
                        </div>
                     </div>
                     {/* --------------- Card 3 --------------- */}
                     <div className="flex flex-col items-center text-center  clip-custom justify-evenly w-[300px] h-[313px]  space-y-3 px-3 py-3    ">
                        <div className="h-[50%] flex flex-col justify-center ">
                           <div className="  w-28 h-28 rounded-full bg-[#111112] border-opacity-20 border-white border flex items-center justify-center">
                              <img
                                 className=""
                                 src="/Images/Mineblue/blockchainicon.png"
                              />
                           </div>
                        </div>
                        <div className="h-[50%] space-y-2">
                           <TextPrimary className="text-xl">
                              Accessible Features
                           </TextPrimary>

                           <TextSecondary className="text-base">
                              Effortless deposits and swift withdrawals
                           </TextSecondary>
                        </div>
                     </div>

                     {/* --------------- Card 4 --------------- */}
                     <div className="flex flex-col items-center text-center  clip-custom justify-evenly w-[300px] h-[313px]  space-y-3 px-3 py-3   ">
                        <div className="h-[50%] flex flex-col justify-center ">
                           <div className="  w-28 h-28 rounded-full bg-[#111112] border-opacity-20 border-white border flex items-center justify-center">
                              <img
                                 className=""
                                 src="/Images/Mineblue/polygonicon.png"
                              />
                           </div>
                        </div>
                        <div className="h-[50%] space-y-2">
                           <TextPrimary className="text-xl">
                              Sustainable Platform
                           </TextPrimary>

                           <TextSecondary className="text-base">
                              Native yield with an APY of 4% for ETH and 5% for
                              stablecoins
                           </TextSecondary>
                        </div>
                     </div>
                  </div>
                  <div className=" absolute w-full bottom-0 ">
                     <TextPrimary className="text-[200px]  scale-[1.05] text-center overflow-clip text-black">
                        MINEBLUE
                     </TextPrimary>
                  </div>
               </section>

               {/* --------------- NEW COMMENT --------------- */}

               <section className="relative">
                  <div className="flex justify-center mb-16  ">
                     <div className="relative   ">
                        <TextPrimary className="relative z-10 text-5xl text-center">
                           ROADMAP
                        </TextPrimary>
                        <img
                           className="absolute right-2 top-0 z-0 opacity-35"
                           src="/Images/Mineblue/Rectangle13.png"
                        />
                     </div>
                  </div>

                  <div className="w-full absolute scale-[1.06] -bottom-5">
                     <img
                        className=""
                        src="/Images/Mineblue/Group9.png"
                     />
                  </div>
                  <div className="flex items-center justify-between px-6 relative z-10">
                     {/* --------------- Card 1 --------------- */}
                     <div className="flex flex-col justify-evenly w-[300px]  space-y-3 px-3 py-3 bg-gradient-to-b from-[#FE087C] to-[#1E86C2] rounded-xl">
                        <div className="  ">
                           <TextPrimary className="text-xs text-center pt-1">
                              PHASE 1
                           </TextPrimary>

                           <div className="flex items-center justify-center space-x-3 py-3 px-[10px]">
                              <div className="px-2 py-1 rounded-md text-black bg-white">
                                 <TextPrimary className="text-xl">
                                    Q1
                                 </TextPrimary>
                              </div>

                              <TextPrimary className="text-3xl  pr-4">
                                 2025
                              </TextPrimary>
                           </div>
                        </div>
                        <div className="px-3  h-44 text-sm py-8  bg-[#191818] rounded-lg">
                           <div className="space-y-2">
                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>Pre-Sale Launch</TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>
                                    Community building
                                 </TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>
                                    MVP Launch: Vaults & exchange
                                 </TextSecondary>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* --------------- Card 2 --------------- */}
                     <div className="bg-[#313131] flex flex-col justify-evenly w-[300px]  space-y-3 px-3 py-3  rounded-xl">
                        <div className="  ">
                           <TextPrimary className="text-xs text-center pt-1">
                              PHASE 2
                           </TextPrimary>

                           <div className="flex items-center justify-center space-x-3 py-3 px-[10px]">
                              <div className="px-2 py-1 rounded-md text-black bg-white">
                                 <TextPrimary className="text-xl">
                                    Q2
                                 </TextPrimary>
                              </div>

                              <TextPrimary className="text-3xl  pr-4">
                                 2025
                              </TextPrimary>
                           </div>
                        </div>
                        <div className="px-3  h-44 text-sm py-8  bg-[#191818] rounded-lg">
                           <div className="space-y-2">
                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>
                                    Lending Aggregator
                                 </TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>
                                    Zap-in and zap-out
                                 </TextSecondary>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* --------------- Card 3 --------------- */}
                     <div className="flex flex-col justify-evenly w-[300px]  space-y-3 px-3 py-3 bg-[#313131]  rounded-xl">
                        <div className="  ">
                           <TextPrimary className="text-xs text-center pt-1">
                              PHASE 3
                           </TextPrimary>

                           <div className="flex items-center justify-center space-x-3 py-3 px-[10px]">
                              <div className="px-2 py-1 rounded-md text-black bg-white">
                                 <TextPrimary className="text-xl">
                                    Q3
                                 </TextPrimary>
                              </div>

                              <TextPrimary className="text-3xl  pr-4">
                                 2025
                              </TextPrimary>
                           </div>
                        </div>
                        <div className="px-3  h-44 text-sm py-8  bg-[#191818] rounded-lg">
                           <div className="space-y-2">
                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>Staking</TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>
                                    Token Generation Event
                                 </TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>Airdrop</TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>
                                    Instant Investment feature
                                 </TextSecondary>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* --------------- Card 4 --------------- */}
                     <div className="flex flex-col justify-evenly w-[300px]  space-y-3 px-3 py-3 bg-[#313131]  rounded-xl">
                        <div className="  ">
                           <TextPrimary className="text-xs text-center pt-1">
                              PHASE 4
                           </TextPrimary>

                           <div className="flex items-center justify-center space-x-3 py-3 px-[10px]">
                              <div className="px-2 py-1 rounded-md text-black bg-white">
                                 <TextPrimary className="text-xl">
                                    Q4
                                 </TextPrimary>
                              </div>

                              <TextPrimary className="text-3xl  pr-4">
                                 2025
                              </TextPrimary>
                           </div>
                        </div>
                        <div className="px-3  h-44 text-sm py-8  bg-[#191818] rounded-lg">
                           <div className="space-y-2">
                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>
                                    Borrow Aggregator
                                 </TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>Leverage farming</TextSecondary>
                              </div>

                              <div className="flex items-center justify-start space-x-[5px]">
                                 <img
                                    className="w-5 h-5"
                                    src="/Images/Mineblue/RatingCircled.png"
                                 />
                                 <TextSecondary>AI Feature</TextSecondary>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>

               <section className="h-80 w-full bg-gray-600 my-10"></section>
               <section className="h-80 w-full bg-gray-600 my-10"></section>
               {/* --------------- NEW COMMENT --------------- */}

               <section
                  id="Purchase-Mineblue-Token"
                  className="py-16"
               >
                  <div className="border-t-8 border-opacity-50 border-[#FF0078] overflow-clip relative bg-black rounded-b-[100px] flex items-center justify-between">
                     <div className="w-1/2  relative  flex justify-start">
                        <img
                           className="rounded-b-[100px] z-10"
                           src="/Images/Mineblue/portrait-technologically.png"
                        />
                     </div>

                     <div className="w-1/2 p-10  space-y-10">
                        <TextPrimary className="text-[80px] leading-tight relative">
                           <div className="relative z-10">
                              MINEBLUE <br /> DAPP <br /> LAUNCH <br />{" "}
                           </div>
                           <img
                              className="absolute -right-3 top-8 z-0 opacity-35"
                              src="/Images/Mineblue/Rectangle88.png"
                           />
                           <img
                              className="absolute left-6 -bottom-7 z-0 opacity-35"
                              src="/Images/Mineblue/Rectangle99.png"
                           />
                        </TextPrimary>

                        {/* --------------- NEW COMMENT --------------- */}
                        <div className="text-xl">
                           <TextSecondary className="">
                              Explore our vaults for stable growth options with
                              competitive MINEBLUE Points. Select the ideal
                              vault for your strategy and boost your portfolio
                              today.
                           </TextSecondary>
                        </div>
                        <div className="flex justify-start">
                           <ButtonPrimary className="w-[425px]">
                              LAUNCH TOKEN NOW
                           </ButtonPrimary>
                        </div>
                     </div>

                     <img
                        className="absolute -left-[20%] w-[90%] opacity-55"
                        src="/Images/Mineblue/Rectangle1111.png"
                     />
                  </div>
               </section>
               {/* --------------- NEW COMMENT --------------- */}

               <section
                  id="Purchase-Mineblue-Token"
                  className="py-16"
               >
                  <div className="   overflow-clip relative    flex items-center justify-between">
                     <div className="w-1/2 p-10 space-y-10">
                        <TextPrimary className="text-6xl leading-tight relative">
                           <div className="relative z-10">
                              UNLOCK <br /> MINEBLUE <br /> RERRALS <br />{" "}
                           </div>
                           <img
                              className="absolute right-32 top-24 z-0 opacity-35"
                              src="/Images/Mineblue/Rectangle9.png"
                           />
                        </TextPrimary>

                        {/* --------------- NEW COMMENT --------------- */}
                        <div className="space-y-4">
                           <TextSecondary>
                              Earn up to 12% from all purchases made by the
                              people you refer and even up to 5% the people they
                              refer!
                           </TextSecondary>
                        </div>
                        <div className="flex justify-start">
                           <ButtonPrimary className="w-[425px]">
                              CONNECT WALLET
                           </ButtonPrimary>
                        </div>
                     </div>
                     {/* Background09 */}
                     <div className="w-1/2  relative  flex justify-end">
                        <img
                           className="  z-10"
                           src="/Images/Mineblue/cyberpunk-warrior-portrait.png"
                        />
                        <img
                           className="absolute  right-0 "
                           src="/Images/Mineblue/Background09.png"
                        />
                     </div>
                  </div>
               </section>
               {/* --------------- NEW COMMENT --------------- */}

               <section
                  id="Purchase-Mineblue-Token"
                  className="py-16"
               >
                  {" "}
                  <div className="flex justify-center mb-16  ">
                     <div className="relative   ">
                        <TextPrimary className="relative z-10 text-5xl text-center">
                           FAQ
                        </TextPrimary>
                        <img
                           className="absolute left-3 top-3 z-0 opacity-35"
                           src="/Images/Mineblue/RectangleFAQ.png"
                        />
                     </div>
                  </div>
                  <div className="     relative    flex items-center justify-between">
                     <div className="w-1/2  relative  flex justify-start">
                        <img
                           className="  z-10"
                           src="/Images/Mineblue/cyberpunk-man-warrior-portrait.png"
                        />
                        <img
                           className="absolute  left-0 "
                           src="/Images/Mineblue/Background099.png"
                        />
                     </div>

                     <div className="w-1/2 p-10  space-y-10">
                        <TextPrimary className="text-[80px] leading-tight relative">
                           <div className="relative z-10">
                              UNLOCK <br /> MINEBLUE <br /> RERRALS <br />{" "}
                           </div>
                           <img
                              className="absolute left-10 top-32 z-0 opacity-35"
                              src="/Images/Mineblue/Rectangle8FAQ.png"
                           />
                        </TextPrimary>

                        {/* --------------- NEW COMMENT --------------- */}
                        <div className="text-xl">
                           <TextSecondary className="">
                              Earn up to 12% from all purchases made by the
                              people you refer and even up to 5% the people they
                              refer!
                           </TextSecondary>
                        </div>
                        <div className="flex justify-start">
                           <ButtonPrimary className="w-[425px]">
                              CONNECT WALLET
                           </ButtonPrimary>
                        </div>
                     </div>

                     <img
                        className="absolute -left-[20%] w-[90%] opacity-55"
                        src="/Images/Mineblue/Rectangle1111.png"
                     />
                  </div>
               </section>
            </main>
         </div>
      </div>
   );
}
