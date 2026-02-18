import React from "react";
import { contact } from "../../../constants/contact";
import Icons from "../../Others/IconProvider";

const { FaMapMarkerAlt, FaGithub, FaLinkedin, IoMail } = Icons;

function Contact() {
  const { email, github, linkedin, country, city } = contact;

  const mainEmail = email.find((e) => e.main)?.address;
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Contacto</h1>
        </div>

        <div className="contact-list">
          {email.map((e, index) => (
            <a
              key={index}
              href={`mailto:${e.address}`}
              className={`contact-item ${e.main ? "main-email" : ""}`}
            >
              <IoMail className="contact-icon" />
              <div className="contact-text">
                <span className="contact-label">
                  {e.main ? "Email principal" : "Email alternativo"}
                </span>
                <span className="contact-value">{e.address}</span>
              </div>
            </a>
          ))}

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>

          {/* Ubicación */}
          <div className="contact-item location">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-value">
              {city}, {country}
            </span>

            <div className="availability">
              {contact.availability.map((mode, index) => (
                <span key={index} className="availability-badge">
                  {mode}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
