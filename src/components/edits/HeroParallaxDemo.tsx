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
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Kalki",
      link: "",
      thumbnail: ProjectImg2.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Train",
      link: "",
      thumbnail: ProjectImg3.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Bus",
      link: "",
      thumbnail: ProjectImg4.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Laptop",
      link: "",
      thumbnail: ProjectImg5.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Phone",
      link: "",
      thumbnail: ProjectImg6.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Camera",
      link: "",
      thumbnail: ProjectImg7.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Kitchen",
      link: "",
      thumbnail: ProjectImg8.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "One Piece",
      link: "",
      thumbnail: ProjectImg9.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
    {
      title: "Show",
      link: "",
      thumbnail: ProjectImg10.src,
      videoId: "https://cs170.clideo.com/p/17Im4X02p-LrhIWmPZ8U4g/8890e0a993227d4ab8297fc46038f33f/unveiling-the-art-of-manufacturing-perfection-with-duramix-manufacturing_b4BfLexH.mp4",
    },
  ];

  return <HeroParallax products={products} />;
};

export default HeroParallaxDemo;