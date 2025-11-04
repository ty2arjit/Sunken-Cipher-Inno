import React from "react";
import HeroContent from "../sub/HeroContent";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center h-full w-full" id="about-me">
        <Navbar/>
        <StarsCanvas /> 
      <video
        autoPlay
        muted
        loop
        className="absolute top-10 h-screen w-full left-0 z-[1] object-cover "
      >
        <source src="/Final_landing_page.mp4" type="video/mp4" />
      </video>
      <HeroContent />

    
    </div>
  );
};

export default Hero;