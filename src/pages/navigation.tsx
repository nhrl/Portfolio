import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle
import logo from "../assets/pictures/logoF.png"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Navbar visibility state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true); // Show navbar after scrolling 100px
      } else {
        setIsVisible(false); // Hide navbar when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-black shadow-md z-50 text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-3 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#"><img className="h-[20px] cursor-pointer md:h-[30px]" loading="lazy" src={logo} alt="Logo" /></a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#hero" className="hover:text-[#0D9488]">Home</a></li>
          <li><a href="#works" className="hover:text-[#0D9488]">Works</a></li>
          <li><a href="#tech" className="hover:text-[#0D9488]">Skills</a></li>
          <li><a href="#contact" className="hover:text-[#0D9488]">Contact</a></li>
        </ul>
        <div className="hidden md:block">
          <button className="border-1 border-white p-2 px-4 cursor-pointer rounded-sm">Download CV</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-15 left-0 w-full bg-black shadow-md pl-7 pt-3 pb-3 flex flex-col gap-4">
          <li><a href="#hero" className="hover:text-[#0D9488]" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#works" className="hover:text-[#0D9488]" onClick={() => setIsOpen(false)}>Works</a></li>
          <li><a href="#tech" className="hover:text-[#0D9488]" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" className="hover:text-[#0D9488]" onClick={() => setIsOpen(false)}>Contact</a></li>
          <div>
            <button className="border-1 border-white p-2 px-4 cursor-pointer rounded-sm">Download CV</button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
