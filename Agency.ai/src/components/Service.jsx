import React, { useState, useEffect } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


export default function Service({ mode, toggleMode }) {
  const ServiceModeStyle = {
    backgroundColor: mode === 'light' ? 'white' : 'black',
    color: mode === 'light' ? 'black' : 'white',
  };
  useGSAP(() => {
    gsap.from('.card', {z:-400, opacity:0, stagger:0.2, duration:1, ease:'power2.out',
      scrollTrigger: {
        start: '10% top',
        end: '55% top',
        scrub: 2,
    }})
  })
  return (
    <div id="services" className={`Servicecont ${mode}`} style={ServiceModeStyle}>
      <h1 style={ServiceModeStyle}>How can we help?</h1>
      <p style={ServiceModeStyle}>From startegy to execution, we craft digital solution that move your business forward.</p>
      <div className="Servicecard" style={ServiceModeStyle}>
        <div className="card">
          <img src="advertisinglogo.png" />
          <div className="detailing">
            <h3>Advertising</h3>
            <p style={ServiceModeStyle}>We turn bold ideas into intresting and appealing ads.</p>
          </div>
        </div>
        <div className="card">
          <img src="advertisinglogo.png" />
          <div className="detailing">
            <h3>Website Development</h3>
            <p style={ServiceModeStyle}>We turn bold ideas into powerful digital solutions, that connect, engage, and inspire.</p>
          </div>
        </div>
        <div className="card">
          <img src="advertisinglogo.png" />
          <div className="detailing">
            <h3>Web Apps</h3>
            <p style={ServiceModeStyle}>We create dynamic and user-friendly web applications tailored to your needs.</p>
          </div>
        </div>
        <div className="card">
          <img src="advertisinglogo.png" />
          <div className="detailing">
            <h3>Digital Marketing</h3>
            <p style={ServiceModeStyle}>We turn bold ideas into intresting and appealing short videos to attract audience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
