"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import styles from "./auto.module.css";

const airlines = [
  { id: 1, src: "/images/air-india.png", alt: "Air India" },
  { id: 2, src: "/images/singapore.png", alt: "Singapore Airlines" },
  { id: 3, src: "/images/british.png", alt: "British Airways" },
  { id: 4, src: "/images/qatar.png", alt: "Qatar Airways" },
  { id: 5, src: "/images/turkish.png", alt: "Turkish Airlines" },
  { id: 6, src: "/images/american-air.png", alt: "American Airlines" },
  { id: 7, src: "/images/swiss.png", alt: "Swiss" },
  { id: 8, src: "/images/vergin.png", alt: "Vergin atlantic" },
  { id: 9, src: "/images/united.png", alt: "United" },
  { id: 10, src: "/images/lufthansa.png", alt: "Lufthansa" },
  { id: 11, src: "/images/delta.png", alt: "Delta" },
  { id: 12, src: "/images/emirates.png", alt: "Emirates" },
];

const AutoScrollSlider: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div className="container-inner relative after:w-20 after:h-full after:absolute after:top-0 after:bottom-0 after:right-6 md:after:right-8 lg:after:right-12 after:z-10 after:bg-linear-to-l after:from-0% after:to-100% after:from-[#9AA1A6] after:to-[#8A8A8A00] before:w-20 before:h-full before:absolute before:top-0 before:bottom-0 before:left-6 md:before:left-8 lg:before:left-12 before:z-10 before:bg-linear-to-r before:from-0% before:to-100% before:from-[#8F9595] before:to-[#8A8A8A00]">
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {airlines.map((item) => (
              <div key={item.id} className={styles.embla__slide}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={134}
                  height={50}
                  className="object-contain w-[100px] md:w-33.5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollSlider;

// "use client";

// import AutoScroll from "embla-carousel-auto-scroll";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";

// const airlines = [
//   { id: 1, src: "/images/air-india.png", alt: "Air India" },
//   { id: 2, src: "/images/singapore.png", alt: "Singapore Airlines" },
//   { id: 3, src: "/images/british.png", alt: "British Airways" },
//   { id: 4, src: "/images/qatar.png", alt: "Qatar Airways" },
//   { id: 5, src: "/images/turkish.png", alt: "Turkish Airlines" },
// ];

// const AutoScrollSlider = () => {
//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true,
//       align: "center",
//     },
//     [
//       AutoScroll({
//         playOnInit: true,
//         speed: 1,
//         stopOnMouseEnter: false,
//         stopOnInteraction: false,
//       }),
//     ]
//   );

//   return (
//     <div className="embla w-full py-6 bg-[#E0E2E5]/60 backdrop-blur-sm">
//       <div className="embla__viewport overflow-hidden" ref={emblaRef}>
//         <div className="embla__container">
//           {airlines.map((item) => (
//             <div key={item.id} className="embla__slide shrink-0 w-auto flex items-center">
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 width={180}
//                 height={100}
//                 className="object-contain w-[100px] md:w-40 xl:w-50"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AutoScrollSlider;
