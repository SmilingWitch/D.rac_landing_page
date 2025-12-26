import Categories from "@/components/forum/categories";
import LatestTopic from "@/components/forum/latestTopics";
import PrincipalForum from "@/components/forum/principal";
import TopVoted from "@/components/forum/topVoted";


export default function Forum() {
  return (
    <div className="relative flex flex-col min-h-screen items-start justify-start bg-zinc-50 font-sans dark:bg-black">
      <PrincipalForum/>
      <TopVoted/>
      <Categories/>
      <LatestTopic/>
    </div>
  );
}
