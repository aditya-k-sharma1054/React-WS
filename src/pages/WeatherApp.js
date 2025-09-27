import React, { useState } from 'react';
import SunnyCard from '../components/reactbits/SunnyCard';
import RainyCard from '../components/reactbits/RainyCard';
import '../components/reactbits/WeatherCard.css';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '7e8cdddd8c9776e04e4b4e485ea7940e';

  async function fetchWeather() {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      const json = await res.json();
      if (!res.ok) {
        setData({ error: json.message || 'API error' });
        return;
      }
      setData(json);
    } catch (e) {
      setData({ error: e.message });
    }
  }

  function getWeatherType(description) {
    const desc = description.toLowerCase();
    if (desc.includes('rain') || desc.includes('storm') || desc.includes('drizzle')) return 'rainy';
    if (desc.includes('clear') || desc.includes('sun')) return 'sunny';
    return 'default';
  }

  function formatDateTime() {
    const now = new Date();
    return {
      day: now.toLocaleDateString(undefined, { weekday: 'long' }),
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  }

  const { day, date, time } = formatDateTime();
  const weatherType = data?.weather ? getWeatherType(data.weather[0].description) : null;

  return (
    <div>
      <div className="glass" style={{ maxWidth: 720 }}>
        <h2>Weather</h2>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="City name"
            style={{ padding: 8, flex: 1 }}
          />
          <button onClick={fetchWeather} className="btn">
            Search
          </button>
        </div>

        <div style={{ marginTop: 20 }}>
          {data?.error && <div style={{ color: '#f97316' }}>Error: {data.error}</div>}

          {weatherType === 'sunny' && <SunnyCard day={day} date={date} time={time} />}
          {weatherType === 'rainy' && <RainyCard day={day} date={date} time={time} />}
          {weatherType === 'default' && data?.main && (
            <div>
              <div style={{ fontWeight: 700 }}>{data.name}, {data.sys?.country}</div>
              <div>{data.main.temp} °C</div>
              <div>{data.weather?.[0]?.description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
