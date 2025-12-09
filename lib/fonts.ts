import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Assign a CSS variable name
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify desired weights
});
