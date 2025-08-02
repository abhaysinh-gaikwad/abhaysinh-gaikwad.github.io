"use client";

import Image from "next/image";
import Link from "next/link";
import { personalData } from "../data/personalData";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <Image src="/Photos/3.png" alt="" width={300} height={300} />
        <div>
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">{personalData.fullName}</h1>
              <span className="footer_subtitle">{personalData.role}</span>
            </div>
            <div className="footer_socials">
              {personalData.socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="footer_social"
                >
                  <i className={link.iconClass}></i>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer_copy">
              Made with 🤍 by © {personalData.fullName} | 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
