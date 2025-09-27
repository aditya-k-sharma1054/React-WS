import React, { useEffect, useState } from 'react';
export default function CountUp({end=0, duration=1, label}){
  const [val, setVal] = useState(0);
  useEffect(()=>{
    let start=0; const steps = Math.max(1, Math.floor(duration*20));
    const inc = end/steps;
    let i=0;
    const id = setInterval(()=>{ i++; start+=inc; setVal(Math.floor(start)); if(i>=steps){ setVal(end); clearInterval(id);} }, 50);
    return ()=>clearInterval(id);
  },[end,duration]);
  return <div><div style={{fontSize:24,fontWeight:700}}>{val}</div>{label && <div style={{fontSize:12,opacity:0.9}}>{label}</div>}</div>;
}