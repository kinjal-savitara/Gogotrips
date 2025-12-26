"use client";

import { cn } from "@/lib/utils";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ComponentPropsWithRef, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/testimonials.module.css";
import TestimonialVideoCard from "./TestimonialVideoCard";

const slides = [
  {
    id: 1,
    name: "Khushboo",
    location: "New York, USA",
    video: "/videos/khusboo.mp4",
  },
  {
    id: 2,
    name: "Dhruvil",
    location: "Birmingham, UK",
    video: "/videos/dhruvil.mp4",
  },
  {
    id: 3,
    name: "Tom Richards",
    location: "Crystal Lake, Illinois, USA",
    video: "/videos/tom.mp4",
  },
];
const TWEEN_FACTOR_BASE = 0.3;

const doubleSlides = [...slides, ...slides].map((s, idx) => ({
  ...s,
  id: idx + 1, // unique id for React
}));

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = ComponentPropsWithRef<"button">;

const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const realIndex = selectedIndex % slides.length;

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );
useEffect(() => {
  if (!emblaApi) return;

  const autoplay = setInterval(() => {
    emblaApi.scrollNext();
  }, 3000); // speed (ms)

  return () => clearInterval(autoplay);
}, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTimeout(() => onSelect(emblaApi), 0);

    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

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
        tweenNode.style.transform = `scale(${scale})`;
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
    <section className="w-full md:pt-12.5 pt-7.5 pb-7.5 ">
      {/* Heading */}
      <h2 className="text-center text-[15px] md:text-base lg:text-xl font-bold text-primary mb-2.5">
        TESTIMONIALS
      </h2>

      <div className="container-inner px-0">
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {doubleSlides.map((i) => (
                <div className={styles.embla__slide} key={i.id}>
                  <div className="embla__slide__number">
                    <TestimonialVideoCard data={i} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 justify-center relative items-center min-h-3">
        {slides.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "rounded-full transition-all",
              index === realIndex ? "size-3 bg-[#CFCFCF]" : "bg-[#E5E5E5] size-2"
            )}
          ></DotButton>
        ))}
      </div>
    </section>
  );
}
