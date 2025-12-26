import BuyingSellingDetails from "@/components/buyingSellingDetails";
import DiscoverBlog from "@/components/DicoverBlog";
import DiscoverForum from "@/components/DiscoverForum";
import PilotUser from "@/components/pilotUser";
import PrincipalView from "@/components/principalView";


export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <PrincipalView/>
      <BuyingSellingDetails/>
      <PilotUser/>
      <DiscoverBlog/>
      <DiscoverForum/>
      
    </div>
  );
}
