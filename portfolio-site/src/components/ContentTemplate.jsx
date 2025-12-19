import { useState } from "react";

export default function ContentTemplate({ title, textSections, images }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="content-template">
      {/* LEFT COLUMN */}
      <div className="text-column">
        {/* DOTS ABOVE TEXT */}
        <div className="slider-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`slider-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        {/* TEXT BOX */}
        <div className="text-box">
          <p>{textSections[index]}</p>
        </div>
      </div>

      {/* RIGHT COLUMN — IMAGE ONLY */}
      <div className="image-only">
        <img
          loading="lazy"
          src={`${import.meta.env.BASE_URL}${images[index]}`}
          alt={`Slide ${index + 1}`}
          className="slider-image"
        />
      </div>

      {/* PAGE TITLE */}
      <h1 className="page-title">{title}</h1>
    </div>
  );
}
