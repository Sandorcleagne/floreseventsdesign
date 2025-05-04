import { homePageGridItems } from "@/constant";
import React from "react";
import styles from "./ImageGridHomePage.module.css";
import HeroTypeWriting from "../HeroTypeWriting/HeroTypeWriting";
import Link from "next/link";
const ImageGridHomePage = () => {
  const { container, gallery, box, box1, row2, col2 } = styles;
  return (
    <div className={container}>
      <HeroTypeWriting />
      <div className={gallery}>
        {homePageGridItems.map((items) => (
          <Link
            href={items?.link}
            target="_blank"
            rel="noopener noreferrer"
            key={items?.id}
            className={box}
            id={
              items?.id === 1
                ? row2
                : items?.id === 2
                ? col2
                : items?.id === 3
                ? row2
                : items?.id === 4
                ? row2
                : items?.id === 5
                ? row2
                : items?.id === 6
                ? col2
                : ""
            }
            style={{ backgroundImage: `url(${items?.image})` }}
          >
            {items?.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGridHomePage;
