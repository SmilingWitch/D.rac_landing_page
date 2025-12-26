import Image from "next/image"
import logo from "../../public/logo.svg"
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


export default function SocialMedia(){
    return(
        <div className="bg-[#191919] h-[40vh] w-full flex flex-col justify-center items-center gap-[30]">
            <Image
                src = {logo}
                alt = "logo"
                width={100}
                height={100}
            ></Image>
            <div className="flex gap-[20px] text-[1rem]
                            lg:text-[1.2rem]
                            xl:text-[1.5rem] xl:gap-[30px]">
                <span className="cursor-pointer hover:text-[#ffff00]">F.A.Q</span>
                <span className="cursor-pointer hover:text-[#ffff00]">About us</span>
                <span className="cursor-pointer hover:text-[#ffff00]">Blog</span>
                <span className="cursor-pointer hover:text-[#ffff00]">Forum</span>
                <span className="cursor-pointer hover:text-[#ffff00]">E-mail us</span>
            </div>
            <div className="flex gap-[20] text-[2.5rem]">
                <div className="cursor-pointer text-[#121314] bg-[#BDBBBB] w-10 h-10 rounded-[50%] flex items-center justify-center 
                                sm:w-10 sm:h-10 
                                lg:w-15 lg:h-15">
                    <IoLogoInstagram className="text-[1.8rem]
                                    sm:text-[2rem]
                                    lg:text-[2.5rem]"/>
                </div>
                <div className="cursor-pointer text-[#121314] bg-[#BDBBBB] w-10 h-10 rounded-[50%] flex items-center justify-center
                                sm:w-10 sm:h-10 
                                lg:w-15 lg:h-15">
                    <FaFacebookF className="text-[1.8rem]  
                                    sm:text-[2rem]
                                    lg:text-[2.5rem]"/>
                </div>
                <div className="cursor-pointer text-[#121314] bg-[#BDBBBB] w-10 h-10 rounded-[50%] flex items-center justify-center
                                sm:w-10 sm:h-10 
                                lg:w-15 lg:h-15">
                    <FaLinkedinIn className="text-[1.8rem]
                                    sm:text-[2rem]
                                    lg:text-[2.5rem]"/>
                </div>
            </div>
            <span className="pt-[20px] text-[#BDBBBB] text-[0.8em] 
                                sm:text-[1em]
                                lg:text-[1.2em]">Copyright 2025</span>
        </div>
    )
}