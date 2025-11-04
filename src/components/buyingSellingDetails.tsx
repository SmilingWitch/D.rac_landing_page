import DetailsCard from "./detailsCard";



const cards = [
    { src: "/Social Media Activities.svg", header: "Social Network Dynamics", text: "Make friends, follow your favorite talents, collect pictures, and be updated every day" },
    { src: "/Calendar.svg", header: "Wide Range of Events" ,text: "Access all kinds of event tickets. If you're a creator, no matter what you do, you've got a place here." },
    { src: "/Gold Thropy.svg", header: "Reward System", text: "Obtain bonuses for achievements, compete with other friends, create your own hall." },
    { src: "/Hifi.svg", header: "Fan Clubs", text: "reate communities and share with passionate talents. Organize activities and get noticed." },
  ];


export default function BuyingSellingDetails(){

    return(
        <div  className="w-full flex flex-col justify-center bg-[#121314] p-[100]">
            <div className="w-full flex justify-center pb-20 text-[2.5rem]">
                <h2>Buying and Selling Event Tickets Has Never Been So Fun!</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 place-items-center p-20">
                {cards.map((card, index) => (
          <DetailsCard key={index} src={card.src} header = {card.header} text={card.text} />
        ))}

            </div>
            

        </div>
    );
}