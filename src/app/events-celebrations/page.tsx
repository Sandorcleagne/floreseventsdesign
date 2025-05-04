import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import {
  eventsAndCelebrationsImages,
  eventsAndCelebrationsItems,
} from "@/constant";
import React from "react";

const EventsCelebrations = () => {
  return (
    <div>
      <PhotoGallery
        info={eventsAndCelebrationsItems}
        title="Events And Celebrations"
        description="Experience the art of floral elegance with our bespoke flower arrangements, crafted to bring beauty to every moment."
        imageList={eventsAndCelebrationsImages}
      />
    </div>
  );
};

export default EventsCelebrations;
