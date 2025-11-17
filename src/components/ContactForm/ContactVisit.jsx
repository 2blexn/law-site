import React from "react";
import "./ContactVisit.css";

const ContactVisit = ({ eyebrow, title, description, schedule, mapEmbedUrl, mapLink }) => (
  <section className="contact-visit">
    <div className="contact-visit__card">
      <p className="contact-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="contact-visit__schedule">
        <span>{schedule.label}</span>
        <strong>{schedule.value}</strong>
      </div>
    </div>
    <div className="contact-visit__map">
      <iframe
        title="Офіс ProLex"
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <a className="contact-visit__map-link" href={mapLink} target="_blank" rel="noreferrer">
        Відкрити карту
      </a>
    </div>
  </section>
);

export default ContactVisit;

