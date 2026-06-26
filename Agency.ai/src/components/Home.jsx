import React, { useState, useEffect } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


export default function Home({ mode, toggleMode }) {
  const homeModeStyle = {
    backgroundColor: mode === 'light' ? 'white' : 'black',
    color: mode === 'light' ? 'black' : 'white',
  };
  const [isDayImage, setIsDayImage] = React.useState(true);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.Homecont h1', { opacity: 0, x: -100, duration: 1.5, ease: 'power2.out' })
    tl.from('.Homecont h1 span', { opacity: 0, scale:0, z: 100, duration: 1, ease: 'power2.out' },)
    tl.from('.Homecont p', { opacity: 0, duration: 1, ease: 'power2.out' })
    tl.from('.imgsection img', { opacity: 0, z: -100, duration: 4, ease: 'power2.out' })
    gsap.from('.companieslogo', { opacity: 0, x: 1000, duration: 3, ease: 'power2.out', scrollTrigger: {
        trigger: '.Homecont',
        start: '5% top',
        end: 'bottom top',
        scrub: 2,
    } })
   
  }, [])

  return (
    <div id='Home' className={`Homecont ${mode}`} style={{ ...homeModeStyle, overflowX: 'hidden' }}>
      <h1>Turning imagination into <span>Digital</span> impact</h1>
      <p>Welcome to our digital platform where creativity meets technology!</p>
      <div className="imgsection" style={homeModeStyle}>
        <img src={mode === 'light' ? "Homedaytime.jpg" : "Homenighttime.jpg"} data-speed="0.8" />
      </div>
      <h3 style={homeModeStyle}>Trusted by Leading Companies</h3>
      <div className="companieslogo" style={homeModeStyle}>
        <img src="microsoft.png" />
        <img src="zoom.png" />
        <img src="rakuten.png" />
        <img src="coinbase.png" />
        <img src="airbnb.png" />
        <img src="google.png" />
      </div>
    </div>
  )
}
