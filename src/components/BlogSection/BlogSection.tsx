import React from "react";
import styles from "./BlogSection.module.css";
import Link from "next/link";
import BlogCard from "../BlogCard/BlogCard";
import { blogSectionItems } from "@/constant";
const BlogSection = () => {
  const { main, container, mainHeading, blogSection, headingContainer } =
    styles;
  return (
    <div className={main}>
      <div className={container}>
        <div className={headingContainer}>
          <h1 className={mainHeading}>Blogs</h1>
          <Link href={"/blog"}>{"View More >"}</Link>
        </div>
        <div className={blogSection}>
          {blogSectionItems.map((items) => (
            <BlogCard key={items?.id} item={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
