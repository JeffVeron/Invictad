import React from "react";

const ProgressBar = ({ progress, height = "20px", backgroundColor = "#eee", barColor = "#ffda2e" }) => {
  return (
    <div style={{
      width: "100%",
      backgroundColor,
      borderRadius: "10px",
      overflow: "hidden",
      height,
    }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: barColor,
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
