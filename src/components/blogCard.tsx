import Image from "next/image";
import { GoArrowRight } from "react-icons/go";


export default function BlogCard(){

    return(
        <div className=" flex flex-row w-[90vw] h-[50vh] rounded-[20] border-2 border-white relative overflow-hidden items-end
                        sm:w-[70vw] sm:h-[50vh]
                        lg:w-[40vw] lg:h-[40vh]
                        xl:w-[40vw] xl:h-[40vh]
                        2xl:w-[30vw] 2xl:h-[30vh]">
            <div className="bottom-0 w-[200px] h-[250px] absolute
                    sm:w-[500px] sm:h-[250px] sm:relative">
                <Image
                src = "/Alicia 2 1.svg"
                alt = "image"
                fill
                className="bottom-0 left-0 relative object-cover"
            
                ></Image>

            </div>
            
            <div className="flex flex-col justify-between items-end h-full p-[5] w-full ">
                <div className="flex flex-col gap-[5]  justify-center w-full relative">
                    <span className="text-[1.5rem] ">Alicia Alonso resurrects</span>
                    <span className="w-full p-[7]">On our blog, you'll find relevant information on all kinds of events: from festivals and conferences to product launches and brand experiences. We analyze the market, explore notable occurrences, and tell you what's on everyone's rada</span>
                </div>

                <button className="flex items-center justify-between w-[130] h-[50] pr-5 cursor-pointer">
                    <span>Read More</span>
                    <GoArrowRight className="text-[1.5rem] text-[#FFFF00]"/>
                </button>
                


            </div>
        </div>
    );
}