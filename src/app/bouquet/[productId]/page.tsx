import BreadCrums from "@/components/BreadCrumsBar/BreadCrums";
import { shopItems } from "@/constant";
import React from "react";
import styles from "./productDetail.module.css";
import { Information } from "@/types";
import Image from "next/image";
interface Params {
  productId: string;
}

interface ProductDetailPageProps {
  params: Params;
}
const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const {
    mainContainer,
    mainProductContainer,
    innerProductDetailContainer,
    leftSideContainer,
    rightSideContainer,
    productName,
    productPrice,
    productDescription,
    productImage,
    productFeature,
  } = styles;
  const productDetails = shopItems.find(
    (items) => String(items?.id) === params?.productId
  );
  function getNextObject<T>(
    array: T[],
    predicate: (item: T) => boolean
  ): T | undefined {
    const currentObject = array.find(predicate);
    if (!currentObject) return undefined;

    const currentIndex = array.indexOf(currentObject);
    return array[currentIndex + 1];
  }
  let nextObject: Information | undefined;
  if (productDetails) {
    nextObject = getNextObject(
      shopItems,
      (obj) => obj.id === productDetails.id
    );
  }
  return (
    <div className={mainContainer}>
      <BreadCrums
        homeRoute={"shop"}
        currentPage={productDetails?.productName}
        nextObject={nextObject}
      />
      <div className={mainProductContainer}>
        <div className={innerProductDetailContainer}>
          <div className={leftSideContainer}>
            <div className={productName}>{productDetails?.productName}</div>
            <div className={productPrice}>{productDetails?.productPrice}</div>
            <div className={productDescription}>
              {productDetails?.productDescription}
            </div>
            <div className={productFeature}>
              📞 Call Now For Free Dilivery{" "}
              <a href={"tel:+91-9971632583"}>+91-9971632583</a>
            </div>
          </div>
          <div className={rightSideContainer}>
            {productDetails?.image && (
              <Image
                src={productDetails?.image}
                alt={productDetails?.productName}
                height={50}
                width={350}
                className={productImage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
