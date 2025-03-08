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
    {svg:express, name:"Express.js"},
]

const devTools = [
    {svg:git, name:"Git"},
    {svg:vscode, name:"VsCode"},
    {svg:postman, name:"Postman"},
]

function Tech() {
    return (
      <section className="container mt-20">
        <div className="flex items-center flex-col">
          <div className="flex justify-center">
              <h1 className="text-[clamp(2rem,3cqw,3rem)] font-bold text-[#0D9488]">Tech Stack</h1>
          </div>
          <div className="w-full px-4 md:px-0 md:w-5/6">
            <h2 className="text-white text-[clamp(1rem,1.3cqw,2rem)] font-bold">Frontend</h2>
            <div className="lg:mx-3 flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start mt-4 w-full">
                {frontend.map((tech,index) => (
                  <Tags key={index} svg={tech.svg} name={tech.name} />
                ))}
            </div>
          </div>
          <div className="w-full px-4 md:px-0 md:w-5/6 mt-6">
            <h2 className="text-white text-[clamp(1rem,1.3cqw,2rem)] font-bold">Backend</h2>
            <div className="lg:mx-3 flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start mt-4 w-full">
                {backend.map((tech,index) => (
                  <Tags key={index} svg={tech.svg} name={tech.name} />
                ))}
            </div>
          </div>
          <div className="w-full px-4 md:px-0 md:w-5/6 mt-6 mb-10">
            <h2 className="text-white text-[clamp(1rem,1.3cqw,2rem)] font-bold">Developer Tools</h2>
            <div className="lg:mx-3 flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start mt-4 w-full">
                {devTools.map((tech,index) => (
                  <Tags key={index} svg={tech.svg} name={tech.name} />
                ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Tech