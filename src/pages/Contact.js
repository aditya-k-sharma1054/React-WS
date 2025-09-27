import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

export default function Contact(){
  const ref = useRef(null);
  useEffect(()=>{
    let vanta;
    if (ref.current && typeof window !== 'undefined') {
      vanta = BIRDS({ el: ref.current, THREE, backgroundAlpha: 5, color1: 0xff6ec7, color2: 0x06b6d4 });
    }
    return ()=> { if (vanta && vanta.destroy) vanta.destroy(); };
  }, []);
  return (
    <div ref={ref} style={{minHeight:'60vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className="glass" style={{maxWidth:720, textAlign:'center'}}>
        <h2>Contact</h2>
        <p>Email: b230456@skit.ac.in</p>
        <div style={{marginTop:8}}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a> • <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> • <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}