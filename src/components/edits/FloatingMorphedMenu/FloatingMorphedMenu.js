import React, { useState, useEffect } from 'react';
import "./FloatingMorphedMenu.css";
import SiteLogoJadu from "@/assets/TSALogoNoBg.png";
import SiteLogoJaduScroll from "@/assets/SiteLogo.gif"; // new image for scroll
import Image from "next/image";
import Link from "next/link";

export default function FloatingMorphedMenu() {
  const [imageSrc, setImageSrc] = useState(SiteLogoJadu);

  useEffect(() => {
    const handleScroll = () => {
      console.log(scrollY);
      if (window.scrollY > 50 && window.scrollY<520 || window.scrollY > 1040 && window.scrollY<1500 || window.scrollY > 2700 && window.scrollY<3200 || window.scrollY > 3500 && window.scrollY<4000 || window.scrollY > 4150 && window.scrollY<4750) { // adjust the scroll position as needed
        setImageSrc(SiteLogoJadu);
        
      } else {
        setImageSrc(SiteLogoJaduScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="jaduimenubarkaupar z-[2000] w-full">
      <div className=" jaduimenubar flex">
        <div className="px-2 justify-center content-center">
          <Image
            src={imageSrc}
            alt="logo"
            height="48"
            width="48"
            className="rounded-lg"
          />
        </div>
        <div className="flex dibbekapapa ">
          <Link href="https://www.linkedin.com/company/thesocialants/">
            <div className="dibbekadibba p-2">LinkedIn</div>
          </Link>
          <Link href="https://www.facebook.com/people/The-Social-Ants/61557431040925/">
            <div className="dibbekadibba p-2 ">Facebook</div>
          </Link>
          <Link href="https://www.instagram.com/the.social.ants/">
            <div className="dibbekadibba p-2 ">Instagram</div>
          </Link>
          <Link href="https://wa.me/+919853106200?text=I%27m%20interested%20to%20do%20business%20with%20you.">
            <div className="dibbekadibba p-2 ">Whatsapp</div>
          </Link>
        </div>
      </div>
    </div>
  );
}