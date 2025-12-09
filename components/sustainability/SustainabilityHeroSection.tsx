"use client";

import sustainabilityImage from "@/public/images/sustainability/sustainability_hero.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SustainabilityHeroSection() {
  return (
    <div className="relative bg-gray-section overflow-hidden">
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 1.1 },
          animate: { opacity: 1, scale: 1 },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-120"
      >
        <Image
          src={sustainabilityImage}
          alt="Sustainability"
          fill
          priority
          className="object-cover"
          placeholder="blur"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="container-inner flex flex-col py-16 text-left absolute inset-0 z-20"
      >
        <div className="mt-auto">
          <h1 className="text-3xl font-extrabold text-white">Manufacturing with Purpose.</h1>
          <h2 className="text-3xl font-extrabold text-white">
            Chemistry for a Sustainable Future.
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
