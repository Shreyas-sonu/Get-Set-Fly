import React from "react";

const Spinner = () => {
  return (
    <section id="spinner">
      <svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg">
        <circle
          cx={50}
          cy={50}
          r={50}
          fill="transparent"
          strokeWidth="8px"
          strokeDasharray={160}
        />
      </svg>
    </section>
  );
};

export default Spinner;
