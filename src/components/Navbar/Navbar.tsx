"use client";
import React, { useState } from "react";
import Link from "next/link";
import { menuItems } from "@/constant";
import styles from "./Navbar.module.css";
import { Offcanvas } from "react-bootstrap";
const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <>
      <nav className={mainNav}>
        <div className={navItems}>
          <div className={titleText}>
            <Link href="/">Flores Events</Link>
          </div>

          <div className={navList}>
            {menuItems.map((items) => (
              <Link key={items?.id} className={navListItems} href={items?.href}>
                {items.title}
              </Link>
            ))}
          </div>
          <div className={contactInfo}>
            <a href={"tel:+91-8882103359"}>+91-8882103359</a>
          </div>
          <button className={hambugerMenu} onClick={handleShow}>
            {" "}
            &#9776;
          </button>
        </div>
      </nav>
      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
};

export default Navbar;
