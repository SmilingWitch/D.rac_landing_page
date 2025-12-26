import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import SubscribeButton from "./subscribeButton";

export default function MobileNavbar(){
    return(
        <div className="md:hidden px-6 py-3 w-[100%] flex justify-between items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <IoMenu className="text-[2rem]"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-[10] bg-background/50 text-foreground border-white/30">
                    <DropdownMenuItem asChild >
                        <Link href = "/" className="hover:bg-white/30">Home</Link>
                    </DropdownMenuItem >
                    
                    <DropdownMenuItem asChild >
                      <Link href = "/blog" className="hover:bg-white/30">Blog</Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem asChild>
                      <Link href = "/forum" className="hover:bg-white/30">Forum</Link>
                    </DropdownMenuItem>                    
                </DropdownMenuContent>
                
            </DropdownMenu>
            <SubscribeButton/>
        </div>
    )
}