import "../App.css"
import videoBg from "../assets/videos/2611250-uhd_3840_2160_30fps.mp4"
function Hero() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-white z-10 container mx-auto px-6 py-4 flex justify-center">
        <div>
          <p className="pl-1 lg:pl-3 text-[14px] font-medium md:text-[20px] lg:text-[25px]">Hi 👋, I'm Nhoriel Balenzua</p>
          <h1 className="font-bold inter text-5xl md:text-7xl lg:text-9xl">Software</h1>
          <h1 className="font-bold custom-font text-7xl md:text-[120px] lg:text-[170px] stroke-text">Developer</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero;