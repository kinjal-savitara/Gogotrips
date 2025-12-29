"use client";

import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import styles from "./hero-slider.module.css";
import { Button } from "../ui/button";

const TWEEN_FACTOR_BASE = 0.5;

type BlackFridayCardProps = {
  src: string
  alt?: string
}

const BlackFridayCard: React.FC<BlackFridayCardProps> = ({ src, alt = "Black Friday" }) => {
  return (
   <div className="relative w-full h-full">
  <Image
    src={src}
    alt={alt}
    fill
    priority
    className="object-contain"
  />
  
  <Button data-slot="button" className="absolute bottom-4 left-[45%] -translate-x-1/2 inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer font-medium rounded-standard transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0  outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-project-white border border-project-white text-primary shadow-[0px_4px_6.9px_-2px_#E22371,0px_4px_8.9px_0px_#254165CC_inset] h-10 has-[&gt;svg]:px-3 px-4 py-3 text-xl" type="submit">Quote Now</Button>
</div>

  )
}
const images = [
  '/images/hero1.png',
  '/images/hero2.png',
  '/images/hero3.png',
  '/images/hero4.png'
]

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface HeroSliderProps {
  className?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ className }) => {
  const options: EmblaOptionsType = { align: "center", loop: true };
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 5000 })]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `scale(${scale})`;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <section className={styles.embla + ` ${className}`}>
      <div ref={emblaRef} className={styles.embla__viewport}>
        <div className={styles.embla__container}>
          {images.map((img,index) => (
            <div className={styles.embla__slide} key={index}>
              <div className="embla__slide__number h-full">
                 <BlackFridayCard key={index} src={img}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
