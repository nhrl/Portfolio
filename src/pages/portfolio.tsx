import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Works from "./works";
import Home from "./home";
import Chat from "../components/chat"
import { IoSunnyOutline, IoMoonOutline, IoLocationOutline } from "react-icons/io5";
import profile from "../assets/pictures/profile.jpg";
import { IoChatbubblesOutline } from "react-icons/io5";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-[#131312] text-white" : "bg-[#fdfcfd] text-gray-900"} transition duration-300`}
    >
      {/* Page Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        <div className="max-w-4xl mx-auto px-4 py-8 w-4xl">
          <section className="border-[1px] border-gray-300 dark:border-[#232323] p-2 rounded-xl bg-[#ffffff] dark:bg-[#161716] transition duration-300">
            <div className="flex md:items-center gap-4">
              <img
                className="[@media(max-width:360px)]:rounded-full [@media(max-width:360px)]:h-10 [@media(max-width:360px)]:w-10 rounded-lg h-30 w-30 md:h-40 md:w-40"
                src={profile}
                alt="Profile"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h1 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                    Nhoriel Balenzua
                  </h1>
                  <div className="pr-2">
                    <button
                      aria-label="dark-mode"
                      onClick={() => setDarkMode(!darkMode)}
                      className="flex cursor-pointer items-center [@media(max-width:360px)]:px-2 [@media(max-width:360px)]:py-2 px-3 py-3 rounded-4xl transition duration-300 
                              bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white"
                    >
                      {darkMode ? (
                        <IoSunnyOutline className="text-yellow-500" />
                      ) : (
                        <IoMoonOutline className="text-gray-900" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <IoLocationOutline className="text-gray-900 dark:text-white" />
                  <p className="text-sm text-gray-900 dark:text-white">
                    Dumaguete, Philippines
                  </p>
                </div>
                <h2 className="font-medium mt-1.5 md:mt-2 text-gray-900 dark:text-white">
                  Web Developer / Mobile Developer
                </h2>
                <div className="flex gap-3 items-center mt-1.5 md:mt-2">
                  <button
                    aria-label="download-cv"
                    className="border-[1px] py-2 px-3 rounded-md cursor-pointer hover:bg-gray-100 border-gray-300 hover:border-[#0c0c0c] dark:border-[#232323] dark:hover:border-[#6d6c6c] dark:hover:bg-[#161716]"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Home />
          <Works />
        </div>
        <div onClick={toggleVisibility} className="flex justify-center items-center bottom-3 right-2 md:bottom-5 md:right-5 rounded-full fixed w-13 h-13 cursor-pointer dark:bg-[#1b2535]">
          <IoChatbubblesOutline size={25}/>           
        </div>
        { visible && (
          <div className="w-5/6 fixed flex justify-end right-5 bottom-20 h-[35rem]">
            <Chat />
          </div>
        )}
        
      </motion.div>
                      
    </div>
  );
}

export default Portfolio;
