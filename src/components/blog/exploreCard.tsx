import Image from "next/image";
import image from "../../../public/Blog2.svg"
import icon from "../../../public/userIcon.svg"

export default function ExploreCard(){
    return(
        <div className="min-h-[50vh]">
            <div className="relative h-[300px] w-full ">
                <Image src = {image} alt="image" fill
                className="relative object-cover"></Image>
            </div>
            
            <div className="flex flex-col gap-[5px]  p-[10px] relative">
                <div>
                    <span>Comedy</span>
                    <span>2 days ago</span>
                </div>
                <div className="flex flex-col gap-[15px] relative">
                    <span className="relative font-bold
                                            text-[1.5rem]
                                            sm:text-[1.5rem] 
                                            md:text-[1.5rem] 
                                            lg:text-[2rem]">
                            I have a question about the event system
                    </span>
                    <span>Create communities and share with passionate talent what you gotta say. Organize activities and get noticed all over the world...</span>
                    <div className="relative flex gap-[5]  justify-start w-full relative gap-[5px]">
                        <div className="w-[55px] h-[50px] relative p-[1px]">
                            <Image
                                src = {icon}
                                alt = "image"
                                fill
                                className="relative object-cover"

                            ></Image>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">Tyler Jhonson</span>
                            <span className="text-[0.8rem]">Professional Joke</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}