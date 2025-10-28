import { useEffect, useRef } from "react";
import "./styles/Carousel.css";

function Carousel() {
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          const nextButton = carousel.querySelector('.carousel-control-next');
          if (nextButton) nextButton.click();
        } else {
          // Swipe right - previous slide
          const prevButton = carousel.querySelector('.carousel-control-prev');
          if (prevButton) prevButton.click();
        }
      }
    };

    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <>
      <div 
        ref={carouselRef}
        id="carouselExampleIndicators" 
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/header-img-1.jpg"
              className="d-block w-100"
              alt="About"
            />
            <div className="carousel-caption-left">
              <h1>
                Юридична компанія <strong>ProLex</strong>
              </h1>
              <p>
                Ми пропонуємо професійні юридичні послуги, які відповідають
                вашим потребам та забезпечують правовий захист у різних сферах.
              </p>
              <a className="btn-custom" href="#services" role="button">
                Дізнатися більше
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./mid-adult-couple-their-financial-advisor-discussing-about-paperwork-meeting.jpg"
              className="d-block w-100"
              alt="Наша команда"
            />
            <div className="carousel-caption-left">
              <h1>Наша команда</h1>
              <p>
                Досвідчені юристи, які працюють разом для досягнення найкращого
                результату для кожного клієнта.
              </p>
              <a className="btn-custom" href="#about" role="button">
                Про нас
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="insurance-agent-having-meeting-with-senior-clients-pointing-place-signature-contract.jpg"
              className="d-block w-100"
              alt="Консультації"
            />
            <div className="carousel-caption-left">
              <h1>Консультації та підтримка</h1>
              <p>
                Ми завжди поруч, щоб надати кваліфіковану юридичну консультацію
                та підтримку у складних ситуаціях.
              </p>
              <a className="btn-custom" href="#contacts" role="button">
                Зв'язатися
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="judge-with-gavel-courtroom.jpg"
              className="d-block w-100"
              alt="Захист інтересів"
            />
            <div className="carousel-caption-left">
              <h1>Захист ваших інтересів</h1>
              <p>
                Представництво у судах, органах влади та перед контрагентами.
                Ваші права — наш пріоритет.
              </p>
              <a className="btn-custom" href="#services" role="button">
                Наші послуги
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
