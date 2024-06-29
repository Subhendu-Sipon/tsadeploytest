import React from "react";
import LogoMarquee from "../ui/logo-marquee";

const LogoMarqueeDemo = () => {
  return (
    <div className="h-full w-full text-center ">
      <div className="bg-gradient-to-t from-slate-950 to-slate-900 w-full text-center p-4 ">
        <h1 className="mt-20 text-[50px] md:text-6xl font-bold dark:text-white masked-heading ">
          The clients we deal with
        </h1>
        <div className="marquee-container ">
          <LogoMarquee />
        </div>
      </div>
    </div>
  );
};

export default LogoMarqueeDemo;
