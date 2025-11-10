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
            <div className="flex gap-[30]">
                <span className="text-[1.5rem]">F.A.Q</span>
                <span className="text-[1.5rem]">About us</span>
                <span className="text-[1.5rem]">Blog</span>
                <span className="text-[1.5rem]">Forum</span>
                <span className="text-[1.5rem]">E-mail us</span>
            </div>
            <div className="flex gap-[20] text-[2.5rem] ">
                <div className="text-[#121314] bg-[#BDBBBB] w-15 h-15 rounded-[50%] flex items-center justify-center">
                    <IoLogoInstagram/>
                </div>
                <div className="text-[#121314] bg-[#BDBBBB] w-15 h-15 rounded-[50%] flex items-center justify-center">
                    <FaFacebookF/>
                </div>
                <div className="text-[#121314] bg-[#BDBBBB] w-15 h-15 rounded-[50%] flex items-center justify-center">
                    <FaLinkedinIn/>
                </div>
            </div>
        </div>
    )
}