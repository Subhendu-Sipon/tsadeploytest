import React from "react";
import "./FloatingMorphedMenu.css";
import SiteLogoJadu from "@/assets/SiteLogo.gif";
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
          <Link href="www.linkedln.com">
            <div className="dibbekadibba p-4">LinkedIn</div>
          </Link>
          <Link href="www.facebook.com">
            <div className="dibbekadibba p-4 ">Facebook</div>
          </Link>
          <Link href="www.instagram.com">
            <div className="dibbekadibba p-4 ">Instagram</div>
          </Link>
          <Link href="www.whatsapp.com">
            <div className="dibbekadibba p-4 ">Whatsapp</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
