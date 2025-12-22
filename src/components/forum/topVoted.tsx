import { FaArrowRight } from "react-icons/fa";
import CardForum from "./forumCard";


export default function TopVoted(){
    return(
        <div className="flex flex-col mt-[50px] w-full min-h-50vh">
            <div className="flex items-center justify-center gap-[10] w-[300px] mb-[50px]">
                <h2 className="relative font-bold 
                                text-[2rem]
                                sm:text-[2rem] 
                                md:text-[2rem] 
                                lg:text-[2.5rem]">
                    Top Voted
                </h2>
                <div className="text-[1rem]
                                sm:text-[1rem] 
                                md:text-[1rem] 
                                lg:text-[1.5rem]
                                text-[#ffff00]
                                mt-[10]">
                    <FaArrowRight/>
                </div>
            </div>

            <div className="relative flex flex-col gap-[20px] justify-center items-center w-full px-[50px]
                            sm:flex-col
                            lg:flex-row">
                <CardForum/>
                <CardForum/>
                <CardForum/>
            </div>
        </div>
    )
}