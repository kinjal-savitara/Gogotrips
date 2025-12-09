"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurVisionSection() {
  return (
    <section className="py-16">
      <div className="container-inner space-y-16">
        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="w-full h-100 relative overflow-hidden"
          >
            <Image
              src="/images/sustainability/co2.png"
              alt="Environmental Stewardship"
              // width={600}
              // height={400}
              fill
              className="object-cover hover:scale-110 transition-all duration-300"
            />
          </motion.div>
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
            className="w-full py-16"
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
              className="text-2xl md:text-3xl font-extrabold text-primary"
            >
              Our Vision:
              <br /> Net Zero by 2040
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
              className="my-3 h-px w-12 bg-light-dark"
            ></motion.div>
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
              className="font-bold text-off-black mt-2"
            >
              Advancing Chemistry Toward a Low-Carbon Future
            </motion.p>
          </motion.div>
        </div>

        {/* Future targets */}
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
          className="flex gap-10 items-start max-w-5xl w-full justify-between"
        >
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
            className="max-w-50 w-full"
          >
            <p className="text-6xl font-light text-off-black">50%</p>
            <p className="text-sm text-medium-dark font-medium">
              reduction in absolute GHG emissions (Scope 1 & 2) <br />
              by <span className="font-extrabold text-black/80 ">2030</span>
            </p>
          </motion.div>
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
            className="max-w-38 w-full"
          >
            <p className="text-6xl font-light text-off-black">100%</p>
            <p className="text-sm text-medium-dark font-medium">
              renewable energy across global operations <br />
              by <span className="font-extrabold text-black/80 ">2035</span>
            </p>
          </motion.div>
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
            className="max-w-65 w-full"
          >
            <p className="text-6xl font-light text-off-black">Net Zero</p>
            <p className="text-sm text-medium-dark font-medium">
              by
              <span className="font-extrabold text-black/80"> 2040</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
