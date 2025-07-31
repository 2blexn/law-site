import React from "react";
import './About.css';

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <div className="about-image">
        <img src="/close-up-view-modern-business-people.jpg" alt="Наша команда" />
      </div>
      <div className="about-content">
        <h2>Про нас</h2>
        <p>
          <strong>ProLex</strong> — команда досвідчених юристів, які допомагають бізнесу та приватним особам захищати свої права, супроводжують угоди та вирішують складні правові питання. Ми працюємо для вашої впевненості у завтрашньому дні!
        </p>
        <ul className="about-advantages">
          <li>20+ років досвіду</li>
          <li>Індивідуальний підхід</li>
          <li>Конфіденційність та надійність</li>
          <li>Сучасні юридичні рішення</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About; 