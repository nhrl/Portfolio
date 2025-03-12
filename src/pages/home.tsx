import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiGraphql } from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";

import Tags from "../components/tags";
import { 
  Typescript, Next, Node, 
  ReactNative, Angular,
  MySQL, Laravel, Js,
  Tailwind, Vite, postgree, express,
  postman, git, vscode} from "../assets";

const frontend = [
    {svg:Typescript, name:"TypeScript"},
    {svg:Js, name:"JavaScript"},
    {svg:Angular, name:"Angular"},
    {svg:ReactNative, name:"React"},
    {svg:Tailwind, name:"Tailwind"},
    {svg:Next, name:"Next.js"},
    {svg:Vite, name:"Vite"},
]

const backend = [
    {svg:Node, name:"Node.js"},
    {svg:Laravel, name:"Laravel"},
    {svg:MySQL, name:"MySQL"},
    {svg:postgree, name:"PostgreSQL"},
    {svg:express, name:"Express.js"},
    {svg:<TbApi size={24}/>, name:"REST"},
    {svg:<SiGraphql size={24} color="#f5009b"/>, name:"GraphQL"},
]

const devTools = [
    {svg:git, name:"Git"},
    {svg:vscode, name:"VsCode"},
    {svg:<FaGithub size={24}/>, name:"Github"},
    {svg:postman, name:"Postman"},
    {svg:<RiRobot2Line size={24}/>, name:"ChatGPT"}
]

function Home() {
  return (
    <>
    <section className="mt-2 flex flex-col md:flex-row gap-2">
        <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 border-[1px] border-gray-300 dark:border-[#232323] p-2 rounded-lg bg-[#ffffff] dark:bg-[#161716] transition duration-300">
                <div className="flex items-center gap-2 p-2">
                    <ImProfile size={22}/>
                    <h1 className="font-medium text-xl">About</h1>
                </div>
                <div className="mx-2 text-[15px] mt-2">
                    <p className="pb-2">I am a fresh graduate and a web and mobile developer focused on building functional and well-structured applications using <span className=" text-[#0D9488]">React</span>, <span className=" text-[#0D9488]">Node.js</span>, and <span className=" text-[#0D9488]">TypeScript</span>. I have experience working with both frontend and backend technologies.</p>
                    <p className="pb-2">I enjoy solving problems and writing clean, maintainable code. Whether working solo or in a team, I focus on creating reliable and efficient applications.</p>
                    <p>In my free time, I explore new technologies, work on side projects and read books.</p>
                </div>
            </div>
            <div className="flex-1 border-[1px] border-gray-300 dark:border-[#232323] p-2 rounded-lg bg-[#ffffff] dark:bg-[#161716] transition duration-300">
                <div className="flex items-center gap-2 p-2">
                    <MdPermPhoneMsg size={20}/>
                    <h1 className="font-medium text-xl">Contact</h1>
                </div>
                <a href="mailto:nhorielbalenzua1@gmail.com">
                    <div className="rounded-md border-[1px]  hover:bg-gray-100 border-gray-300 hover:border-[#0c0c0c] dark:border-[#232323] dark:hover:border-[#6d6c6c]  dark:hover:bg-[#161716] p-2 mx-10 flex flex-col justify-center cursor-pointer">
                        <h2>Email</h2>
                        <h2>nhorielbalenzua1@gmail.com</h2>
                    </div>
                </a>
                <div className="mt-5 flex items-center gap-2 p-2">
                    <CgProfile size={22}/>
                    <h1 className="font-medium text-xl">Socials</h1>
                </div>
                <div className="flex mx-2 justify-center gap-10 mt-3 mb-5 md:pb-0">
                    <a href="https://github.com/nhrl" aria-label="link-to-github" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-900 dark:text-white cursor-pointer" size={22} />
                    </a>
                    <a href="http://www.linkedin.com/in/nhoriel-balenzua" aria-label="link-to-linkedIn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-gray-900 dark:text-white cursor-pointer" size={22} />
                    </a>
                </div>
            </div>
        </div>
        <div className="flex-1 border-[1px] border-gray-300 dark:border-[#232323] p-2 rounded-lg bg-[#ffffff] dark:bg-[#161716] transition duration-300">
            <div className="flex flex-col">
                <div className="flex items-center gap-2 p-2">
                    <RiStackLine size={24}/>
                    <h1 className="font-medium text-xl">Tech Stack</h1>
                </div>
                <div className="p-2 font-medium mt-2">
                    <h1>Frontend</h1>
                    <div className="flex flex-wrap gap-2 pl-1 mt-1">
                        {frontend.map((tech,index) => (
                            <Tags key={index} svg={tech.svg} name={tech.name} />
                        ))}
                    </div>
                </div>
                <div className="p-2 font-medium mt-2">
                    <h1>Backend</h1>
                    <div className="flex flex-wrap gap-2 pl-1 mt-1">
                        {backend.map((tech,index) => (
                            <Tags key={index} svg={tech.svg} name={tech.name} />
                        ))}
                    </div>
                </div>
                <div className="p-2 font-medium mt-2">
                    <h1>Developer Tools</h1>
                    <div className="flex flex-wrap gap-2 pl-1 mt-1">
                        {devTools.map((tech,index) => (
                            <Tags key={index} svg={tech.svg} name={tech.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;
