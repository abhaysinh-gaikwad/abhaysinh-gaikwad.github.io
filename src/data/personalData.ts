// src/data/personalData.ts

export type SocialLink = {
  href: string;
  iconClass: string;
  label: string;
};

export type PersonalData = {
  fullName: string;
  role: string;
  resumeLink: string;
  portfolioUrl: string;
  resumeDownloadLabel: string;
  socialLinks: SocialLink[];
};

export const personalData: PersonalData = {
  fullName: "Abhaysinh Gaikwad",
  role: "Node.js Backend Developer",

  // 👇 Direct link to your resume or portfolio site
  resumeLink: "https://abhaysinh.dev",
  portfolioUrl: "https://abhaysinh.dev",

  // 👇 Used for Google Analytics resume tracking
  resumeDownloadLabel: "Resume Download - Header",

  // 👇 Social media links
  socialLinks: [
    {
      href: "https://github.com/abhaysinh-gaikwad",
      iconClass: "uil uil-github-alt",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/abhaysinh-anil-gaikwad/",
      iconClass: "uil uil-linkedin-alt",
      label: "LinkedIn",
    },
  ],
};
