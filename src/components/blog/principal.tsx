"use client";

import Image from "next/image";
import MyLogo from "../../../public/logo.svg";
import image from "../../../public/principalBlog.svg";

export default function Principal() {

  return (
    <div className="w-full relative">
      {/* Background image */}
      <div className="h-[70vh] absolute w-full inset-0">
        <Image src={image} alt="Blog" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-[70vh] pl-[3%] w-full lg:w-[70%] flex flex-col justify-center items-start gap-[10px]">
        <Image src={MyLogo} alt="My logo" width={300} height={300} />

        <h1 className="font-bold w-full text-[2rem] md:text-[2rem] lg:text-[3vw] 2xl:text-[3vw]">
          Blog
        </h1>
      </div>
    </div>
  );
}
