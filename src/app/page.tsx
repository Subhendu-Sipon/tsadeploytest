"use client";
import Image from "next/image";
import { NavbarDemo } from "@/components/edits/NavbarDemo";
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

export default function Home() {
  return (
    // <div>
    //   <ScrollSection />
    //   <HeroParallaxDemo />
    // </div>
    <div className="wholewebsitecontainer data-scroll-container">
      <div className="Landing Page">
        <NavbarDemo />
        <BackgroundVideo />
      </div>
      <HeroScrollDemo />
      <ServiceSectionTest />
      <HeroParallaxDemo />
      <LogoMarqueeDemo />
      <div className="h-screen w-full overflow-hidden">
      {/* Put contact section here */}
      <ContactSection/>

      </div>
      <div className="h-full w-full bg-black">
      <CardHoverEffectDemo />
      </div>
      <div className=" h-screen w-full">
      <TestimonialSectionScroll />
      </div>
      <div className=" h-screen w-full">
      </div>
      <div className="overflow-hidden">
      <BackgroundScrollVideo />
      </div>
    </div>
  );
}
