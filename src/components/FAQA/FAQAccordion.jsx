import React, { useState } from "react";
import "./FAQAccordion.css";

const faqData = [
  {
    question: "Які документи потрібні для консультації?",
    answer: "Для первинної консультації достатньо мати паспорт або інший документ, що посвідчує особу. Якщо питання стосується конкретної справи — бажано взяти всі наявні документи по суті питання."
  },
  {
    question: "Чи можна отримати консультацію онлайн?",
    answer: "Так, ми надаємо консультації онлайн через Zoom, Google Meet або телефон. Просто вкажіть зручний для вас спосіб зв'язку при записі."
  },
  {
    question: "Скільки коштує первинна консультація?",
    answer: "Вартість первинної консультації залежить від складності питання, але ми завжди попередньо погоджуємо ціну з клієнтом."
  },
  {
    question: "Чи можу я отримати супровід угоди?",
    answer: "Так, наші юристи супроводжують угоди будь-якої складності: від перевірки документів до повного супроводу підписання."
  },
  {
    question: "Як швидко я отримаю відповідь на заявку?",
    answer: "Ми зв'яжемося з вами протягом робочого дня після отримання заявки."
  },
  {
    question: "Чи можлива допомога у суді?",
    answer: "Так, наші адвокати мають великий досвід представництва інтересів клієнтів у судах різних інстанцій."
  }
];

const FAQAccordion = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = idx => setOpenIdx(openIdx === idx ? null : idx);
  return (
    <section className="faq-section">
      <h2 className="faq-title">Часті запитання</h2>
      <div className="faq-accordion">
        {faqData.map((item, idx) => (
          <div className={`faq-item${openIdx === idx ? ' open' : ''}`} key={idx}>
            <button className="faq-question" onClick={() => toggle(idx)} aria-expanded={openIdx === idx}>
              <span>{item.question}</span>
              <span className="faq-icon">{openIdx === idx ? '−' : '+'}</span>
            </button>
            <div className="faq-answer" style={{maxHeight: openIdx === idx ? '300px' : '0'}}>
              <div className="faq-answer-inner">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion; 