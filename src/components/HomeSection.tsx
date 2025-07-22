"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Typed from "typed.js";

export const HomeSection = () => {
  useEffect(() => {
    // Initialize Typed.js for auto-typing
    const typed = new Typed(".auto-type", {
      strings: ["Node.js Backend Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    // Track social link clicks with Google Analytics
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
            <Link
              id="contact-linkedin"
              href="https://www.linkedin.com/in/abhaysinh-anil-gaikwad/"
              target="_blank"
              className="home_social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </Link>
            <Link
              id="contact-github"
              href="https://github.com/abhaysinh-gaikwad"
              target="_blank"
              className="home_social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </Link>
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
                  href="/Photos/abhay-removebg.png"
                />
              </g>
            </svg>
          </div>
          <div className="home_data">
            <h1 className="home_title" id="user-detail-name">
              Hi👋, I'm
              <br />
              <span style={{ fontSize: "40px" }}>Abhaysinh Gaikwad</span>
            </h1>
            <h3 className="home_subtitle">
              <span className="auto-type"></span>
            </h3>
            <p className="home_description">
              Fullstack Engineer with over 1 year of experience at PropFTX,
              specializing in building scalable backend services using Node.js,
              Next.js, and AWS. Proficient in serverless architectures, database
              optimization, and secure payment integrations, I deliver robust
              solutions for real-world challenges.
            </p>
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
