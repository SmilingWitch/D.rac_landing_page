import Image from "next/image";
import image from "../../public/Rectangle 63.svg"
import { IoStar } from "react-icons/io5";

export default function ForumCard(){
    return(
        <div className="relative w-[100vw] flex flex-col justify-center items-center min-h-[30vh] gap-[40]">
            <span className="text-[1] w-[50vw] block text-center italic
                                sm:text-[1rem]
                                lg:text-[1.2rem]
                                xl:text-[1.5rem]  ">
                I signed up for the beta and have been receiving exciting updates ever since. 
                What excites me most is the variety of events they offer—much more than other apps! 
                If they deliver on everything they promise, it's going to be a hit.
            </span>
            <div className="flex gap-[30px] items-center">
                <div className="relative w-[70px] h-[70px] rounded-[50%] overflow-hidden
                                sm:w-[70px] sm:h-[70px]
                                xl:w-[100px] xl:h-[100px] ">
                    <Image
                        src = {image}
                        alt = "image"
                        fill
                        className="object-cover"
                    ></Image>

                </div>
                <div>
                    <span className="text-[1rem]
                                    sm:text-[1rem]
                                    lg:text-[1.2rem]">Oprah Winfrey</span>
                    <div className="flex text-[1.5rem] text-[#FFFF00] gap-[2] text-[#191919]
                                    sm:text-[1.5rem]
                                    lg:text-[1.8rem]
                                    xl:text-[2rem]">
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