"use client";

import { useEffect } from "react";
import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    const initScrollReveal = async () => {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;

        const sr = ScrollReveal({
          origin: "top",
          distance: "50px",
          duration: 2000
        });

        sr.reveal(".home_data", { delay: 200 });
        sr.reveal(".home_img", { delay: 200 });
        sr.reveal(".home_social", { delay: 200 });
        sr.reveal(".home_social-icon", { interval: 100 });
        sr.reveal(".home_scroll", { delay: 200 });
        sr.reveal(".about_img", { delay: 200 });
        sr.reveal(".about_data", { delay: 200 });
        sr.reveal(".about_info", { interval: 200 });
        sr.reveal(".about_buttons", { interval: 100 });
        sr.reveal(".qualification", { delay: 200 });
        sr.reveal(".skills_container", {});
        sr.reveal(".skills_content", { delay: 200 });
        sr.reveal(".skills_header", { interval: 100 });
        sr.reveal(".section_subtitle", { delay: 200 });
        sr.reveal(".portfolio_container", { delay: 200 });
        sr.reveal(".project-card:not(.project-hidden)", { interval: 100 });
        sr.reveal(".statistics_container>img", { interval: 100 });
        sr.reveal(".calendar", { delay: 200 });
        sr.reveal(".contact_container", {});
        sr.reveal(".contact_information", { interval: 100 });
        sr.reveal("form>div", { interval: 200 });
        sr.reveal(".footer", {});
        sr.reveal(".footer_container>div", { interval: 100 });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <>
      <HomeSection />
      <hr className="hr_break_line" />
      <AboutSection />
      <hr className="hr_break_line" />
      <SkillsSection />
      <hr className="hr_break_line" />
      <ProjectsSection />
      <hr className="hr_break_line" />
      <StatisticsSection />
      <hr className="hr_break_line" />
      <ContactSection />
      <hr className="hr_break_line" />
    </>
  );
}
