import { useState, useEffect } from "react";


export default function ContentTemplate({ title, textSections, images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = `${import.meta.env.BASE_URL}${img}`;
    });
  }, [images]);
    
  return (
    <div className="content-template">

      <div className="text-column">

        <div className="slider-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`slider-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>


        <div className="text-box">
          <p>{textSections[index]}</p>
        </div>
      </div>


      <div className="image-only">
        <img
          src={`${import.meta.env.BASE_URL}${images[index]}`}
          alt={`Slide ${index + 1}`}
          className="slider-image"
        />
      </div>


      <h1 className="page-title">{title}</h1>
    </div>
  );
}
