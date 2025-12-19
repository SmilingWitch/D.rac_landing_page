import Image from "next/image";
import blog from "../../public/blogImage.svg"
import ForumCarousel from "./ForumCarousel";


export default function DiscoverForum(){/*#191919*/

    return(
        <div className="pb-[100] w-full min-h-[150vh] flex flex-col justify-center items-start bg-[#121314]">
            <div className="w-[60vh] flex flex-col justify-center p-[20] gap-[20px] pb-[10] ">
                <h2 className="relative w-[200px] shadow-[0_8px_10px_#ffff00] rounded-[30] font-extrabold 
                                text-[2rem]
                                sm:text-[2rem] 
                                md:text-[2rem] 
                                lg:text-[2.5rem]">
                    D.rac Forum
                </h2>
                <span className="text-[1.2rem] pb-[20] flex flex-col w-[90vw]
                                    sm:text-[1.5rem]
                                    md:text-[1.5rem]
                                    lg:text-[1.5rem]
                                    xl:text-[1.7rem]
                                    2xl:text-[1.7rem] " >
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
                <div className="absolute flex w-[100vw] justify-between items-end h-[100%]  flex-col w-[90vw]">
                    <div className="min-h-[200px] relative top-0  flex flex-col justify-center items-start gap-[20] p-[5px] right-20
                                        lg:p-[20px] w-[90vw]">
                        <ul className="text-[1.2rem] w-full ml-10
                                        sm:text-[1.2rem]
                                        md:text-[1.2rem]
                                        lg:text-[1.2rem]
                                        xl:text-[1.5rem]
                                        2xl:text-[1.7rem]">
                            <li className="font-bold relative  pl-6  before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full"
                                style={{ fontFamily: 'var(--font-barlow)' }}>
                                Are you an organizer looking for honest feedback? 
                            </li>
                            <li className=" font-bold relative pl-6  before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-1.5 before:bg-[#FFFF00] before:rounded-l-full"
                                style={{ fontFamily: 'var(--font-barlow)' }}>
                                An attendee with an experience to share?
                            </li>
                        </ul>

                        <span className=" relative text-[1.2rem]  w-full ml-10
                                        sm:text-[1.2rem]
                                        md:text-[1.2rem]
                                        lg:text-[1.2rem]
                                        xl:text-[1.5rem]
                                        2xl:text-[1.5rem]">
                            This is your space to discuss, propose ideas, 
                            and connect with other industry enthusiasts.
                        </span>

                    </div>
                    <div className="p-[20px] h-[30%] flex flex-col gap-[20] w-[300px] right-0 relative 
                                    lg:p-[50px]">
                        <span className="   text-[1rem] font-bold
                                            sm:text-[1rem]
                                            md:text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>
                            Here, your voice matters.
                        </span>
                        <div>
                            <span className="text-[1.2rem] flex flex-col gap-[20]
                                        sm:text-[1.2rem]
                                        md:text-[1.2rem]
                                        lg:text-[1.5rem]
                                        xl:text-[1.7rem]">
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