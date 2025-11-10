"use client";

import style from "../../public/styles/ForumCarousel.module.css";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import BlogCard from "./blogCard";
import ForumCard from "./forumCard";

const events = [
  { imageUrl: "/images/ballet.jpg",   name: "Swan Lake",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "Coldplay Live",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "Art Expo",       category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg",   name: "Swan Lake",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "Coldplay Live",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "Art Expo",       category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg",   name: "Swan Lake",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "Coldplay Live",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "Art Expo",       category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg",   name: "Swan Lake",      category: "Dance" },
  { imageUrl: "/images/concierto.jpg",name: "Coldplay Live",  category: "Music" },
  { imageUrl: "/images/teatro.jpg",   name: "Art Expo",       category: "Exhibition" }
  // 👉 agrega más si quieres
];

export default function ForumCarousel() {
  const emblaOptions: EmblaOptionsType = { loop: false, align: "start" };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);


  // Estados para saber si se puede hacer scroll
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Actualiza las flechas según la posición
  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Conecta los eventos de Embla
  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className={style.home}>
      <div className={style.embla} ref={emblaRef}>
        <div className={style.embla__container}>
          {events.map((e, i) => (
            <div className={style.embla__slide} key={i}>
              <ForumCard/>
            </div>
          ))}
        </div>

        {/* Flechas */}
        {/* Flechas — solo se muestran si se puede navegar */}
        {canScrollPrev && (
          <button
            aria-label="Prev"
            className={`${style.arrow} ${style.arrowLeft}`}
            onClick={scrollPrev}
          >
            ‹
          </button>
        )}
        {canScrollNext && (
          <button
            aria-label="Next"
            className={`${style.arrow} ${style.arrowRight}`}
            onClick={scrollNext}
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
