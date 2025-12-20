import Image from "next/image";
import image from "../../../public/Blog1.svg"

export default function QuickiesCarrouselCard(){
    return(
        <div className="relative w-[200px] h-[70vh] cursor-pointer overflow-hidden bg-red-300">
            <Image
                src={image}
                alt="image"
                fill
                className="object-cover relative"></Image>
        </div>
    )
}