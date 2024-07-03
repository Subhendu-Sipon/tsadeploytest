"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animations";
import Image from "next/image";
import aboutbg from "@/assets/aboutimg.webp";
import { LayoutGridDemo } from "./LayoutGridDemo";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-page2head font-semibold font-poppins text-white dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-poppins font-bold mt-1 leading-none">
                Social Ants
              </span>
            </h1>
          </>
        }
      >
        <ParallaxScrollDemo />
      </ContainerScroll>
    </div>
  );
}
