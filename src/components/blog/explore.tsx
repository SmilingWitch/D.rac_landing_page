import { FaArrowRight } from "react-icons/fa";
import CarrouselCard from "./carrouselCard";
import ExploreCard from "./exploreCard";


const events = [
  { imageUrl: "/images/ballet.jpg",   name: "1",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "2",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "3",       category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg",   name: "4",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "5",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "6",       category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg",   name: "7",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "8",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "9",       category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg",   name: "10",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "11",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "12",       category: "Exhibition" }
  // 👉 agrega más si quieres
];

export default function Explore(){
    return(
        <div className="w-full min-h-[20vh] items-start justify-start mt-[50px] mb-[50px]">
            <div className="flex items-center justify-center gap-[10] w-[300px] mb-[50px]">
                            <h2 className="relative font-bold 
                                            text-[2rem]
                                            sm:text-[2rem] 
                                            md:text-[2rem] 
                                            lg:text-[2.5rem]">
                                Explore
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 px-[70px]">
                {events.map((item) => (
                  <ExploreCard key={item.name} /*data={item}*/ />
                ))}
            </div>


        </div>
    )
}