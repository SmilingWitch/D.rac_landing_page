import Image from "next/image";
import image from "../../public/Rectangle 63.svg"



export default function PilotUser(){
    return(
        <div  className="w-full flex  justify-between bg-[#121314] p-[100] h-[100vh]">
            <div className="p-[30] w-[40%] gap-10 flex flex-col">
                <div className="w-full flex justify-center pb-5 text-[2.5rem]">
                    <h2 className="shadow-[0_8px_10px_#ffff00] rounded-[30] font-extrabold ">
                        Become a pilot user!
                    </h2>
                </div>
                <div>
                    <span className="text-[2rem] pb-5" style={{ fontFamily: 'var(--font-barlow)' }}>
                        Are you passionate about discovering game-changing tools before anyone else?
                    </span>
                </div>
                

                <div className="p-[20] text-[1.5rem] rounded-[20] shadow-[inset_10px_0_0px_rgba(0,0,0,0.5)] shadow-[#FFFF00] ">
                    <span>At D.rac, we're about to revolutionize event tickets market, and we want you to be part of this wave from the start. Now you can become a Pilot User of our app before its official launch.</span>
                </div>

                <div>
                    <span className="text-[2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>Enjoy Exclusive Rewards</span>
                    <ul className="space-y-3">
                        <li className="relative pl-6 text-[1.2rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full">
                          Discounts on event tickets
                        </li>
                        <li className="relative pl-6 text-[1.2rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full">
                          Unlock the Deluxe version of the app with premium features and exclusive content
                        </li>
                        <li className="relative pl-6  text-[1.2rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full">
                          Participate in weekly sweepstakes with amazing prizes ranging from cutting-edge gadgets to unforgettable VIP experiences.
                        </li>
                    </ul>

                </div>

            </div>
                    
        
            <div className="p-20 relative flex items-center justify-start ">
                <div className="absolute w-[400] h-[500] flex flex-col justify-between pl-[20]">
                    <span className="text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>
                        Pilot User spots are limited and will be assigned on a first-come, first-served basis.
                    </span>
                    <div className="flex flex-col gap-[4] items-start">
                        <span className="text-[2rem]">Register now and secure your spot in this select club!</span>
                        <button className="font-bold bg-[#FFFF00] pl-5 pr-5 pt-3 pb-3  text-black rounded-[5] cursor-pointer">Subscribe</button>
                    </div>
                </div>
                <Image src = {image} width = {800} height = {800} alt = "image" ></Image>    
            </div>
                    
        
        </div>
    );
}