"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ProductCard.module.css";
import { motion } from "framer-motion";
import { Information } from "@/types";
interface MyComponentProps {
  info: Information;
}
const ProductCard: React.FC<MyComponentProps> = ({ info }) => {
  const {
    producInfoContainer,
    productName,
    notAvailable,
    avaiProduct,
    productPrice,
  } = styles;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Link
        href={{
          pathname: `/shop/${info?.id}`,
        }}
      >
        <Image src={info?.image} alt="flowers" height={30} width={300} />
        <div className={producInfoContainer}>
          <div className={productName}>
            <div>{info?.productName}</div>
            {/* <div className={info?.availability ? avaiProduct : notAvailable}>
              {info?.availability ? "Available" : "Not Available"}
            </div> */}
          </div>
          <div className={productPrice}>{info?.productPrice}</div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
