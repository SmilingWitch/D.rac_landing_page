import Image from "next/image";
import image from "../../../public/Blog2.svg"

export default function QuickiesCard(){

    return(
        <div className="flex flex-col w-[200px] min-h-[200px] p-5 ">
            <div className=" relative w-[200px] h-[150px]">
                <Image
                    src={image}
                    alt="image"
                    fill
                    className="object-cover ">
                </Image>
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold">Gunna reportedly stole a beat used in a Future song</h3>
                <span className="text-[0.8rem]">15 minutes ago</span>
            </div>
            
        </div>
    )
}