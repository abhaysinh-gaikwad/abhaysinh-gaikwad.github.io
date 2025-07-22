"use client";

import { useEffect } from "react";
import Image from "next/image";
import GitHubCalendar from "github-calendar";

export const StatisticsSection = () => {
  useEffect(() => {
    const calendarEl = document.querySelector(".calendar");
    if (calendarEl && typeof window !== "undefined") {
      GitHubCalendar(calendarEl, "abhaysinh-gaikwad", {
        responsive: true,
        global_stats: true,
        tooltips: true
      });

      if (window.gtag) {
        window.gtag("event", "view_github_stats", {
          event_category: "Section",
          event_label: "GitHub Statistics"
        });
      }
    }
  }, []);

  return (
    <section className="statistics section" id="statistics">
      <h2 className="section_title">Statistics</h2>
      <span className="section_subtitle">My Github Statistics</span>

      <div className="statistics_container container grid">
        <img
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=abhaysinh-gaikwad"
          alt="github-stats-card"
        />
        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhaysinh-gaikwad&langs_count=4&theme=city_light&include_all_commits=true&count_private=true&layout=compact"
          alt="github-top-langs"
        />
        <Image
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=abhaysinh-gaikwad&ring=5094f0&currStreakLabel=5094f0&fire=5094f0&theme=city_light"
          alt="github-streak-stats"
          width={500}
          height={200}
        />
      </div>

      <span className="section_subtitle">Github Calendar</span>

      {
        <div>
          <img
            style={{ width: "100%", padding: "0% 10%" }}
            src="https://ghchart.rshah.org/abhaysinh-gaikwad"
            alt="c"
          />
        </div>
      }

    </section>
  );
};
