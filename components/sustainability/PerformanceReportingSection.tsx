"use client";

import greenImage from "@/public/images/sustainability/green.png";
import { motion } from "framer-motion";
import Image from "next/image";

const PerformanceReportingSection = () => {
  return (
    <section>
      <div className="relative overflow-hidden">
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 1.1 },
            animate: { opacity: 1, scale: 1 },
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-100 overflow-hidden after:bg-linear-to-r after:absolute after:inset-0 after:from-black/30"
        >
          <Image
            src={greenImage}
            alt="Performance and Reporting"
            fill
            className="object-cover"
            placeholder="blur"
          />
        </motion.div>
        <div className="container-inner flex flex-col py-16 text-left absolute inset-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mt-auto"
          >
            <h2 className="text-3xl font-extrabold text-white">
              Performance and
              <br /> Reporting
            </h2>
            <div className="my-3 h-px w-12 bg-white/60"></div>
            <p className="text-white font-medium max-w-3xl">
              Building Trust Through Transparent Reporting
            </p>
          </motion.div>
        </div>
      </div>
      <div className="container-inner py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl w-full text-medium-dark font-medium"
        >
          Avid Organics is committed to clear, verifiable ESG disclosure. Our sustainability
          reporting provides key metrics across environmental, social, and governance indicators,
          including:
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                delayChildren: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="flex gap-8 my-8"
        >
          {[
            {
              icon: "/images/sustainability/icon-8.png",
              title: ["GHG ", "Emissions and Energy use"],
            },
            {
              icon: "/images/sustainability/icon-9.png",
              title: ["Water and Waste", "management performance"],
            },
            {
              icon: "/images/sustainability/icon-10.png",
              title: ["Health and Safety", "data"],
            },
            {
              icon: "/images/sustainability/icon-11.png",
              title: ["Diversity and Inclusion", "progress"],
            },
            {
              icon: "/images/sustainability/icon-12.png",
              title: ["Governance and Ethics", "oversight"],
            },
          ].map((i) => (
            <motion.div
              variants={{
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                },
                hidden: { x: 30, opacity: 0 },
              }}
              key={i.icon}
              className="flex flex-col min-h-full flex-1"
            >
              <div className="p-4 h-30 bg-primary flex items-center justify-center">
                <div className="size-20 relative">
                  <Image src={i.icon} alt={i.title[0]} fill />
                </div>
              </div>
              <div className="p-4 flex-1 bg-gray-section font-medium text-center text-medium-dark">
                {i.title[0]} <br /> {i.title[1]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceReportingSection;
