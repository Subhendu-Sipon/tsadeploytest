import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const FixedSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { scale: 0.7 },
      {
        scale: 0.98,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "500 600",
          scrub: true,
          markers: false,
          onToggle: (self) => console.log("toggled, isActive:", self.isActive),
          onUpdate: (self) => {
            console.log(
              "progress:",
              self.progress.toFixed(3),
              "direction:",
              self.direction
            );
          },
        },
      }
    );
  }, [ref]);

  return (
    <div ref={ref} style={{ height: "100vh", backgroundColor: "blue" }}>
      <video src={require('@/assets/ScrollAnimation.webm')} autoPlay loop muted  />
    </div>
  );
};

export default FixedSection;
