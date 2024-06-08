import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import styles from "./shop.module.css";
import { shopItems } from "@/constant";
const ShopFlowers = () => {
  const { mainContainer, productCardContainer, mainHeading } = styles;
  return (
    <div className={mainContainer}>
      <h1 className={mainHeading}>Shop</h1>
      <div className={productCardContainer}>
        {shopItems.map((items) => (
          <ProductCard key={items?.id} info={items} />
        ))}
      </div>
    </div>
  );
};

export default ShopFlowers;
