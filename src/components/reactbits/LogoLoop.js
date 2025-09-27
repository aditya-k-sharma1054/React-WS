import React from "react";
import "./LogoLoop.css"; // add CSS separately

export default function LogoLoop({ logos = [], speed = 30 }) {
  return (
    <div className="logo-loop-container">
      <div
        className="logo-loop-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {logos.concat(logos).map((logo, i) => (
          <img key={i} src={logo} alt="logo" className="logo-icon" />
        ))}
      </div>
    </div>
  );
}
