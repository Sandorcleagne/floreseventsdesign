import React from "react";
import styles from "./BlogCard.module.css";
interface BlogCardProps {
  item: {
    title: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  const { imageContainer } = styles;
  return (
    <div className="max-w-xs mx-auto bg-transparent shadow-lg rounded-lg overflow-hidden cursor-pointer">
      <div className="relative">
        {/* Background Image */}
        <div
          className="h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515865404355-ddb5b0910878?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D')`,
          }}
        ></div>

        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

        {/* Content on Image */}
        <div className="absolute bottom-0 p-4 text-white">
          <h2 className="text-2xl font-bold">{item?.title}</h2>
          <p className="mt-2 text-sm">
            A short description or preview of the blog content goes here.
          </p>
        </div>
      </div>

      {/* Card Footer or Additional Content */}
      <div className="p-4">
        <p className="text-gray-600 text-sm">
          Read more to dive into this interesting topic and explore new
          insights.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
