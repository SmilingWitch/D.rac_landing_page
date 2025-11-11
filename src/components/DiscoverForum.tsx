import Image from "next/image";
import blog from "../../public/blogImage.svg"
import ForumCarousel from "./ForumCarousel";


export default function DiscoverForum(){/*#191919*/

    return(
        <div className="pb-[100] w-full min-h-[150vh] flex flex-col justify-center items-start bg-[#121314]">
            <div className="w-[60vh] flex flex-col justify-center p-[20] gap-[20px] pb-[10] ">
                <h2 className="relative w-[200px] text-[2.5rem] shadow-[0_8px_10px_#ffff00] rounded-[30] font-extrabold">D.rac Forum</h2>
                <span className="text-[1.7rem] pb-[20] flex flex-col" >
                    <span className="font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
                        Something to say about the events world?
                    </span>
                    <span style={{ fontFamily: 'var(--font-barlow)' }}>
                        Join our forum and share your opinion on what works,
                        what doesn't, and what audiences really want.
                    </span>
                    
                    
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
                            <li className="font-bold relative pl-6 text-[1.7rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full"
                                style={{ fontFamily: 'var(--font-barlow)' }}>
                                Are you an organizer looking for honest feedback? 
                            </li>
                            <li className=" font-bold relative pl-6 text-[1.7rem] before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full"
                                style={{ fontFamily: 'var(--font-barlow)' }}>
                                An attendee with an experience to share?
                            </li>
                        </ul>

                        <span className="text-[1.5rem] pl-[20] w-[50vh]">
                            This is your space to discuss, propose ideas, 
                            and connect with other industry enthusiasts.
                        </span>

                    </div>
                    <div className="p-[50px] h-[30%] flex flex-col gap-[20] ">
                        <span className="text-[1.2rem] font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
                            Here, your voice matters.
                        </span>
                        <div>
                            <span className="text-[1.7rem] flex flex-col gap-[20]">
                                Join the conversation
                            </span>
                            <button className=" font-bold bg-[#FFFF00] text-black w-[100] rounded-[5] p-[5] mt-5 cursor-pointer">
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