import React from "react";
import './PhotoCollage.css';

const images = [
  {
    src: "/confident-employees-discussing-papers-meeting.jpg",
    alt: "Підписання контракту"
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    alt: "Рукопотискання юристів"
  },
  {
    src: "https://media.istockphoto.com/id/2170521834/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%8F-%D0%BB%D0%B5%D0%B4%D1%96-%D1%8E%D1%81%D1%82%D0%B8%D1%86%D1%96%D1%97-%D1%80%D0%BE%D0%B7%D0%BC%D1%96%D1%89%D0%B5%D0%BD%D0%B0-%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D0%BB%D1%96-%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D0%B0-%D0%B2-%D0%BE%D1%84%D1%96%D1%81%D1%96-%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%8F-%D0%BB%D0%B5%D0%B4%D1%96.jpg?s=612x612&w=0&k=20&c=DaPBhxlXseNQRNyFHS6mAW09oIe2mNwFDvv_9-EkoCw=",
    alt: "Терези"
  },
  {
    src: "/advokat-po-sudebnym-delam.jpg.webp",
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