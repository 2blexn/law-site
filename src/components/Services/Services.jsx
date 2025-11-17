import React from "react";
import "./Services.css";
import PhotoCollage from "../PhotoCollage/PhotoCollage";
import FAQAccordion from "../FAQA/FAQAccordion";
import About from "../About/About";
import ReviewsCarousel from "../Reviews/ReviewsCarousel";
import PromoBanner from "../PromoBanner/PromoBanner";
import HighlightBlock from "../HighlightBlock/HighlightBlock";

const Services = () => {
  return (
    <section className="services-section">
      <About />
      <PromoBanner />

      <div className="services-header" id="services">
        <h2>Наші послуги</h2>
        <div className="services-underline"></div>
        <p>
          Юридична компанія <strong>ProLex</strong> — це команда досвідчених
          юристів, яка надає професійні послуги для бізнесу та приватних осіб.
          Ми допомагаємо захистити ваші права, супроводжуємо угоди та вирішуємо
          складні правові питання. Обирайте надійного партнера для впевненості у
          завтрашньому дні.
        </p>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <h3>Юридичний супровід</h3>
          <p>
            Комплексний супровід бізнесу та приватних осіб: від підготовки
            документів до представництва у суді. Ми забезпечуємо повний правовий
            захист на кожному етапі.
          </p>
          <a href="#contact" className="service-contact">
            Зв'язатися <span>&#8594;</span>
          </a>
        </div>
        <div className="service-card">
          <h3>Консультації</h3>
          <p>
            Надання професійних юридичних консультацій з різних галузей права.
            Допоможемо знайти оптимальне рішення для вашої ситуації та уникнути
            ризиків.
          </p>
          <a href="#contact" className="service-contact">
            Зв'язатися <span>&#8594;</span>
          </a>
        </div>
        <div className="service-card">
          <h3>Захист інтересів</h3>
          <p>
            Представництво у судах, органах влади та перед контрагентами. Ваша
            впевненість у результаті — наш головний пріоритет.
          </p>
          <a href="#contact" className="service-contact">
            Зв'язатися <span>&#8594;</span>
          </a>
        </div>
      </div>

      <PhotoCollage />

      <HighlightBlock />

      <section className="reviews-section" id="reviews">
        <h2 className="reviews-title">Відгуки</h2>
        <ReviewsCarousel />
      </section>

      <FAQAccordion />
    </section>
  );
};

export default Services;
