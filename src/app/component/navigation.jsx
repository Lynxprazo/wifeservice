"use client";
import React, { useEffect } from "react";
import "./navigation.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdWifi } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { LogoWifi } from "./logo";

gsap.registerPlugin(ScrollTrigger);
export default function Navigation() {
  useEffect(() => {
    gsap.from(".content-logo", {
      y: "50vh",
      scale: 2,
      yPercent: -50,
      scrollTrigger: {
        scrub: true,
        trigger: ".content-logo",
        start: "top-bottom",
        end: "top-center",
      },
    });
  }, []);

  return (
    <div className="navigation-container">
      <div className="nav-main">
        <div className="left-nav">
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </div>
        <div className="right-nav">
          <div>
            {" "}
            <IoSettings />
          </div>
          <div>Setting</div>
        </div>
      </div>
      <div className="content-logo">
        <span>
          <IoMdWifi />
        </span>

        <h1>Mwanga Service</h1>
      </div>
    </div>
  );
}
