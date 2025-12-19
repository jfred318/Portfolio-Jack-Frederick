import { useState } from "react";

export default function ExperienceTimeline({ title, experiences, startYear, endYear }) {
  const [active, setActive] = useState(null);

  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

  const yearToPercent = (year) => {
    return ((year - startYear) / (endYear - startYear)) * 100;
  };

  // =====================================================
  // 🔥 OVERLAP DETECTION — AUTOMATIC ROW ASSIGNMENT
  // =====================================================
  const rows = []; // array of rows (each row holds bars)
  const barRows = experiences.map((exp) => {
    for (let row = 0; ; row++) {
      // If row doesn't exist yet → create it
      if (!rows[row]) {
        rows[row] = [{ start: exp.start, end: exp.end }];
        return row;
      }

      // Check if this exp overlaps ANY bar already in this row
      const hasOverlap = rows[row].some((b) => {
        return !(exp.end < b.start || exp.start > b.end);
      });

      // If no overlap → place exp in this row
      if (!hasOverlap) {
        rows[row].push({ start: exp.start, end: exp.end });
        return row;
      }
    }
  });

  // =====================================================
  // JSX RETURN
  // =====================================================
  return (
    <div className="experience-template">
      {/* YELLOW TEXT BOX */}
      <div className="experience-text-box">
        {active !== null ? (
          <>
            <h2>{experiences[active].title}</h2>
            <p>{experiences[active].description}</p>
          </>
        ) : (
          <p>Select an experience bar</p>
        )}
      </div>

      <div className="timeline-area">
        {experiences.map((exp, index) => {
          const left = yearToPercent(exp.start);
          const right = 100 - yearToPercent(exp.end);

          return (
            <div
              key={index}
              className={`timeline-bar ${active === index ? "active" : ""}`}
              style={{
                left: `${left}%`,
                right: `${right}%`,
                top: `${barRows[index] * 45}px`,
              }}
              onClick={() => setActive(index)}
            ></div>
          );
        })}

        {/* YEARS */}
        <div className="year-row">
          {years.map((yr) => (
            <div key={yr} className="year-label">
              {yr}
            </div>
          ))}
        </div>
      </div>

      <h1 className="experience-page-title">{title}</h1>
    </div>
  );
}
