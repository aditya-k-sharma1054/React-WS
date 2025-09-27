import React from 'react';
import TextPressure from '../components/reactbits/TextPressure';
import LogoLoop from '../components/reactbits/LogoLoop';
import "../components/reactbits/LogoLoop.css"; 
import CountUp from '../components/reactbits/CountUp';
import GradientBlends from '../components/reactbits/GradientBlends';
import ProfileCard from '../components/reactbits/ProfileCard';
import '../components/reactbits/ProfileCard.css';

const LOGOS = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
];

export default function Home(){
  return (
    <div style={{position:'relative'}}>
      <GradientBlends />
      <div className="glass" style={{maxWidth:1000}}>
        <h1 style={{fontSize:36, margin:0}}><TextPressure text="Aditya Kumar Sharma" /></h1>
        <p style={{marginTop:12}}>Frontend dev. Building attractive and interactive UI with React. I turn ideas into responsive interfaces and love experimenting with animation and UX.</p>
        <div style={{marginTop:18}}><CountUp end={3} duration={1.6} label="Projects Built" /></div>
      </div>

      <div style={{height:16}} />

      <div className="glass" style={{marginTop:12}}><ProfileCard name="Aditya Kumar Sharma" title="Frontend Developer" handle="adityasharma" status="Available" contactText="Contact Me" avatarUrl="photu.png" showUserInfo={true} enableTilt={true} enableMobileTilt={false}  onContactClick={() => window.location.href = "mailto:b230456@skit.ac.in"}/></div>

      <div style={{height:16}} />

      <div className="glass logo-loop" style={{marginTop:12}}><LogoLoop logos={LOGOS} speed={30} /></div>
    </div>
  );
}