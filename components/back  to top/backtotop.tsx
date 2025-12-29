// components/BackToTop.js
import { useState, useEffect } from "react";

export default function BackToTop() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const toggleVisibility = () => {
         if (window.scrollY > 300) { // show after scrolling 300px
            setVisible(true);
         } else {
            setVisible(false);
         }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth", // smooth scrolling
      });
   };

   return (
      <>
         {visible && (
            <button
               onClick={scrollToTop}
               style={{
                  position: "fixed",
                  bottom: "50px",
                  right: "30px",
                  padding: "10px 15px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 1000,
                  transition: "opacity 0.3s",
               }}
            >
               ↑ Top
            </button>
         )}
      </>
   );
}
