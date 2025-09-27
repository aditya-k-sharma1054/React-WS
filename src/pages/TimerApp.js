import React, { useState, useEffect, useRef } from 'react';
import CountUp from '../components/reactbits/CountUp';

function CircularProgress({ progress }) {
  const size = 220;
  const r = 90;
  const c = 2 * Math.PI * r;
  const offset = c - (progress / 100) * c;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="g1" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#ff6ec7" />
          <stop offset="100%" stopColor="#ffd60a" />
        </linearGradient>
      </defs>
      <g transform={`translate(${size / 2},${size / 2})`}>
        <circle r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
        <circle
          r={r}
          fill="none"
          stroke="url(#g1)"
          strokeWidth="12"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90)`}
        />
      </g>
    </svg>
  );
}

export default function TimerApp() {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setMs(m => m + 100), 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [running]);

  function reset() {
    setRunning(false);
    setMs(0);
    setLaps([]);
  }

  function lap() {
    setLaps(prev => [ms, ...prev]);
  }

  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const tenths = String(Math.floor((ms % 1000) / 100));
  const progress = ((ms % 60000) / 60000) * 100;

  return (
    <div>
      <div className="glass" style={{ textAlign: 'center', maxWidth: 620 }}>
        <h2>Stopwatch</h2>

        {/* Circular Progress Timer */}
        <div style={{ position: 'relative', display: 'inline-block', marginTop: 12 }}>
          <CircularProgress progress={Math.min(100, progress)} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ fontFamily: 'DS-Digital, monospace', fontSize: 36 }}>
              {minutes}:{seconds}.{tenths}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ marginTop: 14, display: 'flex', gap: 8, justifyContent: 'center' }}>
          {!running ? (
            <button onClick={() => setRunning(true)} className="btn">
              ▶ Start
            </button>
          ) : (
            <button onClick={() => setRunning(false)} className="btn">
              ⏸ Pause
            </button>
          )}

          {ms > 0 && (
            <button onClick={reset} className="btn">
              ⏹ Reset
            </button>
          )}

          <button onClick={lap} className="btn" disabled={!running}>
            ⏱ Lap
          </button>
        </div>

        {/* Animated Seconds Counter */}
        <div style={{ marginTop: 12 }}>
          <CountUp end={Math.floor(ms / 1000)} duration={0.6} label="Seconds" />
        </div>

        {/* Laps */}
        <div
          style={{
            marginTop: 16,
            textAlign: 'left',
            maxWidth: 400,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {laps.length > 0 && <div style={{ fontWeight: 700, marginBottom: 6 }}>Laps</div>}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {laps.map((l, i) => {
              const lapMinutes = String(Math.floor(l / 60000)).padStart(2, '0');
              const lapSeconds = String(Math.floor((l % 60000) / 1000)).padStart(2, '0');
              const lapTenths = String(Math.floor((l % 1000) / 100));
              return (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '4px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <span>Lap {laps.length - i}</span>
                  <span>
                    {lapMinutes}:{lapSeconds}.{lapTenths}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
