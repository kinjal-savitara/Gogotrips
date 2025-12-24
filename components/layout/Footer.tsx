// import { CustomIcon } from "@/components/ui/custom-icon";
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-section pt-10 pb-5 relative">
//       <div className="absolute top-0 -right-8 size-85 z-0">
//         <Image src="/assets/svg/footer_bg.svg" alt="footer-bg" fill priority />
//       </div>
//       <div className="container-inner relative z-10 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] justify-between gap-10 items-start">
//         {/* Left Section - Logo and Certifications */}
//         <div className="flex flex-col justify-between h-full">
//           <Image
//             src="/logo.png"
//             alt="Avid Organics Logo"
//             width={350}
//             height={50}
//             className="object-contain"
//             unoptimized
//             preload
//           />

//           <div className="grid grid-cols-[auto_auto_auto] gap-2 w-fit">
//             <Image
//               src="/images/footer/logo1.png"
//               alt="FSSC"
//               className="mx-auto"
//               width={70}
//               height={70}
//               quality={100}
//             />
//             <Image
//               src="/images/footer/logo2.png"
//               alt="ISO"
//               className="mx-auto"
//               width={70}
//               height={70}
//               quality={100}
//             />
//             <Image
//               src="/images/footer/logo3.png"
//               alt="HALAL"
//               className="mx-auto"
//               width={70}
//               height={70}
//               quality={100}
//             />
//             <Image
//               src="/images/footer/logo4.png"
//               alt="ISO"
//               className="mx-auto"
//               width={70}
//               height={70}
//               quality={100}
//             />
//             <Image
//               src="/images/footer/logo5.png"
//               alt="DUN"
//               className="mx-auto"
//               width={150}
//               height={70}
//               quality={100}
//             />
//             <Image
//               src="/images/footer/logo6.png"
//               alt="KCJ"
//               className="mx-auto"
//               width={70}
//               height={70}
//               quality={100}
//             />
//           </div>
//         </div>

//         {/* Right Section - Links and Social */}
//         <div className="flex flex-col items-start gap-6">
//           <ul className="text-sm font-medium text-medium-dark space-y-4 uppercase [&_a]:hover:text-secondary  [&_a]:hover:underline">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/">Markets</Link>
//             </li>
//             <li>
//               <Link href="/">Products</Link>
//             </li>
//             <li>
//               <Link href="/">Resources</Link>
//             </li>
//             <li>
//               <Link href="/sustainability">Sustainability</Link>
//             </li>
//             <li>
//               <Link href="/">About Us</Link>
//             </li>
//             <li>
//               <Link href="/">Contact Us</Link>
//             </li>
//           </ul>

//           {/* Social Icons */}
//           <div className="flex gap-3 mt-3">
//             <Link
//               href="https://www.linkedin.com/company/avid-organics/about/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center bg-light-dark text-white w-10 h-7.5 transform skew-x-14 hover:bg-normal-dark transition-colors"
//             >
//               <CustomIcon name="linkedin" className="w-4 h-4 transform -skew-x-14" />
//             </Link>
//             <Link
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center bg-light-dark text-white w-10 h-7.5 transform skew-x-14 hover:bg-normal-dark transition-colors"
//             >
//               <CustomIcon name="twitter" className="w-4 h-4 transform -skew-x-14" />
//             </Link>
//             <Link
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center bg-light-dark text-white w-10 h-7.5 transform skew-x-14 hover:bg-normal-dark transition-colors"
//             >
//               <CustomIcon name="facebook" className="w-4 h-4 transform -skew-x-14" />
//             </Link>
//             <Link
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center bg-light-dark text-white w-10 h-7.5 transform skew-x-14 hover:bg-normal-dark transition-colors"
//             >
//               <CustomIcon name="instagram" className="w-4 h-4 transform -skew-x-14" />
//             </Link>
//             <Link
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center bg-light-dark text-white w-10 h-7.5 transform skew-x-14 hover:bg-normal-dark transition-colors"
//             >
//               <CustomIcon name="youtube" className="w-4 h-4 transform -skew-x-14" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-primary relative z-10 text-white text-sm py-3">
//         <div className="container-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] justify-between gap-10 items-start">
//           <p>© 2025 Avid Organics Pvt. Ltd.</p>
//           <div className="flex gap-4 mt-2 md:mt-0 text-white/90">
//             <Link href="/privacy-policy">Privacy Policy</Link>
//             <span>|</span>
//             <Link href="/terms-of-use">Terms of Use</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import {
  CALL_URL,
  EMAIL,
  EMAIL_URL,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/app/constant";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CustomIcon } from "../ui/custom-icon";

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden z-0">
      <div className="absolute inset-0 bg-no-repeat bg-[url('/images/footer-map-bg.png')] bg-cover bg-center -z-10"></div>
      <div className="relative container-inner pt-10.5 pb-19 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {/* Left Section */}
        <div className="max-w-80 w-full">
          <Image
            src="/logo-white.png"
            alt="GoGo Trips Logo"
            width={120}
            height={68}
            className="object-contain"
          />
          <h3 className="font-semibold mt-4 mb-3">Fly Smarter. Travel Better.</h3>

          <p className="text-sm font-light mb-3 leading-relaxed">
            Your journey matters, and so does who books it for you.
          </p>
          <p className="text-sm mb-13 font-light leading-relaxed">
            Unpublished fares, real humans, and priority support… that’s the GoGo Trips advantage.
          </p>
          {/* <div className="flex items-center gap-1.5 text-gray-200">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover:text-black duration-300 transition-colors"
            >
              <CustomIcon name="instagram" className="size-4.5" />
            </Link>
            <Separator orientation="vertical" className="h-3! bg-white/50" />
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover:text-black duration-300 transition-colors"
            >
              <CustomIcon name="twitter" className="size-4.5" />
            </Link>
            <Separator orientation="vertical" className="h-3! bg-white/50" />
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover:text-black duration-300 transition-colors"
            >
              <CustomIcon name="linkedin" className="size-4.5" />
            </Link>
            <Separator orientation="vertical" className="h-3! bg-white/50" />
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover:text-black duration-300 transition-colors"
            >
              <CustomIcon name="facebook" className="size-4.5" />
            </Link>
          </div> */}
        </div>

        {/* Middle Section */}
        <div className="max-w-56 w-full">
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <p className="text-sm mb-4 leading-relaxed">
            Address: 8 The Green, Suite B, Dover, Delaware - 19901
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Link
                href={CALL_URL}
                className="flex items-center gap-2 hover:underline transition-all duration-200"
              >
                <Phone className="w-4 h-4" /> {PHONE_NUMBER}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline transition-all duration-200"
              >
                <CustomIcon name="whatsapp" className="size-4" /> {WHATSAPP_NUMBER}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href={EMAIL_URL}
                className="flex items-center gap-2 hover:underline transition-all duration-200"
              >
                <Mail className="w-4 h-4" /> {EMAIL}
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <Link href="#">Terms And Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} GoGo Trips. All Rights Reserved.
      </div> */}
    </footer>

  );
}

