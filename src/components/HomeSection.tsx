"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Typed from "typed.js";
import { homeData } from "../data/homeData";

export const HomeSection = () => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [homeData.title],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    const socialLinks = document.querySelectorAll(".home_social-icon");
    socialLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const platform = link.getAttribute("href")?.includes("linkedin")
          ? "LinkedIn"
          : "GitHub";
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "social_link_click", {
            event_category: "Social",
            event_label: platform
          });
        }
      });
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <div className="home_social">
            {homeData.socialLinks.map((link) => (
              <Link
                key={link.id}
                id={link.id}
                href={link.href}
                target="_blank"
                className="home_social-icon"
              >
                <i className={link.iconClass}></i>
              </Link>
            ))}
          </div>
          <div className="home_img">
            <svg
              className="home_blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  x="10"
                  y="1"
                  className="home_blob-img"
                  href={homeData.imagePath}
                />
              </g>
            </svg>
          </div>
          <div className="home_data">
            <h1 className="home_title" id="user-detail-name">
              Hi👋, I'm
              <br />
              <span style={{ fontSize: "40px" }}>{homeData.name}</span>
            </h1>
            <h3 className="home_subtitle">
              <span className="auto-type"></span>
            </h3>
            <p className="home_description">{homeData.description}</p>
            <div className="btn_container">
              <Link href="#contact" className="button button-flex sec_button">
                Connect with Me <i className="uil uil-message button_icon"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="home_scroll">
          <Link href="#about" className="home_scroll-button button-flex">
            <i className="uil uil-mouse-alt home_scroll-mouse"></i>
            <span className="home_scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home_scroll-arrow"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};
