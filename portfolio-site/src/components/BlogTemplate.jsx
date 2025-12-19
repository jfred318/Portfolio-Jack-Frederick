import { useState } from "react";

export default function BlogTemplate({ title, posts }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="blog-template">
      {/* BLOG BOX */}
      <div className="blog-box">
        {/* HEADER */}
        <div className="blog-header">
          <h2 className="blog-date">{posts[activeIndex].date}</h2>

          <select
            className="blog-dropdown"
            value={activeIndex}
            onChange={(e) => setActiveIndex(Number(e.target.value))}
          >
            {posts.map((post, index) => (
              <option key={index} value={index}>
                {post.date}
              </option>
            ))}
          </select>
        </div>

        {/* CONTENT */}
        <div className="blog-content">
          <p>{posts[activeIndex].content}</p>
        </div>
      </div>

      {/* PAGE TITLE */}
      <h1 className="page-title">{title}</h1>
    </div>
  );
}
