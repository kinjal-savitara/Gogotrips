"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export default function GovernanceSection() {
  return (
    <section className="relative bg-gray-section py-8 z-0">
      <div className="absolute top-0 -right-6 size-85 -z-1">
        <Image src="/assets/svg/bg.svg" alt="footer-bg" fill priority />
      </div>
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
              src="/images/sustainability/governal.png"
              alt="Governance & Product Stewardship"
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
              className="text-2xl md:text-3xl font-extrabold text-off-black"
            >
              Governance & <br />
              Product Stewardship
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
              Transparency, Compliance, and Accountability
            </motion.p>
          </motion.div>
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-extrabold text-xl text-off-black"
          >
            Certifications and Regulatory Alignment
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="font-medium text-medium-dark leading-relaxed"
          >
            Avid Organics&apos; operations meet globally recognized standards of quality, safety,
            and ethical management:
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  ease: "easeOut",
                },
              },
            }}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
            className="flex flex-wrap gap-8 items-center my-8"
          >
            {[
              { id: 1, src: "/images/footer/logo1.png", size: "h-22" },
              { id: 2, src: "/images/sustainability/sgs.png", size: "h-22" },
              { id: 3, src: "/images/sustainability/sgs.png", size: "h-22" },
              { id: 4, src: "/images/footer/logo3.png", size: "h-22" },
              { id: 5, src: "/images/footer/logo6.png", size: "h-22" },
              { id: 6, src: "/images/sustainability/smeta.png", size: "h-18" },
              { id: 7, src: "/images/sustainability/fda.png", size: "h-12" },
              { id: 8, src: "/images/sustainability/fssai.png", size: "h-12" },
              { id: 9, src: "/images/sustainability/reach.png", size: "h-22" },
            ].map((i) => (
              <MotionImage
                variants={{
                  show: {
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      scale: {
                        type: "spring",
                        bounce: 0.6,
                        duration: 0.6,
                      },
                    },
                  },
                  hidden: { x: 0, scale: 1.5, opacity: 0 },
                }}
                src={i.src}
                key={i.id}
                height={60}
                width={200}
                quality={100}
                className={"w-auto object-contain " + i.size}
                alt={i.src}
              />
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="font-medium text-medium-dark leading-relaxed"
          >
            These certifications reflect disciplined processes and a commitment to continual
            improvement.
          </motion.p>
        </div>
        {/* Features */}
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
          className="grid md:grid-cols-2 gap-16 "
        >
          {[
            {
              title: "Product Stewardship",
              desc: (
                <>
                  We manage the entire lifecycle of our products responsibly—from raw material
                  selection to end-of-life—ensuring safety and environmental compliance. Detailed
                  documentation and technical support help our customers operate with confidence and
                  transparency.
                </>
              ),
            },
            {
              title: "Supply Chain Responsibility",
              desc: (
                <>
                  We work closely with suppliers who share our standards for quality, ethics, and
                  sustainability, supported by periodic audits and long-term collaboration.
                </>
              ),
            },
          ].map((item) => (
            <motion.div
              key={item.title}
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
              className="flex flex-col w-full items-center md:items-start"
            >
              <h3 className="text-xl font-extrabold  text-off-black leading-tight">{item.title}</h3>
              <div className="mt-2 mb-3 h-px w-12 bg-light-dark"></div>
              <div className="text-medium-dark leading-relaxed font-medium">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
