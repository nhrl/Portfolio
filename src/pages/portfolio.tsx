import { useEffect, useState } from "react";
import Works from "./works";
import Tech from "./tech";
import Home from "./home";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

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
      <div className="absolute top-10 right-6 lg:top-4 z-50">
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

      {/* Page Content */}
      <div className="w-full flex justify-center">
        <div className="max-w-4xl mx-auto px-4 py-8 w-4xl">
          <Home />
        </div>
      </div>

      <div id="works" className="w-full flex justify-center"><Works /></div>
      <div id="tech" className="w-full flex justify-center"><Tech /></div>
    </div>
  );
}

export default Portfolio;
