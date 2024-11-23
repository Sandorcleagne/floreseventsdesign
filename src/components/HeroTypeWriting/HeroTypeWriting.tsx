"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const HeroTypeWriting = () => {
  return (
    <>
      <div className="hidden md:block">
        <Typewriter
          options={{
            strings: [
              "<strong style='font-size: 30px;font-weight: 600;'>Delivering breathtaking blooms for every occasion...</strong> ",
              "<strong style='font-size: 30px;font-weight: 600;'>Turning your dream wedding into a stunning reality...</strong>",
              "<strong style='font-size: 30px;font-weight: 600;'>Designing unforgettable events, one detail at a time...</strong> ",
            ],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 30,
          }}
        />
      </div>
      {/* <div className="block sm:hidden">
        <Typewriter
          options={{
            strings: [
              "<strong style='font-size: 13px;font-weight: 400;'>Delivering breathtaking blooms for every occasion...</strong> ",
              "<strong style='font-size: 13px;font-weight: 400;'>Turning your dream wedding into a stunning reality...</strong>",
              "<strong style='font-size: 13px;font-weight: 400;'>Designing unforgettable events, one detail at a time...</strong> ",
            ],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 30,
          }}
        />
      </div>
      <div className="hidden sm:block md:hidden">
        <Typewriter
          options={{
            strings: [
              "<strong style='font-size: 15px;font-weight: 600;'>Delivering breathtaking blooms for every occasion...</strong> ",
              "<strong style='font-size: 15px;font-weight: 600;'>Turning your dream wedding into a stunning reality...</strong>",
              "<strong style='font-size: 15px;font-weight: 600;'>Designing unforgettable events, one detail at a time...</strong> ",
            ],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 30,
          }}
        />
      </div> */}
    </>
  );
};

export default HeroTypeWriting;
