import { useEffect, useState } from "react";

import "./styles.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to toggle visibility

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        {[...Array(50)].map((_, index) => (
          <p>This is the paragraph {index}</p>
        ))}
      </div>

      {isVisible && (
        <div className="container">
          {/* Show this button only after scrolling down */}
          <button
            className="backtotop-btn"
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
          >
            Back to Top
          </button>
        </div>
      )}
    </div>
  );
}
export default BackToTop;
