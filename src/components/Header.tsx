"use client";

import Link from "next/link";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    // Nav toggle and theme switch logic
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navClose = document.getElementById("nav-close");
    const themeButton = document.getElementById("theme-button");

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose && navMenu) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    if (themeButton) {
      themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "theme_toggle", {
            event_category: "Button",
            event_label: document.body.classList.contains("dark-theme")
              ? "Dark Theme"
              : "Light Theme",
          });
        }
      });
    }

    // Google Analytics event tracking for resume download
    const resumeButtons = document.querySelectorAll(".resume");
    resumeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "resume_download", {
            event_category: "Button",
            event_label: "Resume Download - Header",
          });
        }
      });
    });
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/" className="nav_logo">
          <span> &lt; Abhaysinh </span>Gaikwad / &gt;
        </Link>
        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <Link href="#home" className="nav_link nav-link home active-link">
                <i className="uil uil-estate nav_icon"></i> Home
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#about" className="nav_link nav-link about">
                <i className="uil uil-user nav_icon"></i> About
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#skills" className="nav_link nav-link skills">
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#projects" className="nav_link nav-link projects">
                <i className="uil uil-briefcase-alt nav_icon"></i> Projects
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#statistics" className="nav_link">
                <i className="uil uil-graph-bar nav_icon"></i> Github
              </Link>
            </li>
            <li className="nav_item">
              <Link href="#contact" className="nav_link nav-link contact">
                <i className="uil uil-message nav_icon"></i> Contact Me
              </Link>
            </li>
            <li className="nav_item">
              <button id="resume-button-1" className="nav-link resume">
                <a
                  href="https://abhaysinh.dev"
                  className="button-flex"
                  id="resume-link-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  // download="Abhaysinh-Gaikwad-Resume.pdf"
                >
                  <i className="uil uil-download-alt nav_icon"></i> Resume
                </a>
              </button>
            </li>
          </ul>
          <i className="uil uil-times nav_close" id="nav-close"></i>
        </div>
        <div className="nav_btns">
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav_toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
