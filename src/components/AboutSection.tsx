"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  aboutIntro,
  stats,
  resumeLink,
  experienceData,
  educationData,
} from "../data/aboutData";

export const AboutSection = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".qualification_button");
    const contents = document.querySelectorAll(".qualification_content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-target");
        contents.forEach((content) =>
          content.classList.remove("qualification_active")
        );
        tabs.forEach((t) => t.classList.remove("qualification_active"));
        document.querySelector(target!)?.classList.add("qualification_active");
        tab.classList.add("qualification_active");

        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "qualification_tab_click", {
            event_category: "Tab",
            event_label: target === "#experience" ? "Experience" : "Education",
          });
        }
      });
    });

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

  const renderQualificationData = (data: typeof experienceData) =>
    data.map((item, index) => (
      <div className="qualification_data" key={index}>
        {index % 2 === 0 ? (
          <>
            <div>
              <h3 className="qualification_title">{item.title}</h3>
              <span className="qualification_subtitle">{item.subtitle}</span>
              <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i> {item.date}
              </div>
            </div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
          </>
        ) : (
          <>
            <div></div>
            <div>
              <span className="qualification_rounder"></span>
              <span className="qualification_line"></span>
            </div>
            <div>
              <h3 className="qualification_title">{item.title}</h3>
              <span className="qualification_subtitle">{item.subtitle}</span>
              <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i> {item.date}
              </div>
            </div>
          </>
        )}
      </div>
    ));

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
            {aboutIntro}
          </p>
          <div className="about_info">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="about_info-title">{stat.title}</span>
                <span className="about_info-name">{stat.name}</span>
              </div>
            ))}
          </div>
          <div className="about_buttons">
            <button className="button" id="resume-button-2">
              <a
                href={resumeLink}
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
              {renderQualificationData(experienceData)}
            </div>

            <div
              className="qualification_content"
              data-content
              id="education"
            >
              {renderQualificationData(educationData)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
