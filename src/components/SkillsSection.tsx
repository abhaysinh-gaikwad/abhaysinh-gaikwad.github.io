"use client";

import { useEffect } from "react";

export const SkillsSection = () => {
  useEffect(() => {
    // Skills accordion logic
    const skillsHeaders = document.querySelectorAll(".skills_header");
    skillsHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const parent = header.parentElement;
        const isOpen = parent?.classList.contains("skills_open");
        document
          .querySelectorAll(".skills_content")
          .forEach((content) => content.classList.remove("skills_open"));
        if (!isOpen) {
          parent?.classList.add("skills_open");
        }

        // Track skill category toggle with Google Analytics
        const category = header.querySelector(".skills_title")?.textContent;
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "skills_toggle", {
            event_category: "Accordion",
            event_label: category
          });
        }
      });
    });
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills & Tools</h2>
      <div className="skills_container container grid">
        <div>
          <div className="skills_content skills_open">
            <div className="skills_header">
              <i className="uil uil-server-network skills_icon"></i>
              <div>
                <h1 className="skills_title">Backend Development</h1>
              </div>
              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
            <div className="skills_list grid">
              {[
                { name: "Node.js", icon: "bx bxl-nodejs" },
                { name: "Express.js", icon: "bx bxl-spring-boot" },
                { name: "TypeScript", icon: "bx bxl-typescript" },
                { name: "PostgreSQL", icon: "bx bxs-data" },
                { name: "MySQL", icon: "bx bxs-data" },
                { name: "MongoDB", icon: "bx bxl-mongodb" }
              ].map((skill) => (
                <div key={skill.name} className="skills_data skills-card">
                  <div className="skills_titles">
                    <h3 className="skills_name skills-card-name">
                      {skill.name}
                    </h3>
                    <span>
                      <i className={`${skill.icon} skills-card-img`}></i>
                    </span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage"></span>
                  </div>
                </div>
              ))}
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
              {[
                { name: "Next.js", icon: "bx bxl-react" },
                { name: "React.js", icon: "bx bxl-react" },
                { name: "JavaScript", icon: "bx bxl-javascript" },
                { name: "Tailwind CSS", icon: "bx bxl-tailwind-css" },
                { name: "HTML", icon: "bx bxl-html5" },
                { name: "CSS", icon: "bx bxl-css3" }
              ].map((skill) => (
                <div key={skill.name} className="skills_data skills-card">
                  <div className="skills_titles">
                    <h3 className="skills_name skills-card-name">
                      {skill.name}
                    </h3>
                    <span>
                      <i className={`${skill.icon} skills-card-img`}></i>
                    </span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage"></span>
                  </div>
                </div>
              ))}
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
              {[
                { name: "AWS", icon: "bx bxl-aws" },
                { name: "AWS Lambda", icon: "bx bxl-aws" },
                { name: "API Gateway", icon: "bx bxl-aws" },
                { name: "AWS Cognito", icon: "bx bxl-aws" },
                { name: "AWS SES", icon: "bx bxl-aws" },
                { name: "Docker", icon: "bx bxl-docker" },
                { name: "CI/CD", icon: "bx bxs-server" }
              ].map((skill) => (
                <div key={skill.name} className="skills_data skills-card">
                  <div className="skills_titles">
                    <h3 className="skills_name skills-card-name">
                      {skill.name}
                    </h3>
                    <span>
                      <i className={`${skill.icon} skills-card-img`}></i>
                    </span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage"></span>
                  </div>
                </div>
              ))}
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
              {[
                { name: "Git", icon: "bx bxl-git" },
                { name: "GitHub", icon: "bx bxl-github" },
                { name: "Firebase", icon: "bx bxl-firebase" },
                { name: "Figma", icon: "bx bxl-figma" }
              ].map((skill) => (
                <div key={skill.name} className="skills_data skills-card">
                  <div className="skills_titles">
                    <h3 className="skills_name skills-card-name">
                      {skill.name}
                    </h3>
                    <span>
                      <i className={`${skill.icon} skills-card-img`}></i>
                    </span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
