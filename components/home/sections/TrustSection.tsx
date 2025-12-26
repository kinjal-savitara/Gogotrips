"use client";

import { cn } from "@/lib/utils";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ComponentPropsWithRef, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/trust-slider.module.css";

const slides = [
  {
    id: 1,
    title: "Offices in USA & India",
    description:
      "On-ground teams in both countries for reliable, real-time assistance from booking to boarding.",
    image: "/images/office.jpg",
  },
  {
    id: 2,
    title: "Trusted USA–India Travel Experts",
    description:
      "We help Indian families, students, and professionals with personalized care — from finding the best fares to seamless booking.",
    image: "/images/flight-booking.jpg",
  },
  {
    id: 3,
    title: "Unbeatable USA → India Fares from $999*",
    description:
      "We specialize in long-haul routes with exclusive, unpublished round-trip deals you won’t find online.",
    image: "/images/manhattan.jpg",
    price: "$999*",
  },
  {
    id: 4,
    title: "Global Reach & Airline Partnerships",
    description:
      "With ties across 50+ countries, we unlock special fares through direct airline relationships.",
    image: "/images/global-air.jpg",
  },
  {
    id: 5,
    title: "Lowest Price Guarantee",
    description:
      "Found a cheaper fare online? Send a screenshot — we’ll beat it, no questions asked.",
    image: "/images/plane-bg.jpg",
    isLowPrice: true,
  },
  {
    id: 6,
    title: "24/7 Human Support — In Your Language",
    description:
      "Call or WhatsApp real agents anytime. No IVR, no bots. We speak English, Hindi, Gujarati, Tamil,Telugu & more.",
    image: "/images/24X7.jpg",
  },
  {
    id: 7,
    title: "Change Plans Anytime, Your Way",
    description:
      "On-ground teams in both countries for reliable, real-time assistance from booking to boarding.",
    image: "/images/man-using-phone.jpg",
  },
  {
    id: 8,
    title: "Extra Baggage Help",
    description:
      "We help you understand baggage rules and get discounted extra luggage options to save more.",
    image: "/images/bags.jpg",
  },
];
const TWEEN_FACTOR_BASE = 0.2;

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

export default function TrustSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTimeout(() => onInit(emblaApi), 0);
    setTimeout(() => onSelect(emblaApi), 0);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

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
        tweenNode.style.transform = `scaleY(${scale})`;
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
    <section className="w-full bg-blue-section py-6 max-md:pb-10 md:py-12.5">
      {/* Heading */}
      <h2 className="text-center text-[15px] md:text-base lg:text-xl font-bold text-primary mb-4.5 md:mb-7.5">
        WHY TRAVELERS TRUST GO GO TRIPS
      </h2>

      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((i) => (
              <div className={styles.embla__slide} key={i.id}>
                <div className="embla__slide__number">
                  <div className="bg-white rounded-xl shadow-card p-2.5 md:p-5 lg:max-w-3xl md:max-w-[600px] xs:max-w-[340px] max-w-[calc(100vw-48px)] w-full flex gap-2.5 md:gap-5 items-center">
                    {/* Left Image */}
                    <div className="lg:min-w-[284px] md:min-w-[200px] min-w-[132px] relative shadow-[0px_4px_4px_0px_#00000040] md:w-[200px] md:h-[150px] lg:w-[284px] lg:h-[203px] w-[132px] h-[94px] rounded-md overflow-hidden">
                      <Image
                        src={i.image}
                        alt="Offices In USA & India"
                        width={284}
                        height={203}
                        className="w-full h-full object-cover"
                      />
                      {i?.price ? (
                        <div className="border border-project-white bg-project-white/25 backdrop-blur-xs p-0.5 md:p-1.5 absolute top-2 left-2 md:top-5 md:left-5 text-white font-bold text-sm sm:text-base md:text-2xl rounded-standard">
                          {i?.price}
                        </div>
                      ) : null}
                      {i?.isLowPrice ? (
                        <div className="backdrop-blur-xs p-1.5 absolute inset-0 text-white font-bold text-2xl rounded-standard flex items-center justify-center">
                          <Image
                            src={"/images/low-price.png"}
                            alt="Offices In USA & India"
                            width={120}
                            height={120}
                            className="object-contain size-15 md:size-30"
                          />
                        </div>
                      ) : null}
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-center select-none">
                      <h3 className="text-primary text-[10px] xs:text-[11px] md:text-base lg:text-lg font-medium mb-2">
                        {i.title}
                      </h3>
                      <p className="text-[8px] xs:text-[9px] lg:text-[15px] font-light text-primary leading-relaxed">
                        {i.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 justify-center relative top-4 items-center min-h-3">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "rounded-full transition-all",
              index === selectedIndex ? "size-3 bg-[#CFCFCF]" : "bg-[#E5E5E5] size-2"
            )}
          ></DotButton>
        ))}
      </div>
    </section>
  );
}
