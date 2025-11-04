import BlogCard from "./blogCard";

export default function DiscoverBlog(){
    return(
        <div  className="w-full h-[100vh] flex flex-col justify-start items-center bg-[#121314]  ">
                    <div className="w-full flex justify-center text-[2.5rem]">
                        <h2>Discover our Blog!</h2>
                    </div>
                    <div className="pt-3 flex flex-col items-center">
                        <span className="text-[1.5rem]">Are you passionate about events?</span>
                        <span className="text-[1.5rem]">Stay up-to-date with the latest trends, analysis, and industry news.</span>
                    </div>
                    
                    <BlogCard/>
                    
                    
        
                </div>
    )
}