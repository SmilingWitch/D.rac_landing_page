import Image from "next/image";
import { GoArrowRight } from "react-icons/go";


export default function BlogCard(){

    return(
        <div className=" flex flex-row w-[70vh] h-[40vh] rounded-[20] border-2 border-white relative overflow-hidden">
            <Image
                src = "/Alicia 2 1.svg"
                alt = "image"
                width = {300}
                height = {200}
                className="bottom-0 left-0"
            
            ></Image>
            <div className="flex flex-col justify-around items-end h-full p-[5]">
                <div className="flex flex-col gap-[5] pr-10">
                    <span className="text-[1.5rem]">Alicia Alonso resurrects</span>
                    <span>On our blog, you'll find relevant information on all kinds of events: from festivals and conferences to product launches and brand experiences. We analyze the market, explore notable occurrences, and tell you what's on everyone's rada</span>
                </div>

                <button className="flex items-center justify-between w-[160] h-[50] pr-10 cursor-pointer">
                    <span>Read More</span>
                    <GoArrowRight className="text-[1.5rem] text-[#FFFF00]"/>
                </button>
                


            </div>
        </div>
    );
}