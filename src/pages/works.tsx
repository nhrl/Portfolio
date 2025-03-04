import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Card from "../components/card";
import Tags from "../components/tags";
import { 
  icb, fundflow, pgc_ecom, pgc_erp, 
  Typescript, Next, Node, Supabase, 
  ReactNative, Expo, SQLite, Angular,
  MySQL, Laravel, Firebase, VB,
  ccs_erp, ccs_ecomm} from "../assets";


const projects = [
  { image: icb, 
    title: "ICB Gym Fitness Assistant", 
    tags:[{ svg: Typescript, name: "TypeScript" }, 
          { svg: Next, name: "Next.js" }, 
          { svg: Node, name: "Node.js" }, 
          { svg: Supabase, name: "Supabase" }
        ]
  },
  { 
    image: fundflow, 
    title: "FundFlow", 
    tags: [
      { svg: ReactNative, name: "React Native" }, 
      { svg: SQLite, name: "SQLite" }, 
      { svg: Expo, name: "Expo" }
    ] 
  },
  {
    image: pgc_ecom,
    title: "PlayGround Central E-comm",
    tags:[
      { svg: Angular, name: "Angular"},
      { svg: Typescript, name: "TypeScript"},
      { svg: MySQL, name: "MySQL"},
      { svg: Laravel, name: "Laravel"}
    ]
  },
  {
    image: pgc_erp,
    title: "PlayGround Central ERP",
    tags:[
      { svg: Angular, name: "Angular"},
      { svg: Typescript, name: "TypeScript"},
      { svg: MySQL, name: "MySQL"},
      { svg: Laravel, name: "Laravel"}
    ]
  },
  {
    image: ccs_erp,
    title: "Construction ERP",
    tags:[
      { svg: VB, name: "Visual Basic"},
      { svg: Firebase, name: "Firebase"},
    ]
  },
  {
    image: ccs_ecomm,
    title: "Construction E-comm",
    tags:[
      { svg: Angular, name: "Angular"},
      { svg: Firebase, name: "Firebase"},
      { svg: Laravel, name: "Laravel"}
    ]
  }
];

function Works() {
  
  return (
    <section id="works-section" className="container">
      <div className="flex justify-center">
        <h1 className="text-[clamp(2rem,3cqw,3rem)] font-bold text-[#0D9488]">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-30 md:gap-y-40 gap-x-5 pt-20 lg:pt-30 [@media(min-width:1400px)]:px-30 overflow-y-hidden">
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
              className="flex items-center flex-col"
            >
              <Card image={project.image} title={project.title} />
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 [@media(max-width:360px)]:px-[10px] mt-5">
                {project.tags.map((tag, tagIndex) => (
                  <Tags key={tagIndex} svg={tag.svg} name={tag.name} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Works;
