"use client"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { RiTranslate } from "react-icons/ri";
import SubscribeButton from "./subscribeButton";

export default function ComputerNavbar(){
    const pathname = usePathname()

    return(
        <NavigationMenu className="hidden md:flex px-6 py-3 w-[100%] relative justify-end">
                <NavigationMenuList className=" w-full relative">
                    <NavigationMenuItem>
                        <div className="flex gap-[5] justify-center items-center cursor-pointer">
                            <RiTranslate className="text-[1.2rem]"/>
                            <span className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>EN</span> 
                        </div>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link  href="/" 
                            className={`cursor-pointer font-bold text-[1.2rem]
                                        ${pathname === "/" ? "text-[#ffff00]" : "text-white hover:text-[#ffff00]"}`} style={{ fontFamily: 'var(--font-barlow)' }}>Home</Link>
                        </NavigationMenuLink> 
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/blog" className={`cursor-pointer font-bold text-[1.2rem]
                                        ${pathname === "/blog" ? "text-[#ffff00]" : "text-white hover:text-[#ffff00]"}`} style={{ fontFamily: 'var(--font-barlow)' }}>Blog</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/forum" className={`cursor-pointer font-bold text-[1.2rem]
                                        ${pathname === "/forum" ? "text-[#ffff00]" : "text-white hover:text-[#ffff00]"}`} style={{ fontFamily: 'var(--font-barlow)' }}>Forum</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <SubscribeButton/>
                    </NavigationMenuItem>                    
                </NavigationMenuList>
            </NavigationMenu>
    )
}