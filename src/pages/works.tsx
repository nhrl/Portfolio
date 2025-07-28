import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Card from "../components/card";

import { 
  icb, fundflow, pgc_ecom, pgc_erp, 
  Typescript, Next, Node, Supabase, 
  ReactNative, Expo, SQLite, Angular,
  MySQL, Laravel, Firebase, VB,
  ccs_erp, ccs_ecomm, cinequest, } from "../assets";


const projects = [
  { image: icb, 
    title: "ICB Gym Fitness Assistant", 
    description:"ICB-GYM Assistant App is a web application designed to provide personalized workout and diet plan recommendations for customers while offering gym management features for managers.",
    tags:[{ svg: Typescript, name: "TypeScript" }, 
          { svg: Next, name: "Next.js" }, 
          { svg: Node, name: "Node.js" }, 
          { svg: Supabase, name: "Supabase" }
        ],
    links:[
      {web:"https://icb-gym.vercel.app/", github:"https://github.com/nhrl/icb-gym.git"}
    ]
  },
  {
    image: cinequest,
    title: "CineQuest",
    description: "CineQuest is a movie and TV series discovery platform built with React and Vite. It offers users the ability to browse, search, and explore movies and series, complete with detailed information and a modern, responsive UI.",
    tags: [
      { svg:Typescript, name: "TypeScript" },
      { svg:Supabase, name: "React.js" },
      { svg:Supabase, name: "Vite" },
      { svg:Supabase, name: "Tailwind CSS" },
      { svg:Supabase, name: "TMDB API" },
      { svg:Supabase, name: "Node.js" }
    ],
    links: [
      { web: "https://cine-quest-seven.vercel.app/", github: "https://github.com/nhrl/CineQuest.git" }
    ]
  },
  { 
    image: fundflow, 
    title: "FundFlow",
    description:"SK FundFlow is a mobile application designed to help barangay officials and event organizers manage and track budgets, expenses, and events efficiently.", 
    tags: [
      { svg: ReactNative, name: "React Native" }, 
      { svg: SQLite, name: "SQLite" }, 
      { svg: Expo, name: "Expo" }
    ],
    links:[
      {web:"", github:"https://github.com/nhrl/FundFlow.git"}
    ] 
  },
  {
    image: pgc_ecom,
    title: "PlayGround Central E-comm",
    description:"PGC E-commerce is an online platform for buying and selling gaming consoles, video games, and controllers",
    tags:[
      { svg: Angular, name: "Angular"},
      { svg: Typescript, name: "TypeScript"},
      { svg: MySQL, name: "MySQL"},
      { svg: Laravel, name: "Laravel"}
    ],
    links:[
      {web:"", github:"https://github.com/nhrl/PGC-E-Commerce.git"}
    ]
  },
  {
    image: pgc_erp,
    title: "PlayGround Central ERP",
    description:"Playground Central ERP is an enterprise resource planning system designed to streamline business operations for gaming and electronics retail.",
    tags:[
      { svg: Angular, name: "Angular"},
      { svg: Typescript, name: "TypeScript"},
      { svg: MySQL, name: "MySQL"},
      { svg: Laravel, name: "Laravel"}
    ],
    links:[
      {web:"", github:"https://github.com/nhrl/PGC-ERP.git"}
    ]
  },
  {
    image: ccs_erp,
    title: "Construction ERP",
    description:"Construction Supply ERP is an enterprise resource planning system designed to optimize business operations for construction supply companies.",
    tags:[
      { svg: VB, name: "Visual Basic"},
      { svg: Firebase, name: "Firebase"},
    ],
    links:[
      {web:"", github:"https://github.com/nhrl/Construction-Supplies-Desktop-Application.git"}
    ]
  },
  {
    image: ccs_ecomm,
    title: "Construction E-comm",
    description:"Construction Supply E-commerce is an online platform designed for buying and selling construction materials, tools, and equipment.",
    tags:[
      { svg: Angular, name: "Angular"},
      { svg: Firebase, name: "Firebase"},
      { svg: Laravel, name: "Laravel"}
    ],
    links:[
      {web:"", github:"https://github.com/nhrl/CCSupplies-Web-Application.git"}
    ]
  }
];

function Works() {
  
  return (
    <section id="works-section" className="container mt-20">
      <div className="flex justify-center">
        <h1 className="text-[clamp(1.9rem,2.2cqw,2.8rem)] font-medium dark:text-[#fafafa] text-[#171717]">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3 overflow-y-hidden mt-7">
        {projects.map((project, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, amount: 0.5 });
          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 50 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              className="flex items-center flex-col border-[1px] border-gray-300 dark:border-[#232323] col-span-1 rounded-xl"
            >
              {/* Image and Title Section */}
              <Card project={project}/>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Works;
