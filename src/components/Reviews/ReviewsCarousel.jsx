import React, { useState, useRef, useEffect } from "react";
import "./ReviewsCarousel.css";
import { reviews } from "./reviewsData.js";

const ReviewsCarousel = () => {
  const [active, setActive] = useState(0);
  const total = reviews.length;
  const intervalRef = useRef();
  const carouselRef = useRef();
  const touchStartX = useRef(null);
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
      node.addEventListener("mouseenter", () =>
        clearInterval(intervalRef.current)
      );
      node.addEventListener("mouseleave", start);
    }
    return () => {
      clearInterval(intervalRef.current);
      if (node) {
        node.removeEventListener("mouseenter", () =>
          clearInterval(intervalRef.current)
        );
        node.removeEventListener("mouseleave", start);
      }
    };
  }, [total]);

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      if (touchStartX.current === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) prev();
        else next();
      }
      touchStartX.current = null;
    };
    node.addEventListener("touchstart", handleTouchStart);
    node.addEventListener("touchend", handleTouchEnd);
    return () => {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchend", handleTouchEnd);
    };
  }, [total]);

  const isDesktop = () => window.innerWidth > 900;

  return (
    <div className="reviews-carousel" ref={carouselRef}>
      {isDesktop() && (
        <button
          className="slider-arrow slider-arrow-left"
          onClick={prev}
          aria-label="Попередній відгук"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      {[-1, 0, 1].map((offset) => {
        const idx = getIndex(offset);
        const cardClass =
          offset === 0 ? "review-card-center" : "review-card-side";
        return (
          <div
            className={`review-card review-card-slider ${cardClass}`}
            key={idx}
            style={{ zIndex: offset === 0 ? 2 : 1 }}
          >
            <img
              src={reviews[idx].avatar}
              alt={reviews[idx].name}
              className="review-avatar"
            />
            <div className="review-name">{reviews[idx].name}</div>
            <div className="review-text">{reviews[idx].text}</div>
          </div>
        );
      })}
      {isDesktop() && (
        <button
          className="slider-arrow slider-arrow-right"
          onClick={next}
          aria-label="Наступний відгук"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ReviewsCarousel;
