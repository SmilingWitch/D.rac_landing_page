"use client";

import Image from "next/image";
import MyLogo from "../../../public/logo.svg";
import image from "../../../public/forumPrincipal(1).svg";
import SearchFilter from "../searchFilter";
import { useState } from "react";
import { SEARCH_DATA, CATEGORIES } from "../../data/events";
import type { SearchItem } from "../../data/events";

export default function PrincipalForum(){
    const [results, setResults] = useState<SearchItem[]>(SEARCH_DATA);

    return(
        <div className="w-full relative">
      {/* Background image */}
      <div className="h-[70vh] absolute w-full inset-0">
        <Image src={image} alt="Blog" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-[70vh] pl-[3%] w-full lg:w-[70%] flex flex-col justify-center items-start gap-[10px]">
        <Image src={MyLogo} alt="My logo" width={300} height={300} />

        <h1 className="font-bold w-full text-[2rem] md:text-[2rem] lg:text-[3vw] 2xl:text-[3vw]">
          Forum
        </h1>

        <div className="pt-[20px] flex flex-col">
          <span className="text-[1.5rem] w-[60%]">
            Connect with others, share your ideas, read the latest announcements and find your answers
          </span>
        </div>
        <div>
            <SearchFilter data={SEARCH_DATA} categories={CATEGORIES} onResults={setResults} />
        </div>

        

        {/* ✅ Solo para que veas que results cambia (puedes borrar luego) */}
        {/*<div className="mt-6 text-white/90">
          <div className="text-sm text-white/60">Results: {results.length}</div>
          <ul className="list-disc pl-5">
            {results.map((r) => (
              <li key={r.id}>
                {r.title} <span className="text-white/60">({r.category})</span>
              </li>
            ))}
          </ul>
        </div>*/}
      </div>
    </div>
    )
}