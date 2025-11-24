import Image from "next/image";
import image from "../../public/Rectangle 63.svg"



export default function PilotUser(){
    return(
        <div  className="w-full flex flex-col justify-between bg-[#121314] p-[20] min-h-[100vh]
        md:p-[50]
        2xl:p-[100]">
            <div className="w-full flex justify-start pb-5 text-[2.5rem]">
                <h2 className="font-extrabold text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] shadow-[0_8px_10px_#ffff00] pb-1 rounded-[30px] ">
                    Become a pilot user!
                </h2>
            </div>
            <div className="w-full flex flex-col 
                            sm:flex-col sm:items-center
                            md:flex-col md:items-center 
                            lg:flex-col lg:items-center
                            xl:flex-row
                            2xl:flex-row xl:items-start 
                            4xl:flex-row xl:items-start 
                            ">
                    
                <div className="p-[5] w-[100%] gap-10 flex flex-col
                                sm:p-[5]
                                md:p-[10]
                                lg:w-[100%]
                                xl:w-[40%]
                                2xl:w-[40%] 2xl:p-[30] ">

                    <div>
                        <span className="text-[1.5rem] pb-5
                                            sm:text-[1.5rem]
                                            md:text-[1.5rem]
                                            lg:text-[1.8rem]
                                            xl:text-[1.8rem]
                                            2xl:text-[2rem]" 
                                            style={{ fontFamily: 'var(--font-barlow)' }}>
                            Are you passionate about discovering game-changing tools before anyone else?
                        </span>
                    </div>


                    <div className="p-[20] text-[1.2rem] rounded-[20] shadow-[inset_10px_0_0px_rgba(0,0,0,0.5)] shadow-[#FFFF00] 
                                    sm:text-[1.2rem]
                                    md:text-[1.5rem]
                                    lg:text-[1.5rem]
                                    xl:text-[1.5rem]
                                    2xl:text-[2rem]
                                    ">
                        <span>At D.rac, we're about to revolutionize event tickets market, and we want you to be part of this wave from the start. Now you can become a Pilot User of our app before its official launch.</span>
                    </div>

                    <div>
                        <span className="text-[1.2rem]
                                            sm:text-[1.2rem]
                                            md:text-[1.5rem]
                                            lg:text-[1.5rem]
                                            xl:text-[1.5rem]
                                            2xl:text-[2rem]
                                        " 
                                style={{ fontFamily: 'var(--font-barlow)' }}>
                            Enjoy Exclusive Rewards
                        </span>
                        <ul className="space-y-3">
                            <li className="relative pl-6 text-[1rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full
                                            md:text-[1rem]
                                            lg:text-[1.2rem]
                                            xl:text-[1.2rem]
                                            2xl:text-[1.2rem]">
                              Discounts on event tickets
                            </li>
                            <li className="relative pl-6 text-[1rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full
                                             md:text-[1rem]
                                            lg:text-[1.2rem]
                                            xl:text-[1.2rem]
                                            2xl:text-[1.2rem]">
                              Unlock the Deluxe version of the app with premium features and exclusive content
                            </li>
                            <li className="relative pl-6  text-[1rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full
                                             md:text-[1rem]
                                            lg:text-[1.2rem]
                                            xl:text-[1.2rem]
                                            2xl:text-[1.2rem]">
                              Participate in weekly sweepstakes with amazing prizes ranging from cutting-edge gadgets to unforgettable VIP experiences.
                            </li>
                        </ul>

                    </div>

                </div>
                    
        
                <div className="p-0 relative flex items-center justify-start mt-20 mb-20 
                                lg:p-20
                                xl:p-20
                                2xl:p-20 ">
                    <div className="absolute w-[400] h-[350] flex flex-col justify-between pl-[20] z-[1000000000]">
                        <span className="   text-[1rem]
                                            md:text-[1rem]
                                            lg:text-[1.2rem] 
                                            xl:text-[1.2rem] xl:w-[400] xl:h-[500]
                                            2xl:text-[1.2rem] 2xl:w-[400] 2xl:h-[500]" 
                                            style={{ fontFamily: 'var(--font-barlow)' }}>
                            Pilot User spots are limited and will be assigned on a first-come, first-served basis.
                        </span>
                        <div className="flex flex-col gap-[4] items-start">
                            <span className="text-[1.22rem]
                                            sm:text-[1.2rem]
                                            md:text-[1.5rem]
                                            lg:text-[1.5rem]
                                            xl:text-[1.5rem]
                                            2xl:text-[2rem]
                            ">
                                Register now and secure your spot in this select club!
                            </span>
                            <button className="font-bold bg-[#FFFF00] pl-5 pr-5 pt-3 pb-3  text-black rounded-[5] cursor-pointer">Subscribe</button>
                        </div>
                    </div>
                    <div className="relative w-[90vw] h-[40vh] z-[1] bg-blue-500 
                                    lg:w-[90vw] lg:h-[50vh]
                                    xl:w-[40vw] xl:h-[50vh]
                                    2xl:w-[40vw] 2xl:h-[50vh] ">
                        <Image  src = {image} fill
                                className="object-cover" 
                                alt = "image" ></Image>
                    </div>
                        
                </div>

            </div>
                    
        
        </div>
    );
}