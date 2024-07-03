import React from 'react'
import styles from './BackgroundVideo.module.css'
import { TypewriterEffect } from '../ui/type-writer-effect';
import Image from 'next/image';
import SiteLogoImage from "@/assets/TSALogoNoBg.png";

const BackgroundVideo = () => {
    const words = [
        {
            text: "The",
            className: "text-white dark:text-white font-poppins font-bold",
        },
        {
            text: "Social",
            className: "text-white dark:text-white font-poppins font-bold",
        },
        {
            text: "Ants",
            className: "text-blue-500 dark:text-blue-500 font-poppins font-bold",
        },
    ];
    return (
        <div className={styles.main}>
            <div className='absolute text-white z-50 p-5'>
            <Image
              src={SiteLogoImage}
              alt="logo"
              height="72"
              width="72"
            />
            </div>
            
            <div className={styles.overlay}></div>
            
            <video src={require('@/assets/TSABg.webm')} autoPlay loop muted className={styles.videobg} />
            
            <div className={styles.content}>
            
                <TypewriterEffect words={words} />
                <br />
                <div className={styles.landingtextdesc}>
                    <p className='text-ldescription sm:text-xl md:text-2xl lg:text-2xl font-poppins font-thin text-center '>
                        Innovate-Create-Elevate
                    </p>
                </div>
                <svg className={styles.arrows}>
              <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
              <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
              <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
            </svg>
            </div>
        </div>
    );
}
export default BackgroundVideo