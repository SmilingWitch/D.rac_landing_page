import Explore from "@/components/blog/explore";
import Principal from "@/components/blog/principal";
import Quickies from "@/components/blog/quickies";
import Trending from "@/components/blog/trending";


export default function Blog() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <Principal/>
      <Trending/>
      <Quickies/>
      <Explore/>
      
    </div>
  );
}
