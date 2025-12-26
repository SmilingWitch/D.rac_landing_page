"use client"

import style from "../../public/styles/ForumCarousel.module.css"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaOptionsType } from "embla-carousel"
import { useCallback, useEffect, useState } from "react"
import ForumCard from "./forumCard"

const events = [
  { imageUrl: "/images/ballet.jpg", name: "Swan Lake", category: "Dance" },
  { imageUrl: "/images/concierto.jpg", name: "Coldplay Live", category: "Music" },
  { imageUrl: "/images/teatro.jpg", name: "Art Expo", category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg", name: "Swan Lake", category: "Dance" },
  { imageUrl: "/images/concierto.jpg", name: "Coldplay Live", category: "Music" },
  { imageUrl: "/images/teatro.jpg", name: "Art Expo", category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg", name: "Swan Lake", category: "Dance" },
  { imageUrl: "/images/concierto.jpg", name: "Coldplay Live", category: "Music" },
  { imageUrl: "/images/teatro.jpg", name: "Art Expo", category: "Exhibition" },
  { imageUrl: "/images/ballet.jpg", name: "Swan Lake", category: "Dance" },
  { imageUrl: "/images/concierto.jpg", name: "Coldplay Live", category: "Music" },
  { imageUrl: "/images/teatro.jpg", name: "Art Expo", category: "Exhibition" },
]

export default function ForumCarousel() {
  const emblaOptions: EmblaOptionsType = { loop: false, align: "start" }
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)

  // arrows
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  // dots
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const updateUI = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    updateUI()

    emblaApi.on("select", updateUI)
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      updateUI()
    })
  }, [emblaApi, updateUI])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  return (
    <div className={style.home}>
      <div className={style.embla} ref={emblaRef}>
        <div className={style.embla__container}>
          {events.map((e, i) => (
            <div className={style.embla__slide} key={i}>
              <ForumCard />
            </div>
          ))}
        </div>

        {/* DESKTOP: Flechas (md+) */}
        {canScrollPrev && (
          <button
            aria-label="Prev"
            className={`${style.arrow} ${style.arrowLeft} hidden md:flex md:items-center md:justify-center`}
            onClick={scrollPrev}
          >
            ‹
          </button>
        )}

        {canScrollNext && (
          <button
            aria-label="Next"
            className={`${style.arrow} ${style.arrowRight} hidden md:flex md:items-center md:justify-center`}
            onClick={scrollNext}
          >
            ›
          </button>
        )}
      </div>

      {/* MOBILE: Dots (<md) */}
      <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={[
              "h-2 w-2 rounded-full transition-opacity",
              index === selectedIndex ? "bg-white opacity-100" : "bg-white opacity-40",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  )
}
