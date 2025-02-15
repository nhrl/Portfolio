import Navigation from "../components/navigation"
import Hero from '../components/hero'
import Works from "../components/works"

function Portfolio () {
  return (
    <>
      <Navigation/> 
      <div id="hero"><Hero /></div>
      <div id="works"><Works /></div>
    </>
  )
}

export default Portfolio