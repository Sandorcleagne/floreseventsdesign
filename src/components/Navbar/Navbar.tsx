import React from "react";
import Link from "next/link";
import { menuItems } from "@/constant";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const {
    mainNav,
    titleText,
    hambugerMenu,
    navItems,
    contactInfo,
    navList,
    navListItems,
  } = styles;
  return (
    <nav className={mainNav}>
      <div className={navItems}>
        <div className={titleText}>
          <Link href="/">Flores Events</Link>
        </div>

        <div className={navList}>
          {menuItems.map((items) => (
            <div key={items?.id} className={navListItems}>
              {items.title}
            </div>
          ))}
        </div>
        <div className={contactInfo}>
          <a href={"tel:+91-8882103359"}>+91-8882103359</a>
        </div>
        <button className={hambugerMenu}> &#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
