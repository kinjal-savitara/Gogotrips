import { CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from "@/app/constant";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CustomIcon } from "../ui/custom-icon";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
   

    <header className="fixed container-inner w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-86px)] sm:px-6 inset-x-0 top-0 z-50 mt-5 rounded-md transition-all duration-300 bg-[#FFFFFF85] backdrop-blur-[8.5px] sm:py-4 px-2 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={53}
            preload
            className="transition-all duration-300 max-sm:w-20"
            unoptimized
          />
        </Link>

        {/* Contact section */}
        <div className="flex items-center gap-2 sm:gap-5">
          {/* Call link */}
          <Link
            href={CALL_URL}
            className="flex items-center gap-2 font-medium hover:underline transition-all duration-300"
          >
            <Phone size={29} className="text-primary max-xs:size-4 max-sm:size-5" />
            <span className="text-[11px] sm:text-sm md:text-base">{PHONE_NUMBER}</span>
          </Link>
          <Separator orientation="vertical" className="h-4! bg-primary" />
          {/* WhatsApp link */}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full size-6 xs:size-8 sm:size-12 bg-[#4BAE4F] hover:bg-[#188f1c] transition-all duration-300"
          >
            <CustomIcon name="whatsapp" className="size-4 xs:size-5 sm:size-7 text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
}


