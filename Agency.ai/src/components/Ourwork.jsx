import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


export default function Ourwork({mode, toggleMode}) {
    const OurworkModeStyle = {
        backgroundColor: mode === 'light' ? 'white' : 'black',
    color: mode === 'light' ? 'black' : 'white',
    }

  useGSAP(() => {
    gsap.from('.Tcard', {z:-400, opacity:0, stagger:0.2, duration:1, ease:'power2.out',
      scrollTrigger: {
        start: '20% top',
        end: 'bottom top',
        scrub: 2,
    }})
  })    
  return (
    <div id='OurWorks' className={`Ourworkcont ${mode}`} style={OurworkModeStyle}>
      <h1 style={OurworkModeStyle}>Our latest work</h1>
      <p style={OurworkModeStyle}>Here are some of our recent projects and accomplishments.</p>
      <div className="Ourworkcard" style={OurworkModeStyle}>
        <div className="owcard">
            <img src="mobileappmarketing.jpg" />
            <h3>Mobile app marketing</h3>
            <p style={OurworkModeStyle}>We turn bold ideas into powerful digital solutions.</p>
        </div>
        <div className="owcard">
            <img src="premiere.png" />
            <h3>Digital Marketing</h3>
            <p style={OurworkModeStyle}>We create compelling digital marketing campaigns to drive growth and engagement.</p>
        </div>
        <div className="owcard">
            <img src="WizardZ.png" />
            <h3>Website Development</h3>
            <p style={OurworkModeStyle}>We created a responsive and user-friendly website for a local business.</p>
        </div>
      </div>
      <div className="teamsection" style={OurworkModeStyle}>
        <h1 style={OurworkModeStyle}>Meet the <span>team</span></h1>
        <p style={OurworkModeStyle}>A passionate team of digital experts dedicated to creating innovative solutions.</p>
        <div className="teamcard" style={OurworkModeStyle}>
            <div className="Tcard">
                <img src="team01.jpg" />
                <div className="Tdetail">
                    <h3>Utkarsh</h3>
                    <p style={OurworkModeStyle}>Lead Developer</p>
                </div>
            </div>
            <div className="Tcard">
                <img src="team02.png" />
                <div className="Tdetail">
                    <h3>Ankur</h3>
                    <p style={OurworkModeStyle}>Marketing Specialist</p>
                </div>
            </div>
            <div className="Tcard">
                <img src="team03.png" />
                <div className="Tdetail">
                    <h3>Aman</h3>
                    <p style={OurworkModeStyle}>Video Editor</p>
                </div>
            </div>
            <div className="Tcard">
                <img src="team04.png" />
                <div className="Tdetail">
                    <h3>Rakesh</h3>
                    <p style={OurworkModeStyle}>Backend Developer</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
