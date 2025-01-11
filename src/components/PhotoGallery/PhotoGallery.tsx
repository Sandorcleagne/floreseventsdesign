"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLightBox from "../ImageLightBox/ImageLightBox";
interface PhotoGalleryProps {
  info: {
    image: string;
    alt: string;
    subtitle: string;
    title: string;
    description: string;
    width: number;
    height: number;
  }[];
  title: string;
  description: string;
  imageList: Array<string>;
}
const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  info,
  title,
  description,
  imageList,
}) => {
  const [open, setOpen] = React.useState(false);
  const openLightBox = () => setOpen(true);
  return (
    <>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-9 sm:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              {title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {info.map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                key={index}
                className="lg:w-1/3 sm:w-1/2 p-4"
                onClick={openLightBox}
              >
                <div className="flex relative group cursor-pointer">
                  <Image
                    alt={item.alt}
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 group-hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      {item.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ImageLightBox setOpen={setOpen} open={open} imageList={imageList} />
    </>
  );
};

export default PhotoGallery;
