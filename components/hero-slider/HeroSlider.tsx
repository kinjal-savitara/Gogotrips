"use client";

import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { CustomIcon } from "../ui/custom-icon";
import styles from "./hero-slider.module.css";

const TWEEN_FACTOR_BASE = 0.5;

type BlackFridayCardProps = {
  src: string;
  alt?: string;
};

// const images = [

//   '/images/hero1.png',
//   '/images/hero2.png',
//   '/images/hero3.png',
//   // '/images/hero4.png'
// ]

const images = [
  {
    // group booking
    id: 1,
    title: "group booking discount of up to $100.",
    image: "/images/hero3.png",
  },
  {
    // Business clAss
    id: 2,
    title: "$200 off on my first Business Class booking.",
    image: "/images/hero2.png",
  },
  {
    // Premium Economy
    id: 3,
    title: " Premium Economy first flight booking offer of up to $75 off.",
    image: "/images/hero3.png",
  },
  {
    // Price Match Challenge
    id: 4,
    title: "USA To Ahmedabad",
    image: "/images/hero4.png",
  },
  {
    id: 5,
    title: "$799 offer.",
    image: "/images/hero4.png",
  },
];

// const BlackFridayCard: React.FC<BlackFridayCardProps> = ({ src, alt = "Black Friday" }) => {
//   return (
//     <div className="relative w-full h-full">
//       <Image src={src} alt={alt} fill priority className="object-contain" />
//       <Link href={WHATSAPP_URL} target="_blank ">
//         <Button
//           data-slot="button"
//           className="absolute hover:none bottom-4 left-[45%] -translate-x-1/2 inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer font-medium rounded-standard transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0  outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-project-white border border-project-white text-primary shadow-[0px_4px_6.9px_-2px_#E22371,0px_4px_8.9px_0px_#254165CC_inset] h-10 has-[&gt;svg]:px-3 px-4 py-3 text-sm"
//           type="submit"
//         >
//           Book On{" "}
//           <CustomIcon name="whatsapp" className="size-4 xs:size-5 sm:size-7 text-[#4BAE4F]" />
//         </Button>
//       </Link>
//     </div>
//   );
// };
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

interface HeroSliderProps {
  className?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ className }) => {
  const options: EmblaOptionsType = { align: "center", loop: true };
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 5000 }),
  ]);
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
          {images.map((img, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className="embla__slide__number h-full">
                <div key={img.id} className="w-full h-[220px] xs:h-[260px]  md:h-[420px] lg:h-[520px]">
                  {/* Image */}
                  <Image
                    src={img.image}
                    alt={img.title}
                    width={350}
                    height={220}
                    className=" w-full object-cover aspect-square"
                  />
                  <Link
                    href={`https://wa.me/+19543475414?text=Hi, I would like to know more about the  ${img.title}`}
                    target="_blank"
                  >
                    <Button
          className="
            absolute
            bottom-10 sm:bottom-4 md:bottom-10
            left-1/2
            -translate-x-1/2
            z-10
            inline-flex items-center gap-2
            bg-project-white border border-project-white
            text-primary
            shadow-[0px_4px_6.9px_-2px_#E22371,0px_4px_8.9px_0px_#254165CC_inset]
            h-9 sm:h-10
            px-3 sm:px-4
            text-xs sm:text-sm
          "
          variant="blur"
        >
                      Book On
                      <CustomIcon
                        name="whatsapp"
                        className="size-4 xs:size-5 sm:size-7 text-[#4BAE4F]"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className={styles.embla + ` ${className}`}>
    //   <div ref={emblaRef} className={styles.embla__viewport}>
    //     <div className={styles.embla__container}>
    //       {images.map((img, index) => (
    //         <div className={styles.embla__slide} key={index}>
    //           <div className="embla__slide__number h-full">
    //             <BlackFridayCard key={index} src={img} />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSlider;
