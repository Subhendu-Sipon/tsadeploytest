import React from "react";
import LogoMarquee from "../ui/logo-marquee";

const LogoMarqueeDemo = () => {
  return (
    <div className="h-full w-full text-center ">
      <div className="bg-black w-full text-center p-4 ">
        <div className="marquee-container ">
          <LogoMarquee />
        </div>
      </div>
    </div>
  );
};

export default LogoMarqueeDemo;
