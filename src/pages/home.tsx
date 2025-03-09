import { FaGithub } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { MdPermPhoneMsg } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import Tags from "../components/tags";
import { 
  Typescript, Next, Node, 
  ReactNative, Angular,
  MySQL, Laravel, Js,
  Tailwind, Vite, php, postgree, express, bootsrap,
  postman, git, vscode} from "../assets";

const frontend = [
    {svg:Typescript, name:"TypeScript"},
    {svg:Js, name:"JavaScript"},
    {svg:Angular, name:"Angular"},
    {svg:ReactNative, name:"React"},
    {svg:Tailwind, name:"Tailwind"},
    {svg:Next, name:"Next.js"},
    {svg:Vite, name:"Vite"},
    {svg:bootsrap, name:"Bootstrap"},
]

const backend = [
    {svg:Node, name:"Node.js"},
    {svg:php, name:"PHP"},
    {svg:Laravel, name:"Laravel"},
    {svg:MySQL, name:"MySQL"},
    {svg:postgree, name:"PostgreSQL"},
    {svg:<TbApi size={24}/>, name:"REST"},
    {svg:express, name:"Express.js"},
]

const devTools = [
    {svg:git, name:"Git"},
    {svg:vscode, name:"VsCode"},
    {svg:<FaGithub size={24}/>, name:"Github"},
    {svg:postman, name:"Postman"},
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
                    <p className="pb-2">I am a fresh graduate and a web and mobile developer who builds functional applications. I work with frontend and backend technologies like React, Angular, Next.js, Node.js, Laravel, and MySQL.</p>
                    <p className="pb-2">I enjoy solving problems and writing clean, maintainable code. Whether working solo or in a team, I focus on creating reliable and efficient applications.</p>
                    <p>In my free time, I explore new technologies and work on side projects.</p>
                </div>
            </div>
            <div className="flex-1 border-[1px] border-gray-300 dark:border-[#232323] p-2 rounded-lg bg-[#ffffff] dark:bg-[#161716] transition duration-300">
                <div className="flex items-center gap-2 p-2">
                    <MdPermPhoneMsg size={20}/>
                    <h1 className="font-medium text-xl">Contact</h1>
                </div>
                <a href="mailto:nhorielbalenzua1@gmail.com">
                    <div className="rounded-md border-[1px] bg-gray-200 dark:bg-[#202020] dark:border-[#232323] p-2 mx-10 flex flex-col justify-center cursor-pointer">
                        <h2>Email</h2>
                        <h2>nhorielbalenzua1@gmail.com</h2>
                    </div>
                </a>
                <div className="mt-10 flex items-center gap-2 p-2">
                    <CgProfile size={22}/>
                    <h1 className="font-medium text-xl">Socials</h1>
                </div>
                <div className="flex mx-2 justify-center gap-10 mt-3 pb-3 md:pb-0">
                    <FaFacebook size={24} className="cursor-pointer"/>
                    <FaInstagram size={24} className="cursor-pointer"/>
                    <FaTiktok size={24} className="cursor-pointer"/>
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
