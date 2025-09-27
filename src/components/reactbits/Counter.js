import React, { useEffect, useState } from 'react';
export default function Counter({end=0,duration=0.8}){
  const [val, setVal] = useState(0);
  useEffect(()=>{
    let start=0; const steps = Math.max(1, Math.floor(duration*20)); const inc = end/steps; let i=0;
    const id = setInterval(()=>{ i++; start+=inc; setVal(Math.floor(start)); if(i>=steps){ setVal(end); clearInterval(id);} }, 50);
    return ()=>clearInterval(id);
  },[end,duration]);
  return <div style={{fontSize:20,fontWeight:700}}>{val}</div>;
}