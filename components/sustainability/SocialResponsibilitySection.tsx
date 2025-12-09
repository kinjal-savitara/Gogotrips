"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialResponsibilitySection() {
  return (
    <section className="container-inner py-16">
      {/* Top section */}
      <div className="grid md:grid-cols-2 gap-16 items-end">
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
            Social
            <br /> Responsibility
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
            People, Safety, and Community at the Core of Our Operations
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="w-full h-100 relative overflow-hidden"
        >
          <Image
            src="/images/sustainability/social-responsibility.png"
            alt="Social Responsibility"
            fill
            className="object-cover hover:scale-110 transition-all duration-300"
          />
        </motion.div>
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
              delayChildren: 0.3,
            },
          },
        }}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-2 gap-16 my-16"
      >
        {[
          {
            title: "Ethical Standards",
            desc: (
              <>
                Avid Organics upholds a strict no animal testing policy and employs validated
                alternative testing methodologies across all product safety assessments.
              </>
            ),
          },
          {
            title: "Employee Health & Safety",
            desc: (
              <>
                We maintain compliance with ISO 45001:2018 and operate a proactive safety culture
                driven by training, risk identification, and continuous improvement. Our strong
                safety record reflects the effectiveness of this approach.
              </>
            ),
          },
          {
            title: "Community Engagement",
            desc: (
              <>
                We invest in initiatives that deliver long-term value to society, including:
                <ul className="list-disc pl-5 mt-2">
                  <li>Education programs for underprivileged children</li>
                  <li>Health and blood donation drives</li>
                  <li>Local employment and skill development programs</li>
                </ul>
              </>
            ),
          },
          {
            title: "Miyawaki Forest Initiative",
            desc: (
              <>
                Each year, we plant <span className="text-3xl font-light">5,000</span> native trees
                using the Miyawaki method, maintaining them for four years to ensure sustained
                ecological benefit. This initiative enhances biodiversity and improves local air
                quality.
              </>
            ),
          },
        ].map((item) => (
          <motion.div
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
            key={item.title}
            className="flex flex-col w-full items-center md:items-start"
          >
            <h3 className="text-xl font-extrabold  text-off-black leading-tight">{item.title}</h3>
            <div className="mt-2 mb-3 h-px w-12 bg-light-dark"></div>
            <div className="text-medium-dark leading-relaxed font-medium">{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
