import React from "react";
import "./ContactHero.css";

const ContactHero = ({ eyebrow, title, lead, phone, phoneLink, badge, stats }) => (
  <section className="contact-hero">
    <div className="contact-hero__content">
      <p className="contact-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="contact-hero__lead">{lead}</p>
      <div className="contact-hero__cta">
        <a className="contact-hero__phone" href={phoneLink}>
          {phone}
        </a>
        <span className="contact-hero__badge">{badge}</span>
      </div>
    </div>
    <ul className="contact-hero__stats">
      {stats.map(({ value, description }) => (
        <li key={description}>
          <span>{value}</span>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default ContactHero;

