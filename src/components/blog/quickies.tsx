"use client"
import { FaArrowRight } from "react-icons/fa";
import TrendingCarrousel from "./trendingCarrousel";
import { events } from "@/data/events1";
import QuickiesCarrouselCard from "./quickiesCarrouselCard";
import QuickiesCard from "./quickiesCard";


export default function Quickies(){
    return(
        <div className="w-full min-h-[20vh] items-start justify-start mt-[50px] mb-[50px]">
            <div className="flex items-center justify-center gap-[10] w-[300px] mb-[50px]">
                <h2 className="relative font-bold 
                                text-[2rem]
                                sm:text-[2rem] 
                                md:text-[2rem] 
                                lg:text-[2.5rem]">
                    Quickies
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
            <div className="flex justify-center">
                <div className="w-[50%]">
                    <TrendingCarrousel
                    items={events}
                    Card={QuickiesCarrouselCard}
                    />

                </div>
                
                <div className="flex flex-col gap-[10px]">
                    <QuickiesCard/>
                    <QuickiesCard/>
                    <QuickiesCard/>
                </div>
            </div>
        </div>
    )
}