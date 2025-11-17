import React from "react";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import ContactInfoCard from "./ContactInfoCard";
import ContactVisit from "./ContactVisit";
import "./ContactPage.css";

const contacts = [
  {
    label: "Офіс",
    value: "Бізнес-центр Парус, вулиця Мечникова, 3-й поверх, 2, Київ",
    href: "https://maps.app.goo.gl/PsTexjZC6SDEKTpa9",
  },
  {
    label: "Телефон",
    value: "+38 (044) 123-45-67",
    href: "tel:+380441234567",
  },
  {
    label: "Email",
    value: "info@prolex.ua",
    href: "mailto:info@prolex.ua",
  },
  {
    label: "Графік",
    value: "Пн–Пт: 12:00 – 20:00",
  },
];

const heroStats = [
  { value: "20+", description: "років судової практики" },
  { value: "97%", description: "успішних справ" },
  { value: "500+", description: "клієнтів по всій Україні" },
];

const mapEmbedUrl =
  "https://maps.google.com/maps?q=%D0%91%D1%96%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%D0%9F%D0%B0%D1%80%D1%83%D1%81%2C%20%D0%BC.%20%D0%9A%D0%B8%D1%97%D0%B2&t=&z=16&ie=UTF8&iwloc=&output=embed";
const mapLink = "https://maps.app.goo.gl/PsTexjZC6SDEKTpa9";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <ContactHero
        eyebrow="Контакти"
        title="Діалог, що починає захист ваших інтересів"
        lead="Напишіть або зателефонуйте нам — команда ProLex швидко повернеться з відповіддю, підготує стратегію та супроводить справу на кожному етапі."
        phone="+38 (044) 123-45-67"
        phoneLink="tel:+380441234567"
        badge="24/7 для бізнесу та приватних клієнтів"
        stats={heroStats}
      />

      <section className="contact-layout">
        <ContactInfoCard
          eyebrow="Як нас знайти"
          title="Звʼяжіться з нами зручним способом"
          lead="Залиште коротке повідомлення або скористайтесь прямими каналами — ми відповімо протягом 15 хвилин у робочий час."
          contacts={contacts}
          tags={["#комерційні_спори", "#кримінальний_захист", "#сімейне_право"]}
        />

        <div className="contact-card contact-card--form">
          <ContactForm />
        </div>
      </section>

      <ContactVisit
        eyebrow="Офлайн консультації"
        title="Коворкінг ProLex у центрі Києва"
        description="Комфортний простір для переговорів, доступний паркінг та конфіденційні переговорні кімнати. Попередьте нас про візит — підготуємо досьє та документи до зустрічі."
        schedule={{ label: "Пн–Пт", value: "12:00 – 20:00" }}
        mapEmbedUrl={mapEmbedUrl}
        mapLink={mapLink}
      />
    </main>
  );
};

export default ContactPage;