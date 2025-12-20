"use client";

import { useEffect, useMemo, useState } from "react";
import type { SearchItem } from "@/data/events";
import { IoIosSearch } from "react-icons/io";

type SearchFilterProps = {
  data: SearchItem[];
  categories: string[];
  onResults: (results: SearchItem[]) => void;
};

export default function SearchFilter({
  data,
  categories,
  onResults,
}: SearchFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredData = useMemo(() => {
    const q = query.toLowerCase().trim();

    return data.filter((item) => {
      const matchText =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(q));

      const matchCategory = category === "All" || item.category === category;

      return matchText && matchCategory;
    });
  }, [data, query, category]);

  // ✅ side effect correcto
  useEffect(() => {
    onResults(filteredData);
  }, [filteredData, onResults]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-3">

        {/* SELECTOR */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-56 rounded-xl bg-[#1A1B1F] text-white px-4 py-3 outline-none border border-white/10 focus:border-white/30"
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* BUSCADOR */}
        <div className="relative w-full">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-xl bg-white text-black px-4 py-3 pl-10 outline-none border border-white/10 focus:border-white/30"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black">
            <IoIosSearch/>
          </span>
        </div>

        
      </div>
    </div>
  );
}
