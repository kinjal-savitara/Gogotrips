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
    desc : "We booked a flight from Gogo Trips with the help of Disha.And it was amazing. And the Disha is doing great job. I really like the service. We will definitely go again with Gogo Trips. Thank you so much.",
  },
  {
    id: 2,
    name: "Dhruvil",
    location: "Birmingham, UK",
    video: "/videos/dhruvil.mp4",
    desc : "GoGo Trips made my Ahmedabad–Birmingham flight booking simple, transparent, and within budget. Henish Patel’s support and updates were excellent. I highly recommend them!",
  },
  {
    id: 3,
    name: "Tom Richards",
    location: "Crystal Lake, Illinois, USA",
    video: "/videos/tom.mp4",
    desc: "I’ve used GoGo Trips several times for flights between Dublin, Florida, New York, Chicago, and California.They’ve saved me well over $1,000 with unbeatable service and prices. I highly recommend them — if they were on Trustpilot, I’d give them a 12 out of 10!",
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

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
   
  );

  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoPlayRef = useRef<any>(null)
  const realIndex = selectedIndex % slides.length;

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );


// useEffect(() => {
//   if (!emblaApi) return;

//   const autoplay = setInterval(() => {
//     emblaApi.scrollNext();
//   }, 5000); 

//   return () => clearInterval(autoplay);
// }, [emblaApi]);
useEffect(() => {
  if (!emblaApi) return;

  const video = document.querySelector('video');

  video?.pause();

   autoPlayRef.current = setInterval(() => {
    emblaApi.scrollNext();
  }, 5000);

  return () => {
    clearInterval(autoPlayRef.current);
    video?.play();
  };
}, [emblaApi]);

const autoPlayFn = useCallback((play: boolean) => {
  if (!play) {
    clearInterval(autoPlayRef.current);
  }else{
    autoPlayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 5000); 
  }}, [emblaApi]);

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
                    <TestimonialVideoCard data={i} autoPlayFn={autoPlayFn} />
                    <div className="mt-3 ml-3 absolute p-2">
                      <p className=" text-yellow-400">★★★★☆</p>
                      <p className="text-sm text-black font-light mb-3 leading-relaxed line-clamp-2 overflow-hidden hover:line-clamp-none max-w-md sm:hover:line-clamp-none">
                        {i.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 justify-center relative items-center min-h-3 mt-3">
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
