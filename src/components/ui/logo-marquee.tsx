import React from 'react';
import FastMarquee from 'react-fast-marquee';
import Image from 'next/image';
import MarqueeLogo1 from '@/assets/MarqueeImg/Monte carlo dp.jpg';
import MarqueeLogo2 from '@/assets/MarqueeImg/NobgTrial1.png';
import MarqueeLogo3 from '@/assets/MarqueeImg/abs.png';
import MarqueeLogo4 from '@/assets/MarqueeImg/SuruchiBazarNoBg.png';
import MarqueeLogo5 from '@/assets/MarqueeImg/drm_round.jpg'
import { left, right } from '@popperjs/core';

const logos = [
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641c0497c240b1be1b31ec11_Frame%201430102672%20(3).svg", alt: 'Monte Carlo Logo', link: 'https://montecarlo.in' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/64149378ab4ce51422a87095_NVIDIA%20svg%20(3).svg", alt: 'Daivik Ratnam Logo', link: 'https://daivikratnam.com' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf7f702e8cc4d3498b5b4_Walmart%20svg.svg", alt: 'ABS Logo', link: 'https://anilbalajisteel.com'},
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf40774e09707a8fc2ef5_Expedia%20svg.svg", alt: 'Suruchi Bazar Logo', link: '#' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf3c3ab258130428e0d63_Licious.svg", alt: 'Demo1', link: 'https://duramix.in/' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf343523aa2c8804e16fb_hotstar.svg", alt: 'Demo2', link: 'https://duramix.in/' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfbe2683a5868a8b058d1_Frame%201430102671.svg", alt: 'Demo3', link: 'https://duramix.in/' },
];
const logos2 = [
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641c0497c240b1be1b31ec11_Frame%201430102672%20(3).svg", alt: 'Monte Carlo Logo', link: 'https://montecarlo.in' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/64149378ab4ce51422a87095_NVIDIA%20svg%20(3).svg", alt: 'Daivik Ratnam Logo', link: 'https://daivikratnam.com' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf7f702e8cc4d3498b5b4_Walmart%20svg.svg", alt: 'ABS Logo', link: 'https://anilbalajisteel.com'},
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf40774e09707a8fc2ef5_Expedia%20svg.svg", alt: 'Suruchi Bazar Logo', link: '#' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf3c3ab258130428e0d63_Licious.svg", alt: 'Demo1', link: 'https://duramix.in/' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bf343523aa2c8804e16fb_hotstar.svg", alt: 'Demo2', link: 'https://duramix.in/' },
  { src: "https://assets-global.website-files.com/624629162e6c5c363b391aee/641bfbe2683a5868a8b058d1_Frame%201430102671.svg", alt: 'Demo3', link: 'https://duramix.in/' },
];

const LogoMarquee = () => {
  return (
    <div>
    <FastMarquee speed={100} pauseOnHover={true} direction="right">
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
    <FastMarquee speed={50} pauseOnHover={true} direction="left">
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