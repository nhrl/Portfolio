import Navigation from "./navigation"
import Hero from './hero'
import Works from "./works"
import Tech from "./tech"

function Portfolio () {
  return (
    <>
      <Navigation/> 
      <div id="hero" className="w-full flex justify-center"><Hero /></div>
      <div id="works" className="w-full flex justify-center"><Works /></div>
      <div id="tech"><Tech /></div>
    </>
  )
}

export default Portfolio