import React from "react";
import styles from "./bouquet.module.css";
import ProductCard from "@/components/Product/ProductCard";
import { shopItems } from "@/constant";
const Bouquet = () => {
  const { mainContainer, productCardContainer, mainHeading } = styles;
  return (
    <div className={mainContainer}>
      <h1 className={mainHeading}>Shop</h1>
      <div className={productCardContainer}>
        {shopItems
          .filter((bouqute) => bouqute?.type === "bouquet")
          .map((items) => (
            <ProductCard key={items?.id} info={items} />
          ))}
      </div>
    </div>
  );
};

export default Bouquet;
