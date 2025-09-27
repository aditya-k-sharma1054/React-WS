import React from 'react';
export default function FuzzyText({text}){
  return <div style={{filter:'blur(1px)', fontSize:48, fontWeight:700}}>{text}</div>;
}