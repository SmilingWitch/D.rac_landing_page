import BuyingSellingDetails from "@/components/buyingSellingDetails";
import DiscoverBlog from "@/components/DicoverBlog";
import DiscoverForum from "@/components/DiscoverForum";
import PilotUser from "@/components/pilotUser";
import PrincipalView from "@/components/principalView";
import SocialMedia from "@/components/socialMedia";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <PrincipalView/>
      <BuyingSellingDetails/>
      <PilotUser/>
      <DiscoverBlog/>
      <DiscoverForum/>
      <SocialMedia/>
    </div>
  );
}
