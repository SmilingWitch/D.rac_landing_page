import BlogCard from "./blogCard";
import BlogCarousel from "./BlogCarousel";

export default function DiscoverBlog(){
    return(
        <div  className="w-full h-[100vh] flex flex-col justify-start items-center bg-[#121314]">
                    <div className="w-full flex justify-center text-[2.5rem]">
                        <h2 className="shadow-[0_8px_10px_#ffff00] rounded-[30] font-extrabold mb-[10] ">Discover our Blog!</h2>
                    </div>
                    <div className="pt-3 flex flex-col items-center">
                        <span className="text-[1.5rem]">Are you passionate about events?</span>
                        <span className="text-[1.5rem]">Stay up-to-date with the latest trends, analysis, and industry news.</span>
                    </div>
                    
                    <BlogCarousel/>

                    <div className="text-[1.5rem] w-[70%]">
                        <span>On our blog, you'll find relevant information on all kinds of events: from festivals and conferences to product launches and brand experiences. We analyze the market, explore notable occurrences, and tell you what's on everyone's radar</span>
                    </div>

                    <div className="w-full p-[50px] flex flex-col justify-center items-center mt-[20]">
                        <span className=" text-[1.2rem] font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
                            Interested in learning more?
                        </span>

                        <div className=" pt-[20px] flex flex-col justify-center items-center">
                            <h2 className=" text-[1.7rem] ">
                                Discover our articles
                            </h2>
                            <button className="font-bold rounded-[5] border-3 border-[#FFFF00] pl-[35] pr-[35] pt-[5] pb-[5] mt-[10]">Blog</button>
                        </div>
                    </div>
                    
                    
        
                </div>
    )
}