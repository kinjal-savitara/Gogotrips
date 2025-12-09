"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GlobalAlignmentSection() {
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
          className="py-10"
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
            className="text-3xl font-extrabold text-primary"
          >
            Global Alignment
          </motion.h2>
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
            className="my-4 h-px w-12 bg-light-dark"
          ></motion.div>
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
            className="font-bold text-off-black mb-4"
          >
            Contributing to a Sustainable Global Economy
          </motion.h3>
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
            className="text-medium-dark font-medium leading-relaxed mb-8"
          >
            Avid Organics&apos; sustainability initiatives align with major international frameworks
            and goals:
          </motion.p>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  ease: "easeOut",
                  delayChildren: 1,
                },
              },
            }}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
            className="list-disc pl-5 mt-2 text-medium-dark font-medium leading-relaxed space-y-4"
          >
            <motion.li
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
            >
              <span className="font-bold text-off-black">UN SDGs: </span>7 (Clean Energy), 9
              (Industry & Innovation), 12 (Responsible Production), and 13 (Climate Action)
            </motion.li>
            <motion.li
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
            >
              <span className="font-bold text-off-black">Paris Agreement: </span>Supporting global
              climate objectives through measurable emission reductions
            </motion.li>
            <motion.li
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
            >
              <span className="font-bold text-off-black">The Climate Registry: </span>Ensuring
              accurate and verifiable carbon accounting
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="w-full h-full min-h-100 relative overflow-hidden"
        >
          <Image
            src="/images/sustainability/global.png"
            alt="Renewable Energy Operations"
            fill
            className="object-cover hover:scale-110 transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
