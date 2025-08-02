"use client";

import { useEffect } from "react";
import {
  backendSkills,
  frontendSkills,
  cloudDevOpsSkills,
  otherToolsSkills,
} from "../data/skillsData";

type Skill = {
  name: string;
  icon: string;
};

export const SkillsSection = () => {
  useEffect(() => {
  const skillsHeaders = document.querySelectorAll(".skills_header");

  // Open Backend Development section by default
  const backendHeader = Array.from(skillsHeaders).find(header =>
    header.querySelector(".skills_title")?.textContent === "Backend Development"
  );
  if (backendHeader) {
    const parent = backendHeader.parentElement;
    parent?.classList.remove("skills_close");
    parent?.classList.add("skills_open");
  }

  skillsHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;
      const isOpen = parent?.classList.contains("skills_open");

      // Close all sections
      document.querySelectorAll(".skills_content").forEach((content) => {
        content.classList.remove("skills_open");
        content.classList.add("skills_close");
      });

      // Open clicked one if it wasn't already open
      if (!isOpen) {
        parent?.classList.remove("skills_close");
        parent?.classList.add("skills_open");
      }

      // Google Analytics tracking
      const category = header.querySelector(".skills_title")?.textContent;
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "skills_toggle", {
          event_category: "Accordion",
          event_label: category,
        });
      }
    });
  });
}, []);


  const renderSkills = (skills: Skill[]) =>
    skills.map((skill) => (
      <div key={skill.name} className="skills_data skills-card">
        <div className="skills_titles">
          <h3 className="skills_name skills-card-name">{skill.name}</h3>
          <span>
            <i className={`${skill.icon} skills-card-img`}></i>
          </span>
        </div>
        <div className="skills_bar">
          <span className="skills_percentage"></span>
        </div>
      </div>
    ));

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills & Tools</h2>
      <div className="skills_container container grid">
        <div>
          <div className="skills_content skills_close">
            <div className="skills_header">
              <i className="uil uil-server-network skills_icon"></i>
              <div>
                <h1 className="skills_title">Backend Development</h1>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              {renderSkills(backendSkills)}
            </div>
          </div>
          <div className="skills_content skills_close">
            <div className="skills_header">
              <i className="uil uil-arrow skills_icon"></i>
              <div>
                <h1 className="skills_title">Frontend Development</h1>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              {renderSkills(frontendSkills)}
            </div>
          </div>
        </div>
        <div>
          <div className="skills_content skills_close">
            <div className="skills_header">
              <i className="uil uil-cloud-computing skills_icon"></i>
              <div>
                <h1 className="skills_title">Cloud & DevOps</h1>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              {renderSkills(cloudDevOpsSkills)}
            </div>
          </div>
          <div className="skills_content skills_close">
            <div className="skills_header">
              <i className="uil uil-icons skills_icon"></i>
              <div>
                <h1 className="skills_title">Other Tools</h1>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              {renderSkills(otherToolsSkills)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