// "use client";

// import { CALL_URL, EMAIL, EMAIL_URL, PHONE_NUMBER } from "@/app/constant";
// import { FacebookIcon, InstagramIcon, LinkedinIcon, LocationEdit, Mail, Phone, TwitterIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";


// function Footer() {
//   return (
//     <div >
//       <footer className="bg-[#254165] text-white py-6 px-4 md:px-12 sm:px-4">
//         <div className="xs:px-4 grid grid-cols-12 gap-y-10 md:gap-2">
//           {/* Footer Logo */}
//           <div className="col-span-12 sm:col-span-6 md:col-span-2">
//             <Image
//               src="/logo-white.png"
//               alt="GoGo Trips Logo"
//               width={120}
//               height={68}
//               className="object-contain"
//             />
//           </div>
//           {/* Links */}
//           <div className="col-span-12 xs:col-span-6 md:col-span-2">
//             <h2 className="text-base sm:text-xl font-semibold mb-2"> Links</h2>
//             <ul>
//               <li className="mb-1"><a href="/" className="hover:underline">Home</a></li>
//               <li className="mb-1"><a href="/" className="hover:underline">About Us</a></li>
//               <li className="mb-1"><a href="/" className="hover:underline">Services</a></li>
//               <li className="mb-1"><a href="/" className="hover:underline">Tours</a></li>
//               <li className="mb-1"><a href="/" className="hover:underline">Gallery</a></li>
//               <li className="mb-1"><a href="/" className="hover:underline">Contact</a></li>
//             </ul>
//           </div>
//           {/* Contact Info */}
//           <div className="col-span-12 xs:col-span-6 md:col-span-3">
//             <h2 className="text-base sm:text-xl font-semibold mb-2"> Contact Us</h2>
//             <Link href="/" className="flex flex-row gap-2 sm:grid-cols-2">
//             <LocationEdit className="w-4 h-4" /> 8 The Green, Suite B, Dover,<br />Delaware - 19901
//             </Link>
//             <Link href={CALL_URL} className="flex items-center gap-2 hover:underline">
//               <Phone className="w-4 h-4" />Phone: {PHONE_NUMBER}
//             </Link>

//             <Link href={EMAIL_URL} className="flex items-center gap-2 hover:underline">
//              <Mail className="w-4 h-4" />Email: {EMAIL}
//             </Link>
//           </div>
//           {/* follow Us */}
//           <div className="col-span-12 sm:col-span-6 md:col-span-4">
//             <h2 className="text-xl font-semibold mb-2"> Newsletter</h2>
//             <p className="mb-3">Subscribe to our newsletter to get the latest updates.</p>
//             <div className="flex flex-col xs:flex-row max-xs:gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="p-2 border bg-transparent focus:outline-none" />
//               <button className="xs:ml-2 p-2 border bg-transparent text-white">Subscribe</button>
//             </div>
//             <h2 className="text-xl font-semibold mb-2 mt-4"> Follow Us :</h2>
//             <div className="flex space-x-4 text-2xl">
//               <FacebookIcon className="w-4 h-4" />
//               <InstagramIcon className="w-4 h-4" />
//               <LinkedinIcon className="w-4 h-4" />
//               <TwitterIcon className="w-4 h-4" />
//             </div>
//           </div>
//         </div>
//         <hr className="my-6 border-white/20" />
//         <p className="text-center text-lg">&copy; 2025 GogoTrip. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Footer;


