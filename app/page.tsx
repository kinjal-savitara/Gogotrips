import HeroSection from "@/components/hero/HeroSection";
import FaqSection from "@/components/home/sections/FaqSection";
import FeaturesSection from "@/components/home/sections/FeaturesSection";
import JoinVIPList from "@/components/home/sections/JoinVIPList";
import RoutesSection from "@/components/home/sections/RoutesSection";
import Testimonials from "@/components/home/sections/Testimonials";
import TrustSection from "@/components/home/sections/TrustSection";
import Modal from "@/components/scroll modal/Modal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RoutesSection />
      <TrustSection />
      <Testimonials />
      <FaqSection />
     <Modal/>
      <JoinVIPList />
      
      {/* <OurMarkets />
      <OurKeyProducts />
      <BeganSection />
      <StatsSection />
      <GlobalPresence />
      <PressReleasesSection /> */}
    </>
  );
}
