"use client";

import { CALL_URL } from "@/app/constant";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    id: 1,
    title: "USA To Ahmedabad",
    image: "/images/ahmedabad.png",
  },
  {
    id: 2,
    title: "USA To Mumbai",
    image: "/images/mumbai.png",
  },
  {
    id: 3,
    title: "USA To Bengaluru",
    image: "/images/bengaluru.png",
  },
  {
    id: 4,
    title: "USA To Hyderabad",
    image: "/images/hyderabad.png",
  },
  {
    id: 5,
    title: "USA To Delhi",
    image: "/images/delhi.png",
  },
  {
    id: 6,
    title: "USA To Chennai",
    image: "/images/chennai.png",
  },
  {
    id: 7,
    title: "USA To Kolkata",
    image: "/images/kolkata.png",
  },
  {
    id: 8,
    title: "USA To Amritsar",
    image: "/images/amritsar.png",
  },
   {
    id: 9,
    title: "USA To Kochi",
    image: "/images/kochi-1.jpg",
  },
];

export default function RoutesSection() {
//   const WhatsappLink=(title: string)=>{
//   const phoneNo = "+1954-347-5414";
//   const message = "Hi, i'd like to inquire about flights from ${title}";
//   // window.open(`https://wa.me/1954-347-5414?text=${encodeURIComponent(message)}`);
//   //  window.open(`https://wa.me/${phoneNo}?text=${encodeURIComponent(message)}`);
// }
  return (
    <section className="w-full py-12.5 container-inner">
      {/* Heading */}
      <h2 className="text-center text-[15px] md:text-base lg:text-xl font-bold text-primary mb-4.5 md:mb-7.5">
        HEADING TO INDIA? LET’S MAKE IT AFFORDABLE.
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 xxs:grid-cols-3  xs:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-7.5">
        {routes.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden shadow-[2px_4px_4px_0px_#00000040]"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={350}
              height={220}
              className="max-h-[220px] w-full object-cover aspect-square"
            />

            {/* Overlay Route Label */}
            {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[rgba(0,0,0,0.55)] text-white px-4 py-1 rounded-md text-sm font-medium backdrop-blur-sm">
              {item.title}
            </div> */}
            {/* <Button className="absolute text-lg bottom-3 left-0 right-0 mx-5 bg-project-white/5 backdrop-blur-xs border-project-white shadow-none hover:bg-white hover:text-black">
              {item.title}
            </Button> */}
            <Link href={`https://wa.me/+19543475414?text=Hi, I'd like to inquire about flights from USA to ${item.title.split("To ")[1]}`} target="_blank">
              <Button
                className="absolute text-[8px] sm:text-sm md:text-lg md:bottom-3 left-0 right-0 mx-1.5 md:mx-5 max-md:h-8 bottom-1.5"
                variant={"blur"}
                // onClick={WhatsappLink}
              >
                {item.title}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link href={CALL_URL}>
          <Button className="text-[15px] md:text-xl">
            <PhoneCall name="Phonecall" className="size-4 xs:size-5 sm:size-7" />
            Call To Book
          </Button>
        </Link>
      </div>
    </section>
  );
}
