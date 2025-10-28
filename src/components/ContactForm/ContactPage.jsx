import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ContactForm from "./ContactForm";
import "./ContactForm.css";

const ContactPage = () => {
  const [darkHeader, setDarkHeader] = useState(true);
  
  useEffect(() => {
    // Встановлюємо темний хедер для сторінки контактів
    document.querySelector('nav.header.navbar').classList.add('scrolled');
    
    return () => {
      // Прибираємо клас при розмонтуванні компонента
      const header = document.querySelector('nav.header.navbar');
      if (header) header.classList.remove('scrolled');
    };
  }, []);
  
  return (
    <>
      <Header />
      <main className="contact-main contact-main-bg">
        <section className="contact-card">
        <div className="contact-card-info">
          <h2>Зв'яжіться з нами</h2>
          <p className="contact-lead">
            Якщо у вас виникли питання або потрібна юридична допомога — залиште заявку або скористайтесь контактами нижче.
          </p>
          <div className="contact-details">
            <div><strong>Офіс:</strong> м. Київ, вул. Юридична, 10</div>
            <div><strong>Телефон:</strong> <a href="tel:+380441234567">+38 (044) 123-45-67</a></div>
            <div><strong>Email:</strong> <a href="mailto:info@prolex.ua">info@prolex.ua</a></div>
            <div><strong>Графік:</strong> 12:00 – 20:00</div>
          </div>
        </div>
        <div className="contact-card-form">
          <ContactForm />
        </div>
      </section>
    </main>
  </>
  );
}

export default ContactPage;