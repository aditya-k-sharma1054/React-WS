import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import WeatherApp from './pages/WeatherApp';
import TodoApp from './pages/TodoApp';
import TimerApp from './pages/TimerApp';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import './index.css';

function LeftNav() {
  return (
    <aside className="left-nav">
      <div className="logo">Aditya Kumar Sharma</div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/weather">Weather</NavLink>
        <NavLink to="/todo">To-Do</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div style={{ marginTop: 'auto', fontSize: 12, opacity: 0.8 }}>
        Built in React Workshop>>22-27 Sept'25
      </div>
    </aside>
  );
}

export default function App() {
  const footerRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && footerRef.current) {
      vantaEffect.current = BIRDS({
        el: footerRef.current,
        THREE: THREE, 
        backgroundAlpha: 0,
        color1: 0x06b6d4,
        color2: 0xff6ec7,
        birdSize: 1.2,
        separation: 50.0,
        alignment: 50.0,
        cohesion: 50.0,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <Router>
      <div>
        <LeftNav />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/timer" element={<TimerApp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <div ref={footerRef} style={{ marginTop: 40 }}>
            <div className="glass" style={{ padding: 16, borderRadius: 12 }}>
              <div className="footer">
                Made with ❤️ by Aditya Kumar Sharma •{' '}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>{' '}
                •{' '}
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}
