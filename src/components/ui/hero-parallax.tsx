"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    videoId: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 90, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[280vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto perspective-[500px] transform-style-preserve-3d bg-slate-300"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse h-[400px] space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard key={index} product={product} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard key={index} product={product} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full left-0 top-0">
      <h1 className="text-ultimateproject md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> project works
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    videoId: string;
  };
  translate: any; // Replace 'any' with specific type if needed
}) => {
  const videoId = product.videoId;

  const iframeRef = useRef(null);

  useEffect(() => {
    iframeRef.current?.contentWindow.postMessage('autoplay', '*');
  }, [iframeRef]);

  return (
    <motion.div
      style={{
        x: translate,
      }}
    >
      <Link href={product.link}>
        <iframe
          width="540px"
          height="304px"
          src={`https://d3dm4v3lhy01si.cloudfront.net/f50u8q%2Ffile%2Fbed0d6c0f6b9aefe10e80117b0543948_08709e5d03c1e24009966dc6edd10001.mp4?response-content-disposition=inline%3Bfilename%3D%22bed0d6c0f6b9aefe10e80117b0543948_08709e5d03c1e24009966dc6edd10001.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1719658905&Signature=KHQPT8SRUSK5kCDrrhioqQ4aYdGAdp-17SkqU5~l8xZfCjOTkJsjWGsgTV7mG8NSa6diF1HKZ1n7N3tEPPlVpHu5j4lYR-YMjgnL7haJZNaR64Qbw5y1bzFhmNAbfjQQ6nx~7AI8D5qRyO1yZiUM8GjjyphC4n-mMFGOsZX9Ai0ZfajHDb9ZouWR7qx16Ey8hEIHerDtlkSl17W59rYitl8aAoNXfMnUpSv4bq71WxLlnTr0DsP2AOZRiOZVgE8EYpnAiBX3vhiQSxcthVE1K0q85Wh9owbfUsZeXnQmFUpjORDz1saMGszoRrXBNY2HHwTR6Q41RolVFJ926dDXNA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ`}
          allowFullScreen
          className="rounded-lg overflow-hidden object-cover"
          allow="autoplay"
        />
       
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
