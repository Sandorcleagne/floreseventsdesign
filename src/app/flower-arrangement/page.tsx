import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import React from "react";
import {
  FlowerArrangementgalleryItems,
  flowerArrangementsImages,
} from "@/constant";
const FlowerArrangement = () => {
  return (
    <div>
      <PhotoGallery
        info={FlowerArrangementgalleryItems}
        title="Flower Arrangements"
        description="Experience the art of floral elegance with our bespoke flower arrangements, crafted to bring beauty to every moment."
        imageList={flowerArrangementsImages}
      />
    </div>
  );
};

export default FlowerArrangement;
