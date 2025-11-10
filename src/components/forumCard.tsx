import Image from "next/image";
import image from "../../public/Rectangle 63.svg"
import { IoStar } from "react-icons/io5";

export default function ForumCard(){
    return(
        <div className="relative w-[100vw] flex flex-col justify-center items-center h-[30vh] gap-[40]">
            <span className="text-[1.5rem] w-[50vw] block text-center italic">
                I signed up for the beta and have been receiving exciting updates ever since. 
                What excites me most is the variety of events they offer—much more than other apps! 
                If they deliver on everything they promise, it's going to be a hit.
            </span>
            <div className="flex gap-[30px] items-center  ">
                <div>
                    <Image
                        src = {image}
                        alt = "image"
                        width={100}
                        height={100}
                        className="rounded-[50%] overflow-hidden"
                    ></Image>

                </div>
                <div>
                    <span className="text-[1.2rem]">Oprah Winfrey</span>
                    <div className="flex text-[2rem] text-[#FFFF00] gap-[2] text-[#191919]">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                </div>
            </div>
        </div>
    )
}