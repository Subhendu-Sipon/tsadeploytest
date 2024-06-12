"use client";
import Image from "next/image";
import { NavbarDemo } from "@/components/edits/NavbarDemo";
import BackgroundVideo from "@/components/edits/BackgroundVideo";
import { HeroScrollDemo } from "@/components/edits/HeroScrollDemo";
import styles from "./page.module.css";
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

export default function Home() {

  return (
    

    <div>
      <div className="Landing Page">
        <NavbarDemo />
        <BackgroundVideo />
        <HeroScrollDemo />
      </div>
      <ServiceSectionTest />
      <HeroParallaxDemo />
      <ProjectSectionDemo />
      {/* <Airdops /> */}
      <div className="h-screen w-full overflow-hidden">
      <ContactSection />
      </div>
      <div className="h-screen w-full bg-green-100">
      <CardHoverEffectDemo />
      {/* <Spline scene="https://prod.spline.design/8qVMP393ZbAiyO7W/scene.splinecode" />  */}
      </div>
      <div className=" h-screen w-full">
      <TestimonialSectionScroll />
      </div>
      <div className=" h-screen w-full">
        </div>
      
      <div className="overflow-hidden">
      <BackgroundScrollVideo />
      </div>



      {/* <div className="h-screen w-full">
      <SplitSlideShow />
      </div> */}
      {/* <FooterSection /> */}
    </div>
  );
}