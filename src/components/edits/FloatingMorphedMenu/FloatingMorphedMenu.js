import React from "react";
import "./FloatingMorphedMenu.css";
import SiteLogoJadu from "@/assets/TSA whiteLogo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function FloatingMorphedMenu() {
  return (
    <div className="jaduimenubarkaupar z-[2000] w-full">
      <div className=" jaduimenubar flex">
        <div className="px-2">
          <Image
            src={SiteLogoJadu}
            alt="logo"
            height="58"
            width="58"
            className="rounded-lg"
          />
        </div>
        <div className="flex dibbekapapa">
          <div className="dibbekadibba p-4">
            <Link href="www.linkedln.com">LinkedIn</Link>
          </div>
          <div className="dibbekadibba p-4 ">
            <Link href="www.facebook.com">Facebook</Link>
          </div>
          <div className="dibbekadibba p-4 ">
            <Link href="www.instagram.com">Instagram</Link>
          </div>
          <div className="dibbekadibba p-4 ">
            <Link href="www.whatsapp.com">Whatsapp</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
