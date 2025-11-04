
import MyLogo from "../../public/logo.svg";
import Elipse from "../../public/Ellipse 5.svg";
import Elipse1 from "../../public/Ellipse 6.svg";
import Elipse2 from "../../public/Ellipse 7.svg";
import Image from "next/image";

export default function PrincipalView() {

    return(
        <div className="w-full h-screen bg-[#121314] p-[100]">

            <div>
                 <Image src={Elipse} alt="My logo" width={700} height={700}  className="absolute top-0 right-0 " />
                 <Image src={Elipse1} alt="My logo" width={750} height={750}  className="absolute top-0 right-0 " />
                 <Image src={Elipse2} alt="My logo" width={700} height={700}  className="absolute top-0 left-0 " />
            </div>
        
           
            <Image src={MyLogo} alt="My logo" width={500} height={500} />
            <div className="w-[70%] ">
                <span className="text-[3rem]">
                    The app that will {" "}
                        <span className="text-[#FFFF00]">
                            change
                        </span> the way you buy, 
                    sell, and experience the {" "}
                    <span className="text-[#FFFF00]">
                        excitement
                    </span> of your 
                    favorite events
                </span>
            </div>

            <div className="pt-[20] flex flex-col mt-20">
                <span className="text-[1.5rem]">Be the first to explore!</span>
                <button className="bg-[#FFFF00] text-black w-[100] rounded-[5] p-[5] mt-5 cursor-pointer">Subscribe</button>
            </div>

        </div>
    );
}