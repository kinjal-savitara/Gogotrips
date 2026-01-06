"use client";

import { CheckCircle, MessageCircle, Phone, XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Modal() {
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 2650) {
  //       setOpen(true);
  //       window.removeEventListener("scroll", onScroll);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // // Disable background scroll when modal is open
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   // Cleanup in case component unmounts
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [open]);
  
  // if (!open) return null;
   const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure client-side only (prevents hydration error)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Open modal on scroll
  useEffect(() => {
    if (!mounted) return;

    const onScroll = () => {
      if (window.scrollY > 2500) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  // 🔹 Disable BODY scroll
  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, mounted]);

  // 🔹 Disable KEYBOARD scroll
  useEffect(() => {
    if (!open) return;

    const blockKeys = (e) => {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];

      if (keys.includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", blockKeys);
    return () => window.removeEventListener("keydown", blockKeys);
  }, [open]);

  // 🔹 Disable TOUCH scroll (mobile)
  useEffect(() => {
    if (!open) return;

    const preventTouch = (e) => e.preventDefault();

    document.addEventListener("touchmove", preventTouch, { passive: false });
    return () =>
      document.removeEventListener("touchmove", preventTouch);
  }, [open]);

  if (!mounted || !open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse animate-fadeIn">

    
      {/* <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg md:flex md:flex-row"> */}
        <button
          onClick={() => setOpen(false)}
          className="absolute  right-6 text-gray-500 hover:text-gray-800 text-sm mt-3"
        >
          <XIcon />
        </button>
       
        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-sm font-semibold mb-2 text-[#254165]">
            USA to India Round Trip from Just <span className="text-[#E22371]">$999*</span>
          </h2>
          <div className="w-full flex flex-row gap-2 text-[#254165] text-xs mt-2">
            <div className="w-1/3 flex flex-row gap-1">
              <CheckCircle className="max-xs:size-4 text-[#E22371] max-sm:size-5 text-xs" />
              Secret Fares
            </div>
            <div className="w-1/3 flex flex-row gap-1">
              <Phone className="max-xs:size-4 text-[#E22371] max-sm:size-5 text-xs" /> Priority
              Callback
            </div>
            <div className="w-1/3 flex flex-row gap-1">
              <MessageCircle className="max-xs:size-4 text-[#E22371] max-sm:size-5 text-xs" />
              WhatsApp Support
            </div>
          </div>

          <p className="text-gray-600 mb-4 text-xs mt-3">
            Get Your in 10 Minutes - no Spam, no bots.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-full rounded border px-4 py-2"
          />
          <input type="tel" placeholder="Phone" className="mb-4 w-full rounded border px-4 py-2" />

          <Button>Gat My $999* Quote Now</Button>
        </div>
         {/* LEFT IMAGE */}
        <div className="md:w-1/2 relative md:h-auto">
          <Image src="/images/popup.png" alt="Welcome" fill className="object-cover" priority />
        </div>

      </div>
    </div>
  );
}
