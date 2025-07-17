import React, { useState, useRef, useEffect } from "react";
import './Services.css';
import PhotoCollage from "./PhotoCollage";
import FAQAccordion from "../FAQA/FAQAccordion";
import About from "../About/About";

const reviews = [
  {
    name: "Олександр Коваленко",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Юридична компанія ProLex допомогла мені вирішити складну ситуацію! Їхня команда була надзвичайно обізнана та підтримувала мене на кожному етапі. Я отримав якісну юридичну допомогу і залишився задоволений результатом."
  },
  {
    name: "Анна Шевченко",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Я не могла бути більш задоволена сервісом, який отримала від цієї компанії. Юристи були уважними, відгукувались на всі мої питання і справді слухали мої потреби. Завдяки їхній експертизі, я отримала чудову підтримку у своїй справі."
  },
  {
    name: "Ігор Мельник",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Співпраця з ProLex стала для мене справжнім відкриттям. Я отримав цінні поради, які допомогли мені впоратися з усіма юридичними питаннями, і тепер відчуваю впевненість у своїх рішеннях."
  },
  {
    name: "Марія Гончар",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Дуже вдячна команді ProLex за професіоналізм та оперативність. Всі питання вирішувалися швидко і якісно. Рекомендую!"
  },
  {
    name: "Володимир Савчук",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "ProLex — це справжні експерти у своїй справі. Завжди отримую чіткі відповіді та грамотні поради."
  },
  {
    name: "Олена Дяченко",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Завдяки ProLex я змогла захистити свої інтереси у складній справі. Дуже вдячна за підтримку та людяність."
  }
];

const REVIEWS_PER_PAGE = 3;

const ReviewsCarousel = () => {
  const [active, setActive] = useState(0);
  const total = reviews.length;
  const intervalRef = useRef();
  const carouselRef = useRef();
  const AUTO_DELAY = 4000;

  const prev = () => setActive((prev) => (prev - 1 + total) % total);
  const next = () => setActive((prev) => (prev + 1) % total);
  const getIndex = (offset) => (active + offset + total) % total;

  useEffect(() => {
    const start = () => {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % total);
      }, AUTO_DELAY);
    };
    start();
    const node = carouselRef.current;
    if (node) {
      node.addEventListener('mouseenter', () => clearInterval(intervalRef.current));
      node.addEventListener('mouseleave', start);
    }
    return () => {
      clearInterval(intervalRef.current);
      if (node) {
        node.removeEventListener('mouseenter', () => clearInterval(intervalRef.current));
        node.removeEventListener('mouseleave', start);
      }
    };
  }, [total]);

  return (
    <div className="reviews-carousel" ref={carouselRef}>
      <button className="slider-arrow slider-arrow-left" onClick={prev} aria-label="Попередній відгук">&#8592;</button>
      {[ -1, 0, 1 ].map((offset) => {
        const idx = getIndex(offset);
        const cardClass = offset === 0 ? 'review-card-center' : 'review-card-side';
        return (
          <div className={`review-card review-card-slider ${cardClass}`} key={idx} style={{zIndex: offset === 0 ? 2 : 1}}>
            <img src={reviews[idx].avatar} alt={reviews[idx].name} className="review-avatar" />
            <div className="review-name">{reviews[idx].name}</div>
            <div className="review-text">{reviews[idx].text}</div>
          </div>
        );
      })}
      <button className="slider-arrow slider-arrow-right" onClick={next} aria-label="Наступний відгук">&#8594;</button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services-section">
      <About />
      <div className="services-header" id="services">
        <h2>Наші послуги</h2>
        <p>
          Юридична компанія <strong>ProLex</strong> — це команда досвідчених юристів, яка надає професійні послуги для бізнесу та приватних осіб. Ми допомагаємо захистити ваші права, супроводжуємо угоди та вирішуємо складні правові питання. Обирайте надійного партнера для впевненості у завтрашньому дні.
        </p>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <h3>Юридичний супровід</h3>
          <p>
            Комплексний супровід бізнесу та приватних осіб: від підготовки документів до представництва у суді. Ми забезпечуємо повний правовий захист на кожному етапі.
          </p>
          <a href="#contact" className="service-contact">Зв'язатися <span>&#8594;</span></a>
        </div>
        <div className="service-card">
          <h3>Консультації</h3>
          <p>
            Надання професійних юридичних консультацій з різних галузей права. Допоможемо знайти оптимальне рішення для вашої ситуації та уникнути ризиків.
          </p>
          <a href="#contact" className="service-contact">Зв'язатися <span>&#8594;</span></a>
        </div>
        <div className="service-card">
          <h3>Захист інтересів</h3>
          <p>
            Представництво у судах, органах влади та перед контрагентами. Ваша впевненість у результаті — наш головний пріоритет.
          </p>
          <a href="#contact" className="service-contact">Зв'язатися <span>&#8594;</span></a>
        </div>
      </div>

      {/* Photo collage instead of single image */}
      <PhotoCollage />

      {/* Reviews slider */}
      <section className="reviews-section" id="reviews">
        <h2 className="reviews-title">Відгуки</h2>
        <ReviewsCarousel />
      </section>
			     {/* FAQ Accordion */}
      <FAQAccordion />
    </section>
  );
};

export default Services;
