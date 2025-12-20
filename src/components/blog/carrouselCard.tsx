"use client"
import Image from "next/image";
import image from "../../../public/Blog1.svg"
import icon from "../../../public/userIcon.svg"


export default function CarrouselCard(){

    return(
        <div className=" flex flex-row w-[60vw] h-[50vh] rounded-[20] relative overflow-hidden items-end
                        sm:w-[40vw] sm:h-[50vh]
                        lg:w-[40vw] lg:h-[40vh]
                        xl:w-[30vw] xl:h-[40vh]
                        2xl:w-[30vw] 2xl:h-[30vh]">
            <div className=" w-full h-[100%] relative">
                <Image
                src = {image}
                alt = "image"
                fill
                className="relative object-cover"
            
                ></Image>

            </div>
            
            <div className="flex flex-col justify-between items-end h-full p-[15px] w-full absolute pb-[50px]">
                <div className="bg-gray-600 rounded-[5px] px-[15px] py-[3px] flex justify-center items-center">
                    <span className="text-[0.8rem]">label</span>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex gap-[5]  justify-start w-full relative gap-[5px]">
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
                            <span className="text-[0.8rem]">2 days ago</span>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <h2 className="relative font-bold
                                    text-[1.5rem]
                                    sm:text-[1.5rem] 
                                    md:text-[1.5rem] 
                                    lg:text-[2rem]">
                            I have a question about the event system
                        </h2>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}