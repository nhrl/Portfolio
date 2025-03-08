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
    <section id="works-section" className="container mb-15">
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
              className="flex items-center flex-col  pt-2 pb-2"
            >
              {/* Image and Title Section */}
              <Card image={project.image} title={project.title} description={project.description}/>
              {/* Tags Section */}
              <div className="w-[370px] mt-7 [@media(max-width:360px)]:w-[280px]">
                <h2 className="text-white font-bold">Tech Used</h2>
              </div>  
              <div className="grid grid-cols-2 gap-x-3 gap-y-3 [@media(max-width:360px)]:px-[10px] mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <Tags key={tagIndex} svg={tag.svg} name={tag.name} />
                ))}
              </div>

              {/* Link Section */}
              <div className="w-[370px] mt-4 flex flex-col [@media(max-width:360px)]:w-[280px]">
                <h2 className="text-white font-bold">Project Link</h2>
                <div className="w-full flex justify-center">
                  <div className="flex justify-center gap-6 p-2">
                  {project.links
                    .filter(link => link.web || link.github)
                    .map((link, linkIndex) => (
                      <div key={`link-${linkIndex}`} className="flex gap-4">
                        {link.web && (
                          <a 
                            href={link.web} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#0D9488] hover:underline text-sm"
                          >
                            Live Demo
                          </a>
                        )}
                        {link.github && (
                          <a 
                            href={link.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#0D9488] hover:underline text-sm"
                          >
                            GitHub Repo
                          </a>
                        )}
                      </div>
                  ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Works;
