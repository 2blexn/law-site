import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ eyebrow, title, lead, contacts, tags }) => (
  <div className="contact-card contact-card--info">
    <p className="contact-eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    <p className="contact-lead">{lead}</p>

    <ul className="contact-details-list">
      {contacts.map(({ label, value, href }) => (
        <li key={label}>
          <span className="contact-details-label">{label}</span>
          {href ? (
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              {value}
            </a>
          ) : (
            <span>{value}</span>
          )}
        </li>
      ))}
    </ul>

    <div className="contact-tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  </div>
);

export default ContactInfoCard;

