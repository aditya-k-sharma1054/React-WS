import React from 'react';
import FuzzyText from '../components/reactbits/FuzzyText';

export default function NotFound(){
  return (
    <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <FuzzyText text="404 Not Found" />
    </div>
  );
}