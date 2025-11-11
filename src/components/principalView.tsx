
import MyLogo from "../../public/logo.svg";
import Elipse from "../../public/Ellipse 5.svg";
import Elipse1 from "../../public/Ellipse 6.svg";
import Elipse2 from "../../public/Ellipse 7.svg";
import Image from "next/image";

export default function PrincipalView() {

    return(
        <div className="w-full h-screen bg-[#121314] p-[100] flex flex-col justify-center">

            <div>
                 <Image src={Elipse} alt="My logo" width={700} height={700}  className="absolute top-18 right-0 " />
                 <Image src={Elipse1} alt="My logo" width={750} height={750}  className="absolute top-18 right-0 " />
                 <Image src={Elipse2} alt="My logo" width={700} height={700}  className="absolute top-18 left-0 " />
            </div>
        
           
            <Image src={MyLogo} alt="My logo" width={500} height={500} />
            <div className="w-[70%] ">
                <h1 className="text-[3.5rem] font-bold w-[40vw]">
                    The app that will {" "}
                        <span className="text-[#FFFF00]" style={{ fontFamily: 'var(--font-barlow)' }}>
                            change
                        </span> the way you buy, 
                    sell, and experience the {" "}
                    <span className="text-[#FFFF00]" style={{ fontFamily: 'var(--font-barlow)' }}>
                        excitement
                    </span> of your 
                    favorite events
                </h1>
            </div>

            <div className="pt-[20] flex flex-col mt-20">
                <span className="text-[1.5rem]">Be the first to explore!</span>
                <button className="font-bold bg-[#FFFF00] text-black w-[100] rounded-[5] p-[5] mt-5 cursor-pointer">Subscribe</button>
            </div>

        </div>
    );
}