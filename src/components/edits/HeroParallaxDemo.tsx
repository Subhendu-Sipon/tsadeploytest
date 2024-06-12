"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import ProjectImg1 from "@/assets/projectimg/projectimg1.jpg";
import ProjectImg2 from "@/assets/projectimg/projectimg2.jpg";
import ProjectImg3 from "@/assets/projectimg/projectimg3.jpg";
import ProjectImg4 from "@/assets/projectimg/projectimg4.jpg";
import ProjectImg5 from "@/assets/projectimg/projectimg5.jpg";
import ProjectImg6 from "@/assets/projectimg/projectimg6.jpg";
import ProjectImg7 from "@/assets/projectimg/projectimg7.jpg";
import ProjectImg8 from "@/assets/projectimg/projectimg8.jpg";
import ProjectImg9 from "@/assets/projectimg/projectimg9.jpg";
import ProjectImg10 from "@/assets/projectimg/projectimg10.jpg";

export const HeroParallaxDemo = () => {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: ProjectImg1.src,
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: ProjectImg2.src,
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: ProjectImg3.src,
    },
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: ProjectImg4.src,
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: ProjectImg5.src,
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: ProjectImg6.src,
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: ProjectImg7.src,
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: ProjectImg8.src,
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: ProjectImg9.src,
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: ProjectImg10.src,
    },
  ];

  return <HeroParallax products={products} />;
};

export default HeroParallaxDemo;
