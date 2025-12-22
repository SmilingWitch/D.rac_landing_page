import { categories } from "@/data/categories";
import CategoryCard from "./categoryCard";


export default function Categories(){
    return(
        <div className="flex flex-col mt-[50px] w-full min-h-50vh">
            <div className="flex items-center justify-center gap-[10] w-[300px] mb-[50px]">
                <h2 className="relative font-bold 
                                text-[2rem]
                                sm:text-[2rem] 
                                md:text-[2rem] 
                                lg:text-[2.5rem]">
                    Categories
                </h2>             
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] justify-items-center">
                {categories.map((e,i) => (
                    <CategoryCard
                    key ={e.id}
                    src={e.imageUrl}
                    name={e.name}
                    text={e.text}
                    number={e.number}
                />
                ) )
                     
                }
               
            </div>
        </div>
    )
}