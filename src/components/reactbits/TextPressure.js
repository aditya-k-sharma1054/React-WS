import React, { useEffect, useRef } from 'react';
export default function TextPressure({text}){
  const ref = useRef();
  useEffect(()=>{
    if(!ref.current) return;
    ref.current.animate([{transform:'translateY(6px)'},{transform:'translateY(0)'}],{duration:800,iterations:1});
  },[]);
  return <span ref={ref} style={{display:'inline-block'}}>{text}</span>;
}