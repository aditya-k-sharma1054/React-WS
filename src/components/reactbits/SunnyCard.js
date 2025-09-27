// components/SunnyCard.js
import React from 'react';
import './WeatherCard.css';

export default function SunnyCard({ day, date, time }) {
  return (
    <div className="card-time-cloud">
      <div className="card-time-cloud-front"></div>
      <div className="card-time-cloud-back">
        <svg viewBox="0 0 200 200">
          <path
            fill="#ed782a"
            d="M39.1,-11.5C46.9,11.5,47,38.1,34.9,46.6C22.8,55.1,-1.6,45.4,-16.5,32.3C-31.3,19.2,-36.8,2.8,-32.4,-15.3C-28.1,-33.4,-14.1,-53,0.8,-53.3C15.6,-53.5,31.2,-34.4,39.1,-11.5Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg viewBox="0 0 200 200">
          <path
            fill="#ed782a"
            d="M39.1,-11.5C46.9,11.5,47,38.1,34.9,46.6C22.8,55.1,-1.6,45.4,-16.5,32.3C-31.3,19.2,-36.8,2.8,-32.4,-15.3C-28.1,-33.4,-14.1,-53,0.8,-53.3C15.6,-53.5,31.2,-34.4,39.1,-11.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <p className="card-time-cloud-day">{day}</p>
      <p className="card-time-cloud-day-number">{date}</p>
      <p className="card-time-cloud-hour">{time}</p>
      <div className="card-time-cloud-icon">
        <svg viewBox="0 0 24 24" fill="none">
          {/* SVG paths... (same as your sunny icon) */}
        </svg>
      </div>
    </div>
  );
}
