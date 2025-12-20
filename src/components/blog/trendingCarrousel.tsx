
"use client";

import style from "../../../public/styles/BlogCarousel.module.css";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ComponentType, useCallback, useEffect, useRef, useState } from "react";



type TrendingCarrouselProps<T> = {
  items: T[];
  Card: ComponentType<T>;
};


export default function TrendingCarrousel<T>({
  items,
  Card,
}: TrendingCarrouselProps<T>) {
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
          {items.map((e, i) => (
            <div className={style.embla__slide} key={i}>
              <Card {...e} />
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
