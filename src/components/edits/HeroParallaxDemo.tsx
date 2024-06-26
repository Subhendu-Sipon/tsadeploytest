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
      title: "Rick n Roll",
      link: "",
      thumbnail: ProjectImg1.src,
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "Kalki",
      link: "",
      thumbnail: ProjectImg2.src,
      videoId: "BfCIPsEGAS8",
    },
    {
      title: "Train",
      link: "",
      thumbnail: ProjectImg3.src,
      videoId: "TaVOf9yGXcA",
    },
    {
      title: "Bus",
      link: "",
      thumbnail: ProjectImg4.src,
      videoId: "cAkMcPfY_Ns",
    },
    {
      title: "Laptop",
      link: "",
      thumbnail: ProjectImg5.src,
      videoId: "spGSAeqxVUc",
    },
    {
      title: "Phone",
      link: "",
      thumbnail: ProjectImg6.src,
      videoId: "cz9l8tkMzUQ",
    },
    {
      title: "Camera",
      link: "",
      thumbnail: ProjectImg7.src,
      videoId: "91BUM3WhCfo",
    },
    {
      title: "Kitchen",
      link: "",
      thumbnail: ProjectImg8.src,
      videoId: "gj5QG8Jv8XQ",
    },
    {
      title: "One Piece",
      link: "",
      thumbnail: ProjectImg9.src,
      videoId: "A4R1x99Ejdw",
    },
    {
      title: "Show",
      link: "",
      thumbnail: ProjectImg10.src,
      videoId: "fgS52WhdDk0",
    },
  ];

  return <HeroParallax products={products} />;
};

export default HeroParallaxDemo;
