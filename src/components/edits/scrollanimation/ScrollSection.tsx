import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./ScrollSection.css";


function ScrollSection() {
  const mainRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.to(childRef.current, {
      y: -500,
      x: 720,
      z: 80,
      rotate: 900,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        markers:true,
      },
    });

  });


  return (
    <div>
    <div className="h-screen bg-purple-600"></div>
    
    <div ref={mainRef} className="h-screen w-full bg-pink-400">
    </div>
    <div ref={childRef} className="absolute bg-cyan-200 z-10 h-[100px] w-[80px]">STAR
      </div>
    
    <div className="h-screen bg-purple-600"></div>
    </div>
    
  );
}

export default ScrollSection;