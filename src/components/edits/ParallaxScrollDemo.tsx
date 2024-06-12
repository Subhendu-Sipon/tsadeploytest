"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import Image1 from "@/assets/photo1.jpg";
import Image2 from "@/assets/photo2.jpg";
import Image3 from "@/assets/photo3.jpg";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  Image1.src,
  Image2.src,
  Image3.src,
  Image2.src,
  Image3.src,
  Image1.src,
  Image3.src,
  Image2.src,
  Image1.src,
];
