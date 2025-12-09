"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SustainabilityFrameworkSection() {
  const pillars = [
    {
      icon: "/images/sustainability/icon-1.png",
      title: ["Environmental", "Stewardship"],
      description:
        "Reducing our environmental footprint through renewable energy, resource efficiency, and innovation in green chemistry.",
    },
    {
      icon: "/images/sustainability/icon-2.png",
      title: ["Social", "Responsibility"],
      description:
        "Protecting our people, promoting safety, and contributing positively to the communities where we operate.",
    },
    {
      icon: "/images/sustainability/icon-3.png",
      title: ["Governance", "& Ethics"],
      description:
        "Maintaining integrity, transparency, and compliance across every level of our organization.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              ease: "easeOut",
              delayChildren: 0.3,
            },
          },
        }}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="container-inner"
      >
        {/* Section Header */}
        <motion.h2
          variants={{
            show: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            },
            hidden: { y: 20, opacity: 0 },
          }}
          className="text-2xl md:text-3xl font-extrabold text-primary mb-6"
        >
          Our Sustainability Framework
        </motion.h2>
        <motion.h3
          variants={{
            show: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            },
            hidden: { y: 20, opacity: 0 },
          }}
          className="font-bold text-off-black"
        >
          Structured for Impact. Measured for Accountability.
        </motion.h3>
        <motion.div
          variants={{
            show: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            },
            hidden: { y: 20, opacity: 0 },
          }}
          className="mt-0.5 mb-2 h-px w-12 bg-light-dark"
        />
        <motion.p
          variants={{
            show: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            },
            hidden: { y: 20, opacity: 0 },
          }}
          className="text-medium-dark font-medium leading-relaxed"
        >
          Avid Organics&apos; sustainability strategy aligns with leading ESG standards, including
          GRI, SASB, and the UN Sustainable Development Goals. Our approach is built around three
          core pillars:
        </motion.p>

        {/* Pillars Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                ease: "easeOut",
                delayChildren: 0.6,
              },
            },
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={{
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                },
                hidden: { x: 20, opacity: 0 },
              }}
              className="flex flex-col max-w-100 w-full items-center md:items-start"
            >
              <div className="flex gap-2 items-center">
                <div className="size-18 flex-[0_0_72px] relative flex items-center justify-start">
                  <Image src={pillar.icon} alt={pillar.title.join(" ")} fill />
                </div>
                <h3 className="text-3xl font-extrabold text-off-black leading-tight">
                  {pillar.title[0]} <br /> {pillar.title[1]}
                </h3>
              </div>
              <div className="w-30 border-t border-light-dark my-4"></div>
              <p className="text-medium-dark leading-relaxed font-medium">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
