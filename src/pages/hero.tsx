import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const zoomLevel = window.devicePixelRatio;

      if (zoomLevel < 1) {
        // If zoomed out, limit height
        setHeight("800px");
      } else {
        // Otherwise, use full screen height
        setHeight("100vh");
      }
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeInOut" }} 
      style={{ height }}
      className="text-white z-10 container mx-autopy-4 flex justify-center items-center"
    >
      <div>
        <motion.p
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="pl-1 inter lg:pl-3 text-[13px] font-medium md:text-[18px] lg:text-[25px]"
        >
          Hi 👋, I'm Nhoriel Balenzua
        </motion.p>

        <div className="flex">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-bold inter flex items-end text-3xl md:text-[60px] lg:text-[86px] text-[#0D9488]"
          >
            SOFTWARE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full flex items-center mt-[5px] md:mt-[9px] lg:mt-[30px] pl-2 gap-2 lg:pl-4"
          >
            <svg className="cursor-pointer w-[15px] h-[15px] md:w-[30px] md:h-[30px]" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.625V24.625H24V0.625H0ZM20.42 3.29167L12 13.4917L3.58 3.29167H20.42ZM2 4.97167L5.93 9.73167L2 18.4783V4.97167ZM2.77 21.9583L7.44 11.5717L12 17.0917L16.56 11.5717L21.23 21.9583H2.77ZM22 18.4783L18.07 9.73167L22 4.97167V18.4783Z" fill="white"/>
            </svg>
            <a href="https://github.com/nhrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Repository">
              <svg className="cursor-pointer w-[15px] h-[15px] md:h-[30px] md:w-[30px]" 
                    viewBox="0 0 15 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" 
                      d="M7.48315 0C3.34871 0 0 5.50583 0 12.3035C0 17.7478 2.14205 22.3463 5.1166 23.9765C5.49076 24.0842 5.63107 23.715 5.63107 23.3921C5.63107 23.0999 5.62172 22.131 5.62172 21.1005C3.74158 21.6696 3.25517 20.347 3.10551 19.6549C3.02132 19.3012 2.65652 18.2092 2.33848 17.917C2.07657 17.6863 1.70242 17.1173 2.32913 17.1019C2.91843 17.0865 3.33936 17.9939 3.47967 18.363C4.15315 20.2239 5.22885 19.701 5.65913 19.3781C5.72461 18.5783 5.92104 18.04 6.13618 17.7325C4.47118 17.4249 2.73135 16.3637 2.73135 11.6576C2.73135 10.3196 3.02132 9.21227 3.49837 8.35102C3.42354 8.04343 3.16163 6.78232 3.5732 5.09058C3.5732 5.09058 4.19992 4.76762 5.63107 6.3517C6.22972 6.07487 6.86579 5.93645 7.50186 5.93645C8.13793 5.93645 8.774 6.07487 9.37265 6.3517C10.8038 4.75224 11.4305 5.09058 11.4305 5.09058C11.8421 6.78232 11.5802 8.04343 11.5053 8.35102C11.9824 9.21227 12.2724 10.3042 12.2724 11.6576C12.2724 16.3791 10.5232 17.4249 8.85818 17.7325C9.12944 18.1169 9.36329 18.8552 9.36329 20.0086C9.36329 21.6542 9.35394 22.9768 9.35394 23.3921C9.35394 23.715 9.49425 24.0995 9.86841 23.9765C11.3539 23.1519 12.6448 21.5822 13.5593 19.4882C14.4738 17.3942 14.9659 14.8814 14.9663 12.3035C14.9663 5.50583 11.6176 0 7.48315 0Z" 
                      fill="white"/>
              </svg>
            </a>
            <svg className="cursor-pointer w-[15px] h-[15px] md:h-[30px] md:w-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186658 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186658 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.39269 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z" fill="white"/>
            </svg>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-bold custom-font text-5xl md:text-[100px] lg:text-[145px] stroke-text"
        >
          DEVELOPER
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default Hero;
