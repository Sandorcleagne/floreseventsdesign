import React from "react";
import styles from "./FeaturedProducts.module.css";
import { shopItems } from "@/constant";
import ProductCard from "../Product/ProductCard";
import Link from "next/link";
const FeaturedProducts = () => {
  const { main, container, mainHeading, productSection, headingContainer } =
    styles;
  return (
    <div className={main}>
      <div className={container}>
        <div className={headingContainer}>
          <h1 className={mainHeading}>Featured Products</h1>
          <Link href={"/shop"}>{"View More >"}</Link>
        </div>
        <div className={productSection}>
          {shopItems.slice(0, 3).map((items) => (
            <ProductCard key={items?.id} info={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
