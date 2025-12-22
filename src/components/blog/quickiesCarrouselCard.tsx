import Image from "next/image";
import image from "../../../public/Blog1.svg"

export default function QuickiesCarrouselCard(){
    return(
        <div className="relative w-[30vw] h-[70vh] cursor-pointer overflow-hidden
                        sm:w-[30vw]
                        lg:w-[10vw]">
            <Image
                src={image}
                alt="image"
                fill
                className="object-cover relative"></Image>
        </div>
    )
}