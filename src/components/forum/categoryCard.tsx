import Image from "next/image";
import { CategoryCardProps } from "../types/types";


 export default function CategoryCard({
  src,
  name,
  text,
  number
}:CategoryCardProps){
    return(
        <div className="w-[170px] min-h-[300px] flex flex-col gap-[10px] justify-between items-center p-[20px]
                        sm:w-[200px]
                        lg:w-[300px]">
            <div className="relative w-[120px] h-[120px]
                            sm:w-[120px] sm:h-[120px]
                            lg:w-[150px] lg:h-[150px]">
                <Image
                    alt="image"
                    src={src}
                    fill
                    className="relativeobject-cover"></Image>
            </div>
            <div className="flex h-[165px] flex-col gap-[10px] justify-between items-center text-center">
                <h3 className="font-bold text-[1.5rem] w-[100%]
                                sm:w-[100%]
                                lg:w-[50%]">{name}</h3>
                <span className="w-[100%] text-[#9F9F9F]
                                sm:w-[100%]
                                lg:w-[70%] ">{text}</span>
                <div className="flex gap-[10px] text-[0.8rem] pb-[5px] text-[#9F9F9F] border-b-4 border-white justify-between">
                    <span>{number}</span>
                    <span>posts</span>
                </div>
                
            </div>
        </div>
    )
}