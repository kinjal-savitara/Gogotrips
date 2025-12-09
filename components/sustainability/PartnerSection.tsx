"use client";
import greenImage from "@/public/images/sustainability/partner_bg.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const PartnerSection = () => {
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
              Partner with
              <br />a Sustainable Leader
            </h2>
          </motion.div>
        </div>
      </div>
      <div className="container-inner py-16 space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl w-full text-medium-dark font-medium"
        >
          When you partner with Avid Organics, you strengthen your supply chain with a manufacturer
          that delivers verified sustainability outcomes, transparent reporting, and responsible
          manufacturing practices.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-medium-dark font-medium"
        >
          To learn how our sustainable operations can support your business goals.
        </motion.p>
        <Button variant="secondary" className="mt-auto gap-8 justify-between">
          Contact us <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default PartnerSection;
