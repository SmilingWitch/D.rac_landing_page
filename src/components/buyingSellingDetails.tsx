import DetailsCard from "./detailsCard";

const cards = [
  { src: "/Social Media Activities.svg", header: "Social Network Dynamics", text: "Make friends, follow your favorite talents, collect pictures, and be updated every day" },
  { src: "/Calendar.svg", header: "Wide Range of Events", text: "Access all kinds of event tickets. If you're a creator, no matter what you do, you've got a place here." },
  { src: "/Gold Thropy.svg", header: "Reward System", text: "Obtain bonuses for achievements, compete with other friends, create your own hall." },
  { src: "/Hifi.svg", header: "Fan Clubs", text: "Create communities and share with passionate talents. Organize activities and get noticed." },
];

export default function BuyingSellingDetails() {
  return (
    <div className="w-full bg-[#121314] py-20 px-4 md:px-10 lg:px-20 min-h-[20vh] flex flex-col items-center ">
      {/* Título */}
      <div className="w-full flex justify-center pb-10 text-center px-2 m-20s">
        <h2 className="font-extrabold text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] shadow-[0_8px_10px_#ffff00] pb-1 rounded-[30px]">
          Buying and Selling Event{" "}
          <span
            className="text-[#FFFF00]"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Tickets{" "}
          </span>
          Has Never Been So{" "}
          <span
            className="text-[#FFFF00]"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Fun!
          </span>
        </h2>
      </div>

      {/* Grid de tarjetas */}
      <div  className=" grid min-h-[300px] relative p-[30] w-[400px] 
                        gap-20
                        grid-cols-1 
                        sm:grid-cols-2 sm:gap-20 sm:w-auto
                        lg:grid-cols-4 
                        gap-12 md:gap-20 
                        lg:gap-9 
                        justify-center
                        items-center">
        {cards.map((card, index) => (
          <DetailsCard
            key={index}
            src={card.src}
            header={card.header}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
