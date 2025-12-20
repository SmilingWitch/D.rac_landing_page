import { FaArrowRight } from "react-icons/fa";
import TrendingCarrousel from "./trendingCarrousel";
import CarrouselCard from "./carrouselCard";
import { events } from "@/data/events1";



export default function Trending(){
    return(
        <div className="w-full min-h-[20vh] items-start justify-start mt-[50px]">
            <div className="flex items-center justify-center gap-[10] w-[300px]">
                <h2 className="relative font-bold
                                text-[2rem]
                                sm:text-[2rem] 
                                md:text-[2rem] 
                                lg:text-[2.5rem]">
                    Trending
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
            <div>
                <TrendingCarrousel
                    items={events}
                    Card={CarrouselCard}
                />
            </div>
            
        </div>
    )
}