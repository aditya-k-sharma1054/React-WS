// components/RainyCard.js
import React from 'react';
import './WeatherCard.css'; 

export default function RainyCard({ day, date, time }) {
  return (
    <div className="card-time-cloud">
      <div className="card-time-cloud-front"></div>
      <div className="card-time-cloud-back">
        <svg viewBox="0 0 200 200">
          <path
            fill="#FFFFFF"
            d="M32.4,-41C45.2,-42.2,61,-38.6,63.9,-29.9..."
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="card-time-cloud-rain-group">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="card-time-cloud-rain" key={i}></div>
        ))}
      </div>

      <p className="card-time-cloud-day">{day}</p>
      <p className="card-time-cloud-day-number">{date}</p>
      <p className="card-time-cloud-hour">{time}</p>
      <div className="card-time-cloud-icon">
        <svg stroke="#d3d3d3" fill="none" viewBox="0 0 24 24" height="30px" width="30px">
          {/* SVG paths... (same as rainy icon) */}
        </svg>
      </div>
    </div>
  );
}
