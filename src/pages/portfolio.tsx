import Navigation from "../components/navigation"
import Hero from '../components/hero'
import Works from "../components/works"
import Tech from "../components/tech"

function Portfolio () {
  return (
    <>
      <Navigation/> 
      <div id="hero"><Hero /></div>
      <div id="works"><Works /></div>
      <div id="tech"><Tech /></div>
    </>
  )
}

export default Portfolio