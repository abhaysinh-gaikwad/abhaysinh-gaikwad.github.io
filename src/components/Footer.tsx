import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <Image src="/Photos/3.png" alt="" width={300} height={300} />
        <div>
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">Abhaysinh Gaikwad</h1>
              <span className="footer_subtitle">Node.js Backend Developer</span>
            </div>
            <div className="footer_socials">
              <Link
                href="https://github.com/abhaysinh-gaikwad"
                target="_blank"
                className="footer_social"
              >
                <i className="uil uil-github-alt"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/abhaysinh-anil-gaikwad/"
                target="_blank"
                className="footer_social"
              >
                <i className="uil uil-linkedin-alt"></i>
              </Link>
            </div>
          </div>
          <div>
            <p className="footer_copy">
              Made with 🤍 by © Abhaysinh Gaikwad | 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
