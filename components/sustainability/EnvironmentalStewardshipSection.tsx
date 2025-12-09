"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EnvironmentalStewardshipSection() {
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
              src="/images/sustainability/enviormental.png"
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
              className="text-2xl md:text-3xl font-extrabold text-off-black"
            >
              Environmental
              <br /> Stewardship in Action
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
              Responsible Chemistry for a Sustainable Future
            </motion.p>
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
                delayChildren: 0.6,
              },
            },
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            {
              icon: "/images/sustainability/icon-4.png",
              title: "Green Chemistry by Design",
              desc: "Our R&D teams apply green chemistry principles to every stage of production, improving process efficiency, reducing waste, and minimizing the use of hazardous materials.",
            },
            {
              icon: "/images/sustainability/icon-5.png",
              title: "Water & Waste Management",
              desc: "Our facilities operate with zero liquid discharge (ZLD) through advanced wastewater treatment systems, including multiple-effect evaporators. Since 2018, we have reduced per-unit waste generation by 22%, even as production volumes increased.",
            },
            {
              icon: "/images/sustainability/icon-6.png",
              title: "Renewable Energy Leadership",
              desc: "By transitioning to 100% renewable electricity, we have eliminated Scope 2 emissions and strengthened our overall carbon performance.",
            },
            {
              icon: "/images/sustainability/icon-7.png",
              title: "Carbon Reduction Roadmap",
              desc: "Since 2018, we have achieved a 22% reduction in GHG emissions intensity through efficiency improvements and renewable energy adoption.",
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
              className="flex flex-col max-w-100 w-full items-center md:items-start"
            >
              <div className="flex gap-2 items-center mb-4">
                <div className="size-18 flex-[0_0_72px] min-h-18 relative flex items-center justify-start h-full">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                    fill
                  />
                </div>
                <h3 className="text-xl font-extrabold  text-off-black leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-medium-dark leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Future targets */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl font-extrabold  text-off-black leading-tight mb-4"
          >
            Our future targets
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex gap-10 items-center"
          >
            <div className="flex gap-3 max-w-64 items-center w-full">
              <p className="text-6xl font-light text-off-black">50%</p>
              <p className="text-xs font-medium text-medium-dark">
                absolute emissions reduction (Scope 1+2) by{" "}
                <span className="font-extrabold text-black/80 ">2030</span>
              </p>
            </div>
            <div className="h-10 w-0.5 bg-gray-400" />
            <div className="flex gap-3 items-center w-full">
              <p className="text-6xl font-light text-off-black">Net Zero</p>
              <p className="text-xs text-medium-dark font-medium mt-auto mb-1">
                by
                <span className="font-extrabold text-black/80"> 2040</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-1"
          >
            <p className="text-medium-dark leading-relaxed font-medium">
              Our emissions reporting follows
            </p>
            <Image
              src="/images/sustainability/climate_registry.png"
              alt="The Climate Registry"
              width={200}
              height={60}
              unoptimized
            />
            <p className="text-medium-dark leading-relaxed font-medium">
              standards and is independently verified.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-bold text-off-black">Independent Validation</h3>
            <div className="my-2 h-px w-12 bg-light-dark"></div>
            <h3 className="font-bold text-off-black">
              Environmental management systems certified to ISO 14001:2015
            </h3>
            <p className="text-medium-dark font-medium leading-relaxed">
              reinforce our commitment to continuous improvement and compliance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
