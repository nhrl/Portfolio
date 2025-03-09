import { useEffect, useState } from "react";
import Works from "./works";
import Tech from "./tech";
import Home from "./home";
import { IoSunnyOutline, IoMoonOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profile from "../assets/pictures/profile.jpg";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-[#131312] text-white" : "bg-[#fdfcfd] text-gray-900"} transition duration-300`}>
      {/* Page Content */}
      <div className="w-full flex justify-center">
        <div className="max-w-4xl mx-auto px-4 py-8 w-4xl">
           <section className="border-[1px] border-gray-300 dark:border-[#232323] p-2 rounded-xl bg-[#ffffff] dark:bg-[#161716] transition duration-300">
                <div className="flex md:items-center gap-4">
                  <img className="[@media(max-width:360px)]:rounded-full [@media(max-width:360px)]:h-10 [@media(max-width:360px)]:w-10 rounded-lg h-30 w-30 md:h-40 md:w-40" src={profile} alt="Profile" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h1 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                        Nhoriel Balenzua
                      </h1>
                      <div className="pr-2">
                        <button
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
                      <p className="text-sm text-gray-900 dark:text-white">Dumaguete, Philippines</p>
                    </div>
                    <h2 className="font-medium mt-1.5 md:mt-2 text-gray-900 dark:text-white">
                      Web Developer / Mobile Developer
                    </h2>
                    <div className="flex gap-3 items-center mt-1.5 md:mt-2">
                      <CiMail className="text-gray-900 dark:text-white cursor-pointer" size={22} />
                      <FaGithub className="text-gray-900 dark:text-white" size={22} />
                      <FaLinkedin className="text-gray-900 dark:text-white" size={22} />
                    </div>
                  </div>
                </div>
              </section>
          <Home />
        </div>
      </div>
      <div id="works" className="w-full flex justify-center"><Works /></div>
      <div id="tech" className="w-full flex justify-center"><Tech /></div>
    </div>
  );
}

export default Portfolio;
