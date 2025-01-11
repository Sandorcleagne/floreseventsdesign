import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import { weddingItems, weddingImages } from "@/constant";
import React from "react";

const Wedding = () => {
  return (
    <div>
      <PhotoGallery
        info={weddingItems}
        title="Wedding"
        description="Experience the art of floral elegance with our bespoke flower arrangements, crafted to bring beauty to every moment."
        imageList={weddingImages}
      />
    </div>
  );
};

export default Wedding;
