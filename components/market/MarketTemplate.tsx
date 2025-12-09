"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MarketPageData } from "./data";

export default function MarketTemplate({ data }: { data: MarketPageData }) {
  return (
    <section>
      {/* Hero Section */}
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
          className="relative w-full h-120 overflow-hidden"
        >
          <Image
            src={data.hero.image}
            alt={data.hero.title}
            fill
            priority
            placeholder="blur"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="container-inner flex flex-col py-16 text-left absolute inset-0 z-20"
        >
          <div className={data.hero.className}>
            <h1 className="text-3xl font-extrabold text-primary">{data.hero.title}</h1>
            <div className="my-3 h-px w-12 bg-light-dark"></div>
            <p className="text-off-black font-medium max-w-3xl">{data.hero.subtitle}</p>
          </div>
        </motion.div>
      </div>

      {/* Description Section */}
      <div className="container-inner py-16">
        <div className="text-medium-dark md:columns-2 md:gap-16 font-medium">
          {data.description}
        </div>
      </div>

      {/* Solutions Section */}
      <div className="container-inner py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-3xl font-extrabold text-primary mb-10"
        >
          Our Solutions for <br />
          {data.hero.title}
        </motion.h2>

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
          className="grid md:grid-cols-3 gap-8"
        >
          {data.solutions.map((s, i) => (
            <motion.div
              variants={{
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                },
                hidden: { x: 50, opacity: 0 },
              }}
              key={i}
            >
              <h3 className="font-bold text-off-black">{s.title}</h3>
              <div className="mt-0.5 mb-2 h-px w-12 bg-light-dark"></div>
              <p className="text-medium-dark font-medium leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-full h-14  relative">
        <Image src="/bg_patern.png" alt="sd" fill priority />
      </div>
      {/* Featured Products Section */}

      <div className="container-inner py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-3xl font-extrabold text-primary mb-16"
        >
          Featured Avid Organics Products
        </motion.h2>

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
          className="grid sm:grid-cols-2 gap-16"
        >
          {data.products.map((p, i) => (
            <motion.div
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
              key={i}
              className="max-w-100"
            >
              {/* Image Block */}
              <div className="relative w-full aspect-2/1 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute z-1 inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255),transparent_70%)] pointer-events-none"></div>
                <div className="absolute z-2 bottom-3 left-4 text-normal-black drop-shadow">
                  <h3 className="text-2xl font-extrabold">
                    {p.name}
                    {p?.tag && (
                      <span className="text-lg text-medium-dark font-normal ml-px">{p?.tag}</span>
                    )}
                  </h3>
                  {p?.subtitle && (
                    <>
                      <div className="border-b border-light-dark w-12"></div>
                      <p className="text-lg text-medium-dark font-normal">{p?.subtitle}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Underline */}
              <div className="border-b border-light-dark w-12 mt-4 mb-2"></div>

              {/* Description */}
              <p className="text-medium-dark leading-relaxed font-medium">{p.desc}</p>
            </motion.div>
          ))}
          <Link
            href={data?.productButton?.link}
            className="col-start-1 bg-secondary mt-0 mb-16 text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 inline-flex w-fit gap-4 items-center"
          >
            {data.productButton.text} <MoveRight className="size-5" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
