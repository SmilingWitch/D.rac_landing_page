import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RiTranslate } from "react-icons/ri";



export default function Navbar(){
    return(
        <div className="bg-black h-[70px] z-10000 flex justify-between items-center pl-[100px] pr-[100px]">
            <div className="text-[2.5rem] cursor-pointer">
                <IoMenu/>
            </div>
            <div className="flex gap-[25]">
                <div className="flex gap-[5] justify-center items-center cursor-pointer">
                    <RiTranslate className="text-[1.2rem]"/>
                    <span className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>EN</span> 
                </div>
                <Link href="/" className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }} >
                    Home
                </Link>
                <Link href="/blog" className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }} >
                    Blog
                </Link>
                <Link href="/forum" className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>
                    Forum
                </Link>
                <button className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>Subscribe</button>
               
            </div>
        </div>
    )
}