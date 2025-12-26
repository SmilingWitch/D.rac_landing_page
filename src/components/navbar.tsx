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
import ComputerNavbar from "./computerNavbar";
import MobileNavbar from "./mobileNavBar";


export default function Navbar(){
    const pathname = usePathname()

    return(
        <div className="w-full flex justify-end">
            <ComputerNavbar/>
            <MobileNavbar/>
        </div>
    )
}