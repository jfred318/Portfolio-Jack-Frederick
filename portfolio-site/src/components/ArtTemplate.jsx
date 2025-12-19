import { useState } from "react";

export default function ArtTemplate({ title, pieces }) {
  const [activeTitle, setActiveTitle] = useState("");

  return (
    <div className="art-template">
      {/* TITLE BOX */}
      <div className="art-title-box">
        {activeTitle || "Hover over a piece"}
      </div>

      {/* ART CANVAS */}
      <div className="art-canvas">
        {pieces.map((piece, index) => (
          <div
            key={index}
            className="art-piece"
            style={{
              top: piece.top,
              left: piece.left,
              width: piece.size,
              height: piece.size,
              animationDelay: `${index * 1.1}s`,
            }}
            onMouseEnter={() => setActiveTitle(piece.title)}
            onMouseLeave={() => setActiveTitle("")}
          >
            <img
              src={piece.src}
              alt={piece.title}
              className="art-image"
            />
          </div>
        ))}
      </div>

      <h1 className="art-page-title">{title}</h1>
    </div>
  );
}
