import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Ourwork from './components/Ourwork';
import Contactus from './components/Contactus';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);



function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  
    useEffect(() => {
      localStorage.setItem('mode', mode);
    }, [mode]);
  
    const toggleMode = () => {
          if (mode === 'light') {
              setMode('dark');
          } else {
              setMode('light');
          }
      }

  return (
    <>
      <div className={`container ${mode}`}>
            <Header mode={mode} toggleMode={toggleMode} />
            <Home mode={mode} toggleMode={toggleMode} />
            <Service mode={mode} toggleMode={toggleMode} />
            <Ourwork mode={mode} toggleMode={toggleMode} />
            <Contactus mode={mode} toggleMode={toggleMode} />
          </div>
    </>
  )
}

export default App
