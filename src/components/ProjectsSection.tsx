"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "../data/projectsData"; // adjust path as needed

export const ProjectsSection = () => {
  const [isShowingAll, setIsShowingAll] = useState(false);

  useEffect(() => {
    const seeAllButton = document.getElementById("see-all-projects");
    const projectCards = document.querySelectorAll(".project-card");

    const handleToggle = async () => {
      const newState = !isShowingAll;
      setIsShowingAll(newState);

      projectCards.forEach((card, index) => {
        if (index >= 5) {
          card.classList.toggle("project-hidden", !newState);
        }
      });

      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;
        ScrollReveal().reveal(".project-card:not(.project-hidden)", {
          delay: 200
        });

        if (window.gtag) {
          window.gtag("event", "toggle_projects", {
            event_category: "Button",
            event_label: newState ? "See All Projects" : "Show Less"
          });
        }

        if (!newState) {
          const element = document.getElementById("projects");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };

    seeAllButton?.addEventListener("click", handleToggle);
    return () => {
      seeAllButton?.removeEventListener("click", handleToggle);
    };
  }, [isShowingAll]);

  return (
    <div id="projects" className="portfolio_container container">
      <h2 className="section_title">Projects</h2>
      <div id="project-list">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`portfolio_content grid project-card ${index >= 5 ? "project-hidden" : ""}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="portfolio_img"
              width={300}
              height={200}
            />
            <div className="portfolio_data">
              <h3 className="portfolio_title project_title">{project.title}</h3>
              <p className="portfolio_description project-description">{project.description}</p>
              <p className="project-tech-stack">
                <b>Tech Stack: </b>{project.techStack}
              </p>
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="button button-flex button-small portfolio_button project-github-link"
                >
                  GitHub <i className="uil uil-github-alt button_icon"></i>
                </Link>
              )}
              <Link
                href={project.liveLink}
                target="_blank"
                className="button button-flex button-small portfolio_button project-deployed-link"
              >
                {project.liveLink === "#" ? "Coming Soon" : "Live"} <i className="uil uil-external-link-alt button_icon"></i>
              </Link>
              {project.apiDocsLink && (
                <Link
                  href={project.apiDocsLink}
                  target="_blank"
                  className="button button-flex button-small portfolio_button project-deployed-link"
                >
                  API Docs <i className="uil uil-file-alt button_icon"></i>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="see-all-container" style={{ textAlign: "center", marginTop: "20px" }}>
        <button id="see-all-projects" className="button button-flex">
          {isShowingAll ? "Show Less" : "See All Projects"}{" "}
          <i className={`uil uil-arrow-${isShowingAll ? "up" : "down"} button_icon`}></i>
        </button>
      </div>
    </div>
  );
};
