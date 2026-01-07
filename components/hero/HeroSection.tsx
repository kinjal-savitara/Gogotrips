"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import heroBg from "@/public/hero-bg.jpg";
import AutoScrollSlider from "../hero-slider/AutoScrollSlider";
import HeroSlider from "../hero-slider/HeroSlider";
import QuoteForm from "../quote-form/QuoteForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-[900px] w-full overflow-hidden bg-black ">
      <div className="absolute left-1/2 top-28 sm:top-48 lg:top-52 md:bottom-48 -translate-x-1/2 z-20 w-full px-4 lg:max-w-[calc(100%-500px)]">
        <h1
          className="text-center text-white font-bold leading-tight
                 text-xl sm:text-2xl lg:text-3xl mb-11"
        >
          USA-India Flight Deals For Any City, Any Date!
        </h1>
      </div>

      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { opacity: 0, scale: 1.1 },
          animate: { opacity: 1, scale: 1 },
        }}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={heroBg}
          alt="hero-bg"
          fill
          priority
          quality={100}
          placeholder="blur"
          className="object-cover"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/38" />
      </motion.div>
      <div className="mt-40 m">
        <div className="lg:absolute top-0 bottom-0 flex items-center z-20 w-100 sm:w-125 xl:w-150 right-0 ml-auto max-lg:mt-48 lg:mt-32 ">
          <HeroSlider className="w-full h-[282px] sm:h-[426px] xl:h-125 max-sm:ml-6!" />
        </div>

        <div className="flex flex-col h-full">
          <div className="relative z-10 flex-1 container-inner justify-center pt-5 md:pt-10 lg:pt-38  mt-10 lg:mt-0 mb-10 lg:mb-0">
            {/* <div className="mb-10 w-full max-w-[calc(100%-500px)] max-lg:hidden">
            <h1 className="text-3xl font-bold leading-tight text-white">
              USA-India Flight Deals For Any City, Any Date!
            </h1>
            <p className="text-lg font-light text-white">
              One-Way, Round Trip, Multi-City - We&apos;ll Plan Your India Trip Your Way
            </p>
          </div> */}
            <div className="grid lg:grid-cols-2 gap-40 xl:grid-cols-2 ">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
      <div
        className="
  relative
  xl:mt-50 xl:mb-0 
  mt-11 mb-0  /* mobile default */
  md:mt-20 md:mb-0  /* tablet+ */
  lg:mt-50 lg:mb-0  /* 1024 */
  py-2
  bg-project-white/57
  backdrop-blur-xs
"
      >
        <AutoScrollSlider />
      </div>
    </section>
  );
}
