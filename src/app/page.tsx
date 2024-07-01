"use client";
import Image from "next/image";
import BackgroundVideo from "@/components/edits/BackgroundVideo";
import { HeroScrollDemo } from "@/components/edits/HeroScrollDemo";
import { BackgroundBeamsDemo } from "@/components/edits/BackgroundBeamsDemo";
import { AnimatedPinDemo } from "@/components/edits/AnimatedPinDemo";
import { BackgroundGradientDemo } from "@/components/edits/BackgroundGradientDemo";
import { HeroParallaxDemo } from "@/components/edits/HeroParallaxDemo";
import LogoMarqueeDemo from "@/components/edits/LogoMarqueeDemo";
import Spline from "@splinetool/react-spline";
import TestimonialDemo from "@/components/edits/TestimonialDemo";
import ScrollSection from "@/components/edits/scrollanimation/ScrollSection";
import Eye from "@/components/edits/eyes/EyeDemo";
import FixedSection from "@/components/edits/fixedelement/FixedSection";
import SplitSlideShow from "@/components/edits/splitslideshow/SplitSlideShow";
import BackgroundScrollVideo from "@/components/edits/backgroundscrollvideo/BackgroundScrollVideo";
import TestimonialSectionScroll from "@/components/edits/testimonial/TestimonialSectionScroll";
import Airdops from "@/components/edits/airdops/Airdops";
import ContactSection from "@/components/edits/contactsection/ContactSection";
import FooterSection from "@/components/edits/footersection/FooterSection";
import LocomotiveScroll from "locomotive-scroll";
import ProjectSectionDemo from "@/components/edits/projectSection/ProjectSectionDemo";
import ServiceSectionTest from "@/components/edits/serviceSection/ServiceSectionTest";
import { CardHoverEffectDemo } from "@/components/edits/CardHoverEffectDemo";
import "./globals.css";
import BentoGridDemo from "@/components/edits/BentoGridDemo";
import MenuDemo from "@/components/edits/menu/menudemo";

export default function Home() {
  return (

    <div className="wholewebsitecontainer data-scroll-container">
      <MenuDemo/>
      <div className="Landing Page">
        <BackgroundVideo />
      </div>
      <HeroScrollDemo />
      <LogoMarqueeDemo />
      <div className=" h-screen w-full">
      <TestimonialSectionScroll />
      </div>
      <div className=" h-screen w-full bg-blue-300">
      </div>
      <ServiceSectionTest />
      {/* <HeroParallaxDemo /> */}
      <div className="h-full w-full overflow-hidden">
      {/* Put contact section here */}
      {/* <ContactSection/> */}
      <BentoGridDemo />

      </div>
      <div className="h-full w-full bg-black">
      {/* <CardHoverEffectDemo /> */}
      </div>
      
      <div className="overflow-hidden">
      <BackgroundScrollVideo />
      </div>
    </div>
  );
}
