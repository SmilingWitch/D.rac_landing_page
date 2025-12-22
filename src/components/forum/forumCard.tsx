import Image from "next/image";
import icon from "../../../public/userIcon.svg"
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";

export default function CardForum(){
    return(
        <div className="flex flex-col w-[90%] min-h-[300px] gap-[10px] justify-around border-2 border-solid border-white rounded-[20px] p-[20px]
                        sm:w-[400px]
                        lg:w-[400px]">
            <div className="flex gap-[5]  justify-start w-full relative gap-[5px]">
                <div className="w-[45px] h-[40px] relative p-[1px]">
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
           <div>
                <h3 className="text-[1.5rem] font-bold">I have a question about the event system</h3>
                <span>Create communities and share with passionate talents. Organize activities and get noticed...</span>
           </div>
           <div className="flex gap-[20px]">
                <div className="flex gap-[5px] items-center justify-center">
                    <BiSolidLike className="text-[#ffff00]"/>
                    <span>538</span>
                </div>
                <div className="flex gap-[5px] items-center justify-center">
                    <FaComment className="text-[#ffff00]"/>
                    <span>53</span>
                </div>

           </div>
           <div>
                <span className="text-[0.8rem]">posted in 
                    <span> </span>
                    <span className="font-bold">Community Announcements</span>
                </span>
           </div>
        </div>
    )
}