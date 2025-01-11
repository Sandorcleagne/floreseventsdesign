"use client";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";
interface ImageLightBoxProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  imageList: Array<string>;
}
const ImageLightBox: React.FC<ImageLightBoxProps> = ({
  setOpen,
  open,
  imageList,
}) => {
  const slides = imageList.map((image) => ({
    src: image,
    width: 800, // or some other default width
    height: 600, // or some other default height
  }));
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={slides}
      render={{ slide: NextJsImage }}
    />
  );
};

export default ImageLightBox;
