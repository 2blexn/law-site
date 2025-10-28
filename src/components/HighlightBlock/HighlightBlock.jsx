import React from "react";
import "./HighlightBlock.css";

const HighlightBlock = () => {
  return (
    <section className="highlight-section" aria-label="Ключові показники ProLex">
      <div className="stats-banner">
        <div className="statue-wrap">
          <img src="/statue.png" alt="Статуя Феміди" className="statue-img" />
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-num">20</div>
            <div className="stat-chip">років на ринку</div>
            <div className="stat-chip sub">юридичних послуг</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">13</div>
            <div className="stat-chip">професійних</div>
            <div className="stat-chip sub">юристів та адвокатів</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">98</div>
            <div className="stat-chip">постійних</div>
            <div className="stat-chip sub">клієнтів</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3500+</div>
            <div className="stat-chip">виграних</div>
            <div className="stat-chip sub">справ та процесів</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightBlock;


