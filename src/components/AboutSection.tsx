"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const AboutSection = () => {
  useEffect(() => {
    // Tab switching logic
    const tabs = document.querySelectorAll(".qualification_button");
    const contents = document.querySelectorAll(".qualification_content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-target");
        contents.forEach((content) => {
          content.classList.remove("qualification_active");
        });
        tabs.forEach((t) => {
          t.classList.remove("qualification_active");
        });
        document
          .querySelector(target!)
          ?.classList.add("qualification_active");
        tab.classList.add("qualification_active");

        // Track tab clicks with Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "qualification_tab_click", {
            event_category: "Tab",
            event_label: target === "#experience" ? "Experience" : "Education",
          });
        }
      });
    });

    // Track resume button click
    const resumeButton = document.getElementById("resume-button-2");
    resumeButton?.addEventListener("click", () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "resume_download", {
          event_category: "Button",
          event_label: "Resume Download - About",
        });
      }
    });
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section_title text-center">About Me</h2>
      <div className="about_container container grid">
        <Image
          src="/Photos/2.png"
          alt="About"
          className="about_img home-img"
          width={300}
          height={300}
        />
        <div className="about_data">
          <p className="about_description" id="user-detail-intro">
            I'm a Fullstack Engineer with over 1 year of experience at PropFTX,
            where I architect scalable backend services using Node.js, Next.js,
            and AWS. My expertise lies in serverless architectures, database
            optimization, and secure integrations like KYC and payment systems.
            Passionate about solving complex problems, I leverage technologies
            like TypeScript, PostgreSQL, and CI/CD pipelines to deliver efficient,
            scalable solutions. My collaborative approach and commitment to
            excellence drive me to create impactful applications.
          </p>
          <div className="about_info">
            <div>
              <span className="about_info-title">1+</span>
              <span className="about_info-name">Years Experience</span>
            </div>
            <div>
              <span className="about_info-title">15+</span>
              <span className="about_info-name">Projects</span>
            </div>
            <div>
              <span className="about_info-title">300+</span>
              <span className="about_info-name">DSA Problems</span>
            </div>
          </div>
          <div className="about_buttons">
            <button className="button" id="resume-button-2">
              <a
                href="https://abhaysinh.dev"
                className="button-flex"
                id="resume-link-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume <i className="uil uil-download-alt button_icon"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="qualification">
        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div
              className="qualification_button button-flex qualification_active"
              data-target="#experience"
            >
              <i className="uil uil-briefcase-alt qualification_icon"></i>
              Experience
            </div>
            <div
              className="qualification_button button-flex"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>
          </div>
          <div className="qualification_sections">
            <div
              className="qualification_content qualification_active"
              data-content
              id="experience"
            >
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Software Development Engineer I
                  </h3>
                  <span className="qualification_subtitle">PropFTX</span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> Jul 2024 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
            </div>
            <div className="qualification_content" data-content id="education">
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Full Stack Web Development
                  </h3>
                  <span className="qualification_subtitle">
                    Masai School, Bengaluru
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> Sep 2023 - Jun 2024
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">
                    Bachelor of Arts (English)
                  </h3>
                  <span className="qualification_subtitle">
                    Shivaji University, Kolhapur
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> Jul 2019 - Oct 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};