import React from 'react';
import FastMarquee from 'react-fast-marquee';
import Image from 'next/image';
import MarqueeLogo1 from '@/assets/logomarquee/abs.svg';
import MarqueeLogo2 from '@/assets/logomarquee/Pranati-Brand-Logo-1.svg';
import MarqueeLogo3 from '@/assets/logomarquee/champion.svg';
import MarqueeLogo4 from '@/assets/logomarquee/clouddesk.svg';
import MarqueeLogo5 from '@/assets/logomarquee/daewoo.svg';
import MarqueeLogo6 from '@/assets/logomarquee/dakshin.svg';
import MarqueeLogo7 from '@/assets/logomarquee/dr.svg';
import MarqueeLogo8 from '@/assets/logomarquee/duramix.svg';
import MarqueeLogo9 from '@/assets/logomarquee/ecs.svg';
import MarqueeLogo10 from '@/assets/logomarquee/fanddlogo.svg';
import MarqueeLogo11 from '@/assets/logomarquee/grc.svg';
import MarqueeLogo12 from '@/assets/logomarquee/hiline.svg';
import MarqueeLogo13 from '@/assets/logomarquee/india cup.svg';
import MarqueeLogo14 from '@/assets/logomarquee/karigar.svg';
import MarqueeLogo15 from '@/assets/logomarquee/odishamaritime.svg';
import MarqueeLogo16 from '@/assets/logomarquee/odra.svg';
import MarqueeLogo17 from '@/assets/logomarquee/piaggio.svg';
import MarqueeLogo18 from '@/assets/logomarquee/sanskaar.svg';
import MarqueeLogo19 from '@/assets/logomarquee/sirman.svg';
import MarqueeLogo20 from '@/assets/logomarquee/srinath.svg';
import { left, right } from '@popperjs/core';

const logos = [
  { src: MarqueeLogo1, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo2, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo3, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo4, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo5, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo6, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo7, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo8, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo9, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo10, alt: 'Monte Carlo Logo', link: '' },
];
const logos2 = [
  { src: MarqueeLogo11, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo12, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo13, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo14, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo15, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo16, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo17, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo18, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo19, alt: 'Monte Carlo Logo', link: '' },
  { src: MarqueeLogo20, alt: 'Monte Carlo Logo', link: '' },
];

const LogoMarquee = () => {
  return (
    <div>
    <FastMarquee speed={100} direction="right">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className='logo-container w-40 object-cover hover:grayscale-0 rounded mx-10 bg-transparent outline-2 outline-pink-500 flex items-center justify-center'
        >
          <a href={logo.link}>
          <Image 
            src={logo.src} 
            alt={logo.alt}
            width={20} 
            height={20}
            className="logo-image h-auto w-auto max-h-64 transition duration-300 p-5" 
          />
          </a>
        </div>
      ))}
    </FastMarquee>
    <FastMarquee speed={50} direction="left">
    {logos2.map((logo, index) => (
      <div 
        key={index} 
        className='logo-container  w-40 object-cover hover:grayscale-0 rounded mx-10 bg-transparent outline-2 outline-pink-500 flex items-center justify-center'
      >
        <a href={logo.link}>
        <Image 
          src={logo.src} 
          alt={logo.alt}
          width={20} 
          height={20}
          className="logo-image h-auto w-auto max-h-64 transition duration-300 p-5" 
        />
        </a>
      </div>
    ))}
  </FastMarquee>
  </div>
  );
};

export default LogoMarquee;