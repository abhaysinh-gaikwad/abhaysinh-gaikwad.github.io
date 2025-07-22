"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProjectsSection = () => {
  const [isShowingAll, setIsShowingAll] = useState(false);

  const projects = [
    {
      title: "PropFTX",
      description:
        "Led the development of PropFTX, the world’s first fractional real estate investment platform using AI and blockchain...",
      techStack:
        "Node.js | MySQL | AWS (Lambda, API Gateway, Cognito, SES) | Next.js | TypeScript | CI/CD | GitHub",
      image: "/Photos/propftx.png",
      liveLink: "https://propftx.com"
    },
    {
      title: "Phoenix-Escrows",
      description: "Developed an escrow management platform in partnership with IDFC Bank...",
      techStack: "Node.js | MySQL | AWS | TypeScript | CI/CD | GitHub",
      image: "/Photos/Dashboard.png",
      liveLink: "https://letsphoenix.com/"
    },
    {
      title: "WowCurze",
      description: "Built a co-own car platform with a slot reservation system to prevent overbooking...",
      techStack: "Node.js | MySQL | AWS (SES, Lambda) | Next.js | TypeScript | CI/CD | GitHub",
      image: "/Photos/wowcurze.jpg",
      liveLink: "#"
    },
    {
      title: "Kitchen-Kingdom-AI",
      description: "AI-generated recipes from user-provided ingredients for a delightful cooking experience.",
      techStack: "Gen-ai | Node.js | Express.js | React.js | HTML | CSS | JavaScript | MongoDB | Github",
      image: "/Photos/kitechenkingdom-ai.png",
      liveLink: "https://kitchen-kingdom-ai.vercel.app/",
      githubLink: "https://github.com/abhaysinh-gaikwad/Kitchen-Kingdom-AI"
    },
    {
      title: "Kanban Task Management Tool",
      description: "TypeScript-driven Kanban API + frontend with CRUD, JWT, Swagger, and MongoDB.",
      techStack: "TypeScript | Node.js | Express.js | MongoDB | Swagger | HTML | CSS | JavaScript | GitHub",
      image: "/Photos/kanban.png",
      liveLink: "https://kanban-task-mangment-tool.vercel.app/",
      githubLink: "https://github.com/abhaysinh-gaikwad/Kanban-Task-Mangment-Tool",
      apiDocsLink: "https://kanban-task-mangment-tool-1.onrender.com/api-docs/"
    },
    {
      title: "TIC-TAC-GOO",
      description: "Multiplayer real-time Tic Tac Toe with lobby and chat using WebSockets.",
      techStack: "Node.js | Express.js | Web Sockets | Socket.io | HTML5 | CSS | JavaScript | MongoDB | Github",
      image: "/Photos/Tic-Tac-Goo.png",
      liveLink: "https://compiler-chetna-2345.vercel.app/",
      githubLink: "https://github.com/abhaysinh-gaikwad/Compiler-Chetna-2345"
    },
    {
      title: "Code-Collab",
      description: "Real-time collaborative coding platform with syntax highlighting, compiler support, auth, and leaderboard.",
      techStack: "HTML5 | CSS | JavaScript | Node.js | Express.js | MongoDB | Codemirror | Compilex | Github",
      image: "/Photos/codeCollab.png",
      liveLink: "https://cwcode-collacode-481ac6.netlify.app/home_page/",
      githubLink: "https://github.com/abhaysinh-gaikwad/cipher-sorceress-0123"
    },
    {
      title: "Employee Management System",
      description: "REST API backend with auth, CRUD, pagination, and Swagger docs, built with Express and MongoDB.",
      techStack: "Node.js | Express.js | JWT | bcrypt | MongoDB | Swagger | HTML | CSS | JavaScript | GitHub",
      image: "/Photos/employees mangment.png",
      liveLink: "https://employee-management-system-pied.vercel.app/",
      githubLink: "https://github.com/abhaysinh-gaikwad/Employee-Management-System",
      apiDocsLink: "https://all-backend-servers.onrender.com/api-docs/"
    },
    {
      title: "i-Mind",
      description: "Mental health awareness platform designed to impact Indian audiences with resources and support.",
      techStack: "HTML5 | CSS | JavaScript | Mock API | Bootstrap | Figma",
      image: "/Photos/imind.png",
      liveLink: "https://65adf28e70a827e82364a0f3--fascinating-pithivier-6c8ab6.netlify.app/",
      githubLink: "https://github.com/abhaysinh-gaikwad/code-cruncher-2109"
    }
  ];

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

        // 👉 Scroll to top ONLY when collapsing
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
