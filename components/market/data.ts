import animalImage from "@/public/images/market/animal.webp";
import foodBeverages from "@/public/images/market/food-beverages.webp";
import industry from "@/public/images/market/industry.webp";
import personalCare from "@/public/images/market/personal-care.webp";
import pharma from "@/public/images/market/pharma.webp";
import { StaticImageData } from "next/image";

export interface MarketPageData {
  hero: {
    title: string;
    subtitle: string;
    image: StaticImageData;
    className?: string;
  };
  description: string;
  solutions: {
    title: string;
    text: string;
  }[];
  productsTitle: string;
  products: {
    name: string;
    tag?: string;
    subtitle?: string;
    desc: string;
    image: string;
    link: string;
  }[];
  productButton: {
    link: string;
    text: string;
  };
}

export const marketPages: Record<string, MarketPageData> = {
  "animal-nutrition": {
    hero: {
      title: "Animal Nutrition",
      subtitle: "Optimizing Health and Performance in Animal Nutrition.",
      image: animalImage,
      className: "mt-auto",
    },
    description:
      "In animal nutrition, chemistry meets biology. Our high-purity amino acids and functional ingredients are engineered for optimal absorption, bioavailability, and metabolic efficiency, providing the essential building blocks for healthy growth and productivity.",
    solutions: [
      {
        title: "Enhanced Bioavailability",
        text: "We control for molecular integrity and solubility to ensure animals receive the intended nutritional benefit consistently.",
      },
      {
        title: "Guaranteed Stability",
        text: "Our ingredients are designed for chemical stability during feed storage, processing, and digestion.",
      },
      {
        title: "Efficient Production",
        text: "Our sustainable manufacturing processes reduce waste and energy use while ensuring product safety and performance.",
      },
    ],
    productsTitle: "Featured Avid Organics Products",
    products: [
      {
        name: "AviGly™",
        tag: "T",
        subtitle: "Glycine",
        desc: "A foundational amino acid for metabolic processes.",
        image: "/images/market/image.png",
        link: "/products/avigly",
      },
      {
        name: "AviTau™",
        subtitle: "Taurine",
        desc: "A key functional additive for health and development.",
        image: "/images/market/image15.png",
        link: "/products/avitau",
      },
    ],
    productButton: {
      link: "/",
      text: "View Our Animal Nutrition Portfolio",
    },
  },
  "food-and-beverages": {
    hero: {
      title: "Food & Beverages",
      subtitle: "Enhancing Taste, Texture, and Stability.",
      image: foodBeverages,
      className: "mt-auto",
    },
    description:
      "In the food and beverage industry, ingredients must be functional, safe, and reliable in diverse and often complex formulations. Our products are engineered to perform predictably under thermal and chemical stress, helping global manufacturers balance taste, preservation, and nutritional integrity.",
    solutions: [
      {
        title: "Consistent Performance",
        text: "Our ingredients act as precise reagents to control pH, enhance flavor, and ensure textural stability in large-scale production.",
      },
      {
        title: "Assured Food Safety",
        text: "Manufactured in our FSSC 22000 certified facility, our products meet international safety and quality standards.",
      },
      {
        title: "Sustainable Sourcing",
        text: "We are committed to responsible manufacturing, helping you create products that are better for consumers and the planet.",
      },
    ],
    productsTitle: "Featured Products",
    products: [
      {
        name: "AviVan™",
        subtitle: "Vanillin",
        desc: "A high-purity aromatic for consistent, high-impact flavor profiles.",
        image: "/images/market/image4.png",
        link: "/products/avisoft",
      },
      {
        name: "AviGly™",
        tag: "T",
        subtitle: "Glycine",
        desc: "Foundational amino acid for protein synthesis and metabolic efficiency in feed applications",
        image: "/images/market/image11.png",
        link: "/products/avihydra",
      },
      {
        name: "AviTau™",
        subtitle: "Taurine",
        desc: "Food-grade amino acid for nutritional fortification in energy beverages and functional food applications.",
        image: "/images/market/image2.png",
        link: "/products/avihydra",
      },
    ],
    productButton: {
      link: "/",
      text: "Partner with Our Food & Beverage Team",
    },
  },
  "industrial-and-specialty-applications": {
    hero: {
      title: "Industrial & Specialty Applications",
      subtitle: "Reliable Chemistry for Demanding Industrial Processes.",
      image: industry,
      className: "my-auto",
    },
    description:
      "Industrial applications demand molecules that perform predictably under high-stress conditions. Our technical-grade ingredients are optimized for controlled reactivity and process compatibility, acting as reliable reagents that catalyze efficiency and improve overall process yield.",
    solutions: [
      {
        title: "Predictable Reactivity",
        text: "Our products are engineered for consistent performance, reducing side reactions and enhancing production reliability.",
      },
      {
        title: "Process Compatibility",
        text: "We ensure our ingredients are stable and compatible with a wide range of industrial systems and processes.",
      },
      {
        title: "Sustainable Manufacturing",
        text: "Our energy-efficient processes, solvent recovery systems, and minimized waste streams support your environmental compliance goals.",
      },
    ],
    productsTitle: "Featured Products",
    products: [
      {
        name: "AviGa™",
        tag: "T",
        subtitle: "Glycolic Acid",
        desc: "A versatile acid for cleaning, descaling, and chemical synthesis.",
        image: "/images/market/image14.png",
        link: "/products/avisoft",
      },
      {
        name: "MEHQ",
        desc: "A high-purity polymerization inhibitor for process control.",
        image: "/images/market/image16.png",
        link: "/products/avihydra",
      },
      {
        name: "Chlorhexidine",
        subtitle: "Base",
        desc: "A specialty intermediate for high-performance applications.",
        image: "/images/market/image10.png",
        link: "/products/avihydra",
      },
    ],
    productButton: {
      link: "/",
      text: "View Our Animal Nutrition Portfolio",
    },
  },
  "personal-care-and-cosmetics": {
    hero: {
      title: "Personal Care & Cosmetics",
      subtitle: "High-Purity Active Ingredients for Performance",
      image: personalCare,
      className: "ml-auto mt-auto",
    },
    description:
      "In personal care, molecules interact directly with skin, hair, and formulations. Our Glycolic Acids, Amino Acids, and specialty intermediates are designed for controlled activity, predictable reactivity, and long-term stability in complex cosmetic matrices. We treat each formulation as a micro-laboratory, carefully balancing pH, solubility, and compatibility to ensure efficacy, safety, and sensory performance.",
    solutions: [
      {
        title: "Controlled Activity",
        text: "We engineer our molecules for predictable reactivity, ensuring consistent performance in anti-aging serums, exfoliating peels, and other active formulations.",
      },
      {
        title: "Formulation Stability",
        text: "Our ingredients are designed for long-term stability in complex cosmetic matrices, balancing pH, solubility, and compatibility to protect your product's integrity.",
      },
      {
        title: "Uncompromising Purity",
        text: "We deliver ingredients that meet the highest standards for skin safety, giving you and your customers complete confidence.",
      },
    ],
    productsTitle: "Featured Products",
    products: [
      {
        name: "AviGa™",
        tag: "HP",
        subtitle: "Glycolic Acid",
        desc: "The industry benchmark for high-purity exfoliation and rejuvenation.",
        image: "/images/market/image7.png",
        link: "/products/avisoft",
      },
      {
        name: "Chlorhexidine",
        subtitle: "Base",
        desc: "A high-purity antimicrobial base for personal care preservative systems.",
        image: "/images/market/image7.png",
        link: "/products/avihydra",
      },
      {
        name: "AviGly™",
        tag: "HP",
        subtitle: "Glycine USP",
        desc: "High-purity amino acid for skin conditioning, pH buffering, and formulation stabilization in cosmetic systems.",
        image: "/images/market/image8.png",
        link: "/products/avisoft",
      },
      {
        name: "AviTau™",
        subtitle: "Taurine",
        desc: "Antioxidant amino acid for anti-aging and protective skincare formulations.",
        image: "/images/market/image9.png",
        link: "/products/avisoft",
      },
      {
        name: "AviVan™",
        subtitle: "Vanillin",
        desc: "High-purity aromatic compound providing characteristic vanilla fragrance.",
        image: "/images/market/image12.png",
        link: "/products/avisoft",
      },
    ],
    productButton: {
      link: "/",
      text: "Discuss Your Formulation Challenge",
    },
  },
  pharmaceuticals: {
    hero: {
      title: "Pharmaceuticals",
      subtitle: "Purity and Compliance for Pharmaceutical Innovation.",
      image: pharma,
      className: "ml-auto mt-auto",
    },
    description:
      "The pharmaceutical market demands the highest standards of purity, reproducibility, and regulatory compliance. Our ingredients are manufactured in a certified environment to serve as reliable building blocks for APIs, excipients, and nutraceuticals, supported by comprehensive documentation to ensure a smooth path to market.",
    solutions: [
      {
        title: "Stringent Quality Standards",
        text: "We manufacture ingredients designed to meet stringent USP and other global pharmacopeia standards.",
      },
      {
        title: "Formulation Stability",
        text: "Our processes ensure the precise molecular composition required for predictable therapeutic outcomes and bioavailability.",
      },
      {
        title: "Uncompromising Purity",
        text: "We provide ingredients and documentation that give our partners confidence for distribution across international healthcare markets.",
      },
    ],
    productsTitle: "Featured Avid Organics Products",
    products: [
      {
        name: "AviGly™",
        tag: "HP",
        subtitle: "Glycine",
        desc: "High-purity, USP-grade Glycine for APIs and critical formulations.",
        image: "/images/market/image3.png",
        link: "/products/avisoft",
      },
      {
        name: "AviTau™",
        subtitle: "Taurine",
        desc: "A stable, high-purity amino acid for pharmaceutical and nutraceutical applications.",
        image: "/images/market/image13.png",
        link: "/products/avihydra",
      },
      {
        name: "Chlorhexidine",
        subtitle: "Base",
        desc: "A high-purity intermediate for active ingredient synthesis.",
        image: "/images/market/image5.png",
        link: "/products/avisoft",
      },
      {
        name: "Guaiacol",
        desc: "A versatile intermediate for pharmaceutical synthesis.",
        image: "/images/market/image6.png",
        link: "/products/avisoft",
      },
      {
        name: "MEHQ",
        desc: "Pharmaceutical-grade intermediate for API synthesis and antioxidant drug development.",
        image: "/images/market/image1.png",
        link: "/products/avisoft",
      },
    ],
    productButton: {
      link: "/",
      text: "Request Regulatory Information",
    },
  },
};
