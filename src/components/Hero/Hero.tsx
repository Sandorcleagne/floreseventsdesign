"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { animate, motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  const { mainHero, btnContainer, homeBtn, centered } = styles;

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start fully transparent
      animate={{ opacity: 1 }} // End fully visible
      transition={{
        duration: 1.5, // Animation duration (1.5 seconds)
        ease: "easeInOut", // Smooth easing
      }}
      className={mainHero}
    >
      <Image
        src="/banner-flower.png"
        alt="banner-img-flower"
        height={500}
        width={570}
      />
      <div className={centered}>Flores And Events</div>
      <div className={btnContainer}>
        <Link href="/shop">
          <button className={homeBtn}>Explore Flowers</button>
        </Link>
        <button className={homeBtn}>Explore Events</button>
      </div>
    </motion.div>
  );
};

export default Hero;
