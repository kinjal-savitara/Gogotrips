"use client";

import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Instant Booking",
    desc: "Get Your E-Ticket On Email & WhatsApp Within Minutes.",
    icon: "/images/booking-online.png",
  },
  {
    id: 2,
    title: "Travel Ready",
    desc: "Seats, Meals, Baggage — All Sorted For You.",
    icon: "/images/check-out.png",
  },
  {
    id: 3,
    title: "Real-Time Alerts",
    desc: "Flight Status, Gate Changes & Reminders.",
    icon: "/images/notification.png",
  },
  {
    id: 4,
    title: "Always-On Help",
    desc: "24/7 Chat & Call Support.",
    icon: "/images/support.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-blue-section py-6 md:py-17">
      <div className="container-inner">
        {/* Heading */}
        <h2 className="text-center text-[15px] md:text-base lg:text-xl font-bold text-primary mb-4.5 md:mb-7.5">
          FROM TICKET TO TAKEOFF WE’VE GOT YOU!
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-card rounded-lg md:py-5 md:px-7.5 p-3 text-center transition"
            >
              <div className="flex justify-center mb-4">
                <Image src={item.icon} width={70} height={70} alt={item.title} />
              </div>

              <h3 className="md:text-[18px] text-xs font-medium text-primary mb-2">{item.title}</h3>

              <p className="text-[10px] md:text-sm text-primary font-light leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
