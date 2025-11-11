import MyLogo from "../../public/logo.svg";
import Elipse from "../../public/Ellipse 5.svg";
import Elipse1 from "../../public/Ellipse 6.svg";
import Elipse2 from "../../public/Ellipse 7.svg";
import Image from "next/image";

export default function PrincipalView() {
  return (
    <div
      className="
        relative w-full h-[calc(100vh-70px)] bg-[#121314]
        flex flex-col justify-center
        p-[50px] lg:p-[100px] overflow-hidden
      "
    >
      {/* Fondos decorativos */}
      <div aria-hidden>
        <Image
          src={Elipse}
          alt="My logo"
          width={700}
          height={700}
          className="
            absolute top-[0] right-0 z-0
            w-[500px] h-[500px]
            sm:w-[500px] sm:h-[500px]
            md:w-[500px] md:h-[500px]
            lg:w-[700px] lg:h-[700px]
          "
        />
        <Image
          src={Elipse1}
          alt="My logo"
          width={750}
          height={750}
          className="
            absolute top-[0] right-0 z-0
            w-[550px] h-[550px]
            sm:w-[550px] sm:h-[550px]
            md:w-[550px] md:h-[550px]
            lg:w-[750px] lg:h-[750px]
          "
        />
        <Image
          src={Elipse2}
          alt="My logo"
          width={700}
          height={700}
          className="
            absolute top-[0] left-0 z-0
            w-[100px] h-[100px]
            sm:w-[300px] sm:h-[300px]
            md:w-[500px] md:h-[500px]
            lg:w-[700px] lg:h-[700px]
          "
        />
      </div>

      {/* Contenido principal */}
      <div
        className="
          relative z-[9999] h-full
          w-full md:w-full lg:w-[70%]
          flex flex-col justify-center items-start
          gap-[30px]
        "
      >
        <Image src={MyLogo} alt="My logo" width={500} height={500} />
        <h1
          className="
            font-bold w-full
            text-[2rem]
            md:text-[2rem]
            lg:text-[3vw]
            2xl:text-[3vw]
          "
        >
          The app that will{" "}
          <span
            className="text-[#FFFF00]"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            change
          </span>{" "}
          the way you buy, sell, and experience the{" "}
          <span
            className="text-[#FFFF00]"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            excitement
          </span>{" "}
          of your favorite events
        </h1>

        <div className="pt-[20px] flex flex-col">
          <span className="text-[1.5rem]">Be the first to explore!</span>
          <button
            className="
              font-bold bg-[#FFFF00] text-black
              w-[100px] rounded-[5px] p-[5px] mt-5 cursor-pointer
              hover:brightness-95 active:scale-[0.98] transition
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
