"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function RenewableEnergySection() {
  return (
    <section className="bg-gray-section">
      <div className="container-inner grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
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
        >
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
            className="text-3xl font-extrabold text-primary mb-10"
          >
            100% Renewable <br />
            Energy Operations
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
            Setting a New Standard in Sustainable Manufacturing
          </motion.h3>
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
            className="mt-0.5 mb-2 h-px w-12 bg-light-dark"
          />
          <motion.p
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
            className="text-medium-dark font-medium leading-relaxed"
          >
            In 2025, Avid Organics achieved 100% renewable electricity across all manufacturing
            operations. This milestone marks a key step in our decarbonization journey and
            demonstrates leadership in sustainable specialty chemistry. It reduces Scope 2 emissions
            to zero and enhances the sustainability performance of our customers’ supply chains.
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="w-full h-100 relative"
        >
          <Image
            src="/images/sustainability/energy.png"
            alt="Renewable Energy Operations"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
