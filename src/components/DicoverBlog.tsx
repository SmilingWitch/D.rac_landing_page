import Link from "next/link";
import BlogCarousel from "./BlogCarousel";

export default function DiscoverBlog(){
    return(
        <div  className="w-full min-h-[100vh] flex flex-col justify-start items-center bg-[#121314]">
                    <div className="w-full flex justify-center text-[2.5rem]">
                        <h2 className="font-extrabold text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] shadow-[0_8px_10px_#ffff00] pb-1 rounded-[30px] mb-[10] ">Discover our Blog!</h2>
                    </div>
                    <div className="pt-3 flex flex-col items-center justify-center text-[1.2rem]
                                    sm:text-[1.2rem]
                                    2xl:text-[1.5rem]
                                    ">
                        <span >Are you passionate about events?</span>
                        <span >Stay up-to-date with the latest trends, analysis, and industry news.</span>
                    </div>
                    
                    <BlogCarousel/>

                    <div className="text-[1.2rem] w-[70%]
                                    sm:text-[1.2rem]
                                    2xl:text-[1.5rem]">
                        <span>On our blog, you'll find relevant information on all kinds of events: from festivals and conferences to product launches and brand experiences. We analyze the market, explore notable occurrences, and tell you what's on everyone's radar</span>
                    </div>

                    <div className="w-full p-[50px] flex flex-col justify-center items-center mt-[20]">
                        <span className=" text-[1rem] font-bold
                                            sm:text-[1rem]
                                            2xl:text-[1.2rem]" style={{ fontFamily: 'var(--font-barlow)' }}>
                            Interested in learning more?
                        </span>

                        <div className=" pt-[20px] flex flex-col justify-center items-center">
                            <h2 className=" text-[1.2rem] 
                                            sm:text-[1.5rem]
                                            2xl:text-[1.7rem]">
                                Discover our articles
                            </h2>
                            <Link href="/blog">
                                <button className="cursor-pointer font-bold rounded-[5] border-3 border-[#FFFF00] pl-[35] pr-[35] pt-[5] pb-[5] mt-[10]">Blog</button>
                            </Link>
                            
                        </div>
                    </div>
                    
                    
        
                </div>
    )
}