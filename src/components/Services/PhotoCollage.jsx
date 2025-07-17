import React from "react";
import './PhotoCollage.css';

const images = [
  {
    src: "../../../public/confident-employees-discussing-papers-meeting.jpg",
    alt: "Підписання контракту"
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    alt: "Рукопотискання юристів"
  },
  {
    src: "https://stihi.ru/pics/2019/11/18/8408.jpg",
    alt: "Юридичні книги"
  },
  {
    src: "../../../public/advokat-po-sudebnym-delam.jpg.webp",
    alt: "Робота юриста"
  }
];

const PhotoCollage = () => (
  <div className="photo-collage">
    <div className="collage-row">
      <div className="collage-img collage-img-lg">
        <img src={images[0].src} alt={images[0].alt} />
        <div className="collage-overlay" />
      </div>
      <div className="collage-img collage-img-sm">
        <img src={images[1].src} alt={images[1].alt} />
        <div className="collage-overlay" />
      </div>
    </div>
    <div className="collage-row">
      <div className="collage-img collage-img--left collage-img-sm">
        <img src={images[2].src} alt={images[2].alt} />
        <div className="collage-overlay" />
      </div>
      <div className="collage-img collage-img-md">
        <img src={images[3].src} alt={images[3].alt} />
        <div className="collage-overlay" />
      </div>
    </div>
  </div>
);

export default PhotoCollage; 