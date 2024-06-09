import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
const About = () => {
  const {
    mainContainer,
    aboutContainer,
    aboutImage,
    contentContainer,
    leftContainer,
    rightContainer,
    address,
    contactInfo,
    aboutContent,
  } = styles;
  return (
    <div className={mainContainer}>
      <div className={aboutContainer}>
        <Image
          src={"/about-us.jpg"}
          alt={"about"}
          height={30}
          width={900}
          className={aboutImage}
        />
        <div className={contentContainer}>
          <div className={leftContainer}>
            <div className={address}>
              Florist 777 Nameless Ave. Boston, MA 00000
            </div>
            <div className={contactInfo}></div>
          </div>
          <div className={rightContainer}>
            <p className={aboutContent}>
              Here is a description of your business. Duis et lorem dapibus,
              euismod diam in, placerat arcu. Donec auctor vitae odio et rutrum.
              Aliquam mollis orci et nisl lacinia mollis at quis erat. Morbi a
              nibh maximus, volutpat augue sed, condimentum lacus. Suspendisse
              interdum accumsan enim in maximus. Praesent id lobortis turpis,
              sit amet porttitor lectus. Suspendisse nisl turpis, rhoncus a
              velit non, rutrum maximus lorem. Proin laoreet laoreet magna, sit
              amet iaculis tellus ornare vitae. In hac habitasse platea
              dictumst. In in venenatis ligula, vitae dictum erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
