import Image from "next/image";
import DetailsCardProps from "./types/types";


export default function DetailsCard({ src,header, text }: DetailsCardProps){
    return(
        <div className="relative h-[17vh] flex flex-col justify-between 
                        h-[250]
                        2xl:h-[200]
                        ">
            <div>
                <h3 className="text-[white] text-[2rem]">{header}</h3>
                <span className="text-[white] top-[5]">{text}</span>
            </div>
            <div className="mt-5">
                <div className="bg-[#FFFF00] w-full h-[40] rounded-[20]">
                    <Image 
                        src = {src} 
                        width={150} 
                        height={150} 
                        alt = "image"
                        className=" absolute bottom-[-80] right-[30]
                                    sm:bottm-[-80]
                                    lg:bottom-[-80]"
                        >
                            
                        </Image>
                </div>
                
                    
            </div>
            
        </div>
    );
}