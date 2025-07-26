"use client";

import { useState } from "react";
import Link from "next/link";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mbjnozkp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      console.log("response",response);
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        // Track form submission with Google Analytics
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "contact_form_submit", {
            event_category: "Form",
            event_label: "Contact Form Submission",
          });
        }
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact Me</h2>
      <div className="contact_container container grid">
        <div>
          <p className="contact_message">
            Feel free to drop a message if you have any suggestions or
            collaboration ideas, and we'll get in touch.
          </p>
          <div className="contact_information">
            <i className="uil uil-phone-alt contact_icon"></i>
            <div>
              <h3 id="contact-phone" className="contact_title">
                Contact Me
              </h3>
              <span className="contact_subtitle">+91 7666387724</span>
            </div>
          </div>
          <div className="contact_information">
            <i className="uil uil-envelope-alt contact_icon"></i>
            <div id="contact-email">
              <h3 className="contact_title">Email-Id</h3>
              <span className="contact_subtitle">abhaygaikwad7666@gmail.com</span>
            </div>
          </div>
          <div className="contact_information">
            <i className="uil uil-location-pin-alt contact_icon"></i>
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">Sangli, Maharashtra</span>
            </div>
          </div>
          <div className="contact_information">
            <i className="uil uil-linkedin-alt contact_icon"></i>
            <div>
              <h3 className="contact_title">LinkedIn</h3>
              <Link
                href="https://www.linkedin.com/in/abhaysinh-anil-gaikwad/"
                target="_blank"
              >
                <span className="contact_subtitle">
                  https://www.linkedin.com/in/abhaysinh0/
                </span>
              </Link>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label htmlFor="name" className="contact_label">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="contact_input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact_content">
              <label htmlFor="email" className="contact_label">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                className="contact_input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact_content">
            <label htmlFor="message" className="contact_label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={0}
              rows={7}
              className="contact_input"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button className="button button-flex" type="submit">
              Send Message
              <i className="uil uil-message button_icon"></i>
            </button>
          </div>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
};
