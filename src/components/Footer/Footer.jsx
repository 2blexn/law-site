import React from "react";
import './Footer.css';

const socialLinks = [
  { href: '#', label: 'Facebook', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M17.525 8.998h-3.025V7.498c0-.6.4-.738.675-.738h2.3V4.1L14.7 4.09c-2.7 0-3.2 2.025-3.2 3.325v1.583H8.5v3.002h2.999V20h3.001v-7.002h2.025l.5-3.002Z"/></svg>
  ) },
  { href: '#', label: 'LinkedIn', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 6.5A1.5 1.5 0 1 0 8 11.5a1.5 1.5 0 0 0 1.5-2Zm-2 9.5h3V11h-3v8Zm7.25-8c-1.2 0-1.75.66-2.06 1.13V11h-3v8h3v-4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V19h3v-4.5c0-2.21-1.79-4-4-4Z"/></svg>
  ) },
  { href: '#', label: 'Instagram', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10Zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  ) },
  { href: '#', label: 'Telegram', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M21.944 4.708a1.5 1.5 0 0 0-1.68-1.18c-3.13.56-13.13 2.36-16.8 3.04a1.5 1.5 0 0 0-.32 2.88l4.1 1.44 1.54 4.7a1.5 1.5 0 0 0 2.38.7l2.1-1.7 3.44 2.54a1.5 1.5 0 0 0 2.38-.86l2.2-9.5a1.5 1.5 0 0 0-.36-1.04ZM9.5 13.5l-1.2-3.7 7.7-3.2-5.5 6.9Zm2.1 1.1a.5.5 0 0 1-.8-.23l-.3-.93 1.6-1.3 2.1 1.56-2.6 1.97Zm7.1-9.7-2.2 9.5-3.44-2.54a1.5 1.5 0 0 0-1.82-.08l-2.1 1.7-1.54-4.7a1.5 1.5 0 0 0-.94-.97l-4.1-1.44c3.67-.68 13.67-2.48 16.8-3.04a.5.5 0 0 1 .56.39Z"/></svg>
  ) },
];

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-contacts-block">
      <h2 className="footer-title">Звʼяжіться з нами</h2>
      <div className="footer-contacts-row">
        <div className="footer-contact-col">
          <div className="footer-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path fill="#fff" d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
            </svg>
          </div>
          <div className="footer-contact-title">Контакти</div>
          <div className="footer-contact-text">info@prolex.com<br/>+38 (044) 123-45-67</div>
        </div>
        <div className="footer-contact-col">
          <div className="footer-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path fill="#fff" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
            </svg>
          </div>
          <div className="footer-contact-title">Адреса</div>
          <div className="footer-contact-text">Бізнес-центр Парус, вулиця Мечникова, 3-й поверх, 2, Київ<br/>Україна</div>
        </div>
        <div className="footer-contact-col">
          <div className="footer-icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path fill="#fff" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm1 11h5v2h-7V6h2v6z"/>
            </svg>
          </div>
          <div className="footer-contact-title">Графік роботи</div>
          <div className="footer-contact-text">12:00 – 20:00</div>
        </div>
      </div>
    </div>
    <div className="footer-newsletter-block">
      <h2 className="footer-title">Отримуйте наші новини</h2>
      <form className="footer-newsletter-form" onSubmit={e => e.preventDefault()}>
        <input type="email" className="footer-input" placeholder="Введіть вашу електронну пошту" required />
        <button type="submit" className="footer-btn">Підписатися</button>
      </form>
      <div className="footer-socials">
        {socialLinks.map(link => (
          <a href={link.href} aria-label={link.label} className="footer-social" key={link.label} target="_blank" rel="noopener noreferrer">
            {link.icon}
            <span className="footer-social-label">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
    <div className="footer-copyright">
      © {new Date().getFullYear()} Юридична компанія ProLex. Всі права захищені<br/>
    </div>
  </footer>
);

export default Footer; 