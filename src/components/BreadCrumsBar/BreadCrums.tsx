import React from "react";
import { BreadCurmsProps } from "../../types";
import styles from "./BreadCrum.module.css";
import Link from "next/link";
const BreadCrums: React.FC<BreadCurmsProps> = ({
  homeRoute,
  currentPage,
  nextObject,
}) => {
  const {
    mainContainer,
    breadContainer,
    rightSideContainer,
    leftSideContainer,
  } = styles;
  return (
    <div className={mainContainer}>
      <div className={breadContainer}>
        <div className={rightSideContainer}>
          <Link href={`/${homeRoute}`}>{homeRoute}</Link>
          &#8594; {currentPage}{" "}
        </div>
        <div className={leftSideContainer}>
          <Link href={`/${homeRoute}/${nextObject?.id}`}>
            {nextObject?.productName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BreadCrums;
