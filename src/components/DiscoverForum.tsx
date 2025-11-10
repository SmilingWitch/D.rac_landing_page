import Image from "next/image";
import blog from "../../public/blogImage.svg"
import ForumCarousel from "./ForumCarousel";


export default function DiscoverForum(){/*#191919*/

    return(
        <div className="w-full min-h-[200vh] flex flex-col justify-center items-start bg-[#121314]">
            <div className="w-[60vh] flex flex-col justify-center p-[20] gap-[20px] pb-[10] ">
                <h2 className="w-full text-[2.5rem]">D.rac Forum</h2>
                <span className="text-[1.5rem] pb-[20]">
                    Something to say about the events world?
                    Join our forum and share your opinion on what works,
                    what doesn't, and what audiences really want.
                </span>
            </div>
            <div className="relative w-full h-[70vh]">
                <Image
                    src = {blog}
                    alt = "Blog"
                    fill
                    className="object-cover"
                ></Image>
                <div className="absolute flex w-full justify-between items-end h-[100%]">
                    <div className="h-full flex flex-col justify-center items-start gap-[20] p-[20]">
                        <ul className="text-[1.5rem]">
                            <li className="relative pl-6 text-[1.5rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full">
                                Are you an organizer looking for honest feedback? 
                            </li>
                            <li className="relative pl-6 text-[1.5rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full">
                                An attendee with an experience to share?
                            </li>
                        </ul>

                        <span className="text-[1.2rem] pl-[20] w-[50vh]">
                            This is your space to discuss, propose ideas, 
                            and connect with other industry enthusiasts.
                        </span>

                    </div>
                    <div className="p-[50px] h-[30%] flex flex-col gap-[20]">
                        <span className="text-[1.2rem]">
                            Here, your voice matters.
                        </span>
                        <div>
                            <span className="text-[1.5rem] flex flex-col gap-[20]">
                                Join the conversation
                            </span>
                            <button className="bg-[#FFFF00] text-black w-[100] rounded-[5] p-[5] mt-5 cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
            <ForumCarousel/>
            
        </div>
    )
}