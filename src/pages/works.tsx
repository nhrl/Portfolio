import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../components/card";
import Tags from "../components/tags";
import { icb, fundflow, Typescript, Next, Node, Supabase, ReactNative, Expo, SQLite } from "../assets";


function Works() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("works-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="works-section" className="container">
      <div className="flex justify-center">
        <h1 className="text-[clamp(2rem,3cqw,3rem)] font-bold text-[#0D9488]">Projects</h1>
      </div>
      <div className="flex flex-col gap-y-10 items-center px-8 lg:flex-row lg:justify-between pt-13 [@media(min-width:1400px)]:px-30">
        <div className="flex items-center flex-col">
          <Card image={icb} title="ICB Gym Fitness Assistant"/>
          <div className="grid grid-cols-2 w-4/5 gap-y-3 gap-x-12 md:gap-x-11 lg:gap-x-5 py-5">
            <Tags svg={Typescript} name="TypeScript"/>
            <Tags svg={Next} name="Next.js"/>
            <Tags svg={Node} name="Node.js"/>
            <Tags svg={Supabase} name="Supabase"/>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <Card image={fundflow} title="FundFlow"/>
          <div className="grid grid-cols-2 w-4/5 gap-y-3 gap-x-12 md:gap-x-11 lg:gap-x-5 py-5">
            <Tags svg={ReactNative} name="React Native"/>
            <Tags svg={SQLite} name="SQLite"/>
            <Tags svg={Expo} name="Expo"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
