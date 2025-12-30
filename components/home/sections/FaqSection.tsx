"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FaqSection({ right }: { right?: boolean }) {
   const [isOpen, setIsOpen] = useState(false);
  const left = [
    {
      q: "Why Book With GoGoTrips Instead Of Online?",
      a: "We offer unpublished fares, real human support (no bots), and custom itineraries you won’t find on any booking sites.",
    },
    {
      q: "What's Your Cancellation And Refund Policy?",
      a: "We assist with cancellations, changes, refunds, and airline credit. Our team is available 24/7 to support you.",
    },
    {
      q: "Do You Help With Wheelchairs Or Other Special Needs?",
      a: "Absolutely. We handle wheelchair service, meal requests, medical support, and more—just let us know in advance.",
    },
  ];

  const rightq = [
    {
      q: "Can I Book Via WhatsApp Or Phone?",
      a: "Yes! Simply call or message us with your trip details. We’ll send your quote in minutes—no forms,no wait.",
    },
    {
      q: "Do You Offer A Price Match If I Find A Better Deal?",
      a: "Yes. Send us a screenshot—we’ll match or beat most online prices, with better service included.",
    },
    {
      q: "What Documents Do I Need To Travel To India?",
      a: "You’ll need a valid passport and an Indian visa or OCI card. We’ll guide you through the latest travel rules if needed.",
    },
  ];

  return (
    <section className="container-inner py-6 md:py-17">
      <h2 className="text-center text-[15px] md:text-base lg:text-xl font-bold text-primary mb-4.5 md:mb-7.5">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
        {/* LEFT COLUMN */}
        {/* <div className="space-y-4">
          <Accordion type="single" collapsible>
            {left.map((item, i) => (
              <AccordionItem key={i} value={`left-${i}`} className="border-none">
                <AccordionTrigger className="text-sm md:text-base font-medium text-primary border-b pb-3 rounded-none border-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-[15px] font-light leading-snug text-primary pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
  */}<div className="">
        <Accordion type="single" collapsible>
          {left.map((item, i) => (
            <AccordionItem key={i} value={`right-${i}`} className="border-none">
              <AccordionTrigger className="text-sm md:text-base font-medium text-primary border-b pb-3 rounded-none border-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs md:text-[15px] font-light leading-snug text-primary pt-2">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
        {/* RIGHT COLUMN */}
      {/* <div className="space-y-4">
          <Accordion type="single" collapsible>
            {right.map((item, i) => (
              <AccordionItem key={i} value={`right-${i}`} className="border-none">
                <AccordionTrigger className="text-sm md:text-base font-medium text-primary border-b pb-3 rounded-none border-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-[15px] font-light leading-snug text-primary pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
      
        </div> */}
       <div className="sm:hidden">
        
        {/* Mobile accordion expands only when button clicked */}
        {isOpen && (
          <Accordion type="multiple" collapsible value={rightq.map((_, i) => `right-${i}`)}>
            {rightq.map((item, i) => (
              <AccordionItem key={i} value={`right-${i}`} className="border-none">
                <AccordionTrigger className="text-sm md:text-base font-medium text-primary border-b pb-3 rounded-none border-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-[15px] font-light leading-snug text-primary pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
         <Button
          className="mt-5 text-white font-semibold self-start w-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "View Less" : "View More"}
        </Button>

      </div>
    
      </div>
    </section>
  );
}
