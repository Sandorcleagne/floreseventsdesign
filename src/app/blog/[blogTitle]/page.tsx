import React from "react";

const BlogDetails = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 xl:w-3/4 px-4 mb-8 lg:mb-0">
          <h1 className="text-3xl leading-tight font-bold mb-4">
            {"Blog Title"}
          </h1>
          <p className="text-lg leading-relaxed mb-4">{"author"}</p>
          <p className="text-lg leading-relaxed mb-4">{"date"}</p>
          <div className="content"></div>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/4 px-4 mb-8 lg:mb-0">
          <h2 className="text-xl leading-tight font-bold mb-4">
            Related Posts
          </h2>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="text-lg leading-relaxed hover:text-blue-500"
              >
                Related Post 1
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="text-lg leading-relaxed hover:text-blue-500"
              >
                Related Post 2
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="text-lg leading-relaxed hover:text-blue-500"
              >
                Related Post 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
