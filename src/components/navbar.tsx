

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
import { IoMenu } from "react-icons/io5";
import { RiTranslate } from "react-icons/ri";
import SubscribeButton from "./subscribeButton";


/*<div className="flex gap-[5] justify-center items-center cursor-pointer">
                    <RiTranslate className="text-[1.2rem]"/>
                    <span className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>EN</span> 
                </div>*/

export default function Navbar(){
    return(
        <div className="w-full flex justify-end">
            <NavigationMenu className="px-6 py-3 w-[100%] relative flex justify-end">
                <NavigationMenuList className=" w-full relative">
                    <NavigationMenuItem>
                        <div className="flex gap-[5] justify-center items-center cursor-pointer">
                            <RiTranslate className="text-[1.2rem]"/>
                            <span className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>EN</span> 
                        </div>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link  href="/" className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>Home</Link>
                        </NavigationMenuLink> 
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href="/blog" className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>Blog</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href="/forum" className="cursor-pointer font-bold text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>Forum</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <SubscribeButton/>
                    </NavigationMenuItem>                    
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}