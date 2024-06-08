"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  const { mainHero, btnContainer, homeBtn, centered } = styles;
  const slideVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      transition={{ duration: 1 }}
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
