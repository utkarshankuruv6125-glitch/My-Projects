import React, { useState, useEffect } from 'react'

export default function Header({ mode, toggleMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isOurWorksHovered, setIsOurWorksHovered] = useState(false);
    const [isContactUsHovered, setIsContactUsHovered] = useState(false);


    useEffect(() => {
        const handleGlobalClick = () => {
            if (isMenuOpen && window.innerWidth <= 768) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen){
            window.addEventListener('click', handleGlobalClick);
        }
        return () => 
            window.removeEventListener('click', handleGlobalClick);
    },[isMenuOpen]);

    const modeStyle = {
        backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.489) ' : 'rgba(0, 0, 0, 0.495)',
        color: mode === 'light' ? 'black' : 'white',
    };

    const handleNavClick = (event, sectionId) => {
        event.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
        <div className={`headercont ${mode}`} style={modeStyle}>
            <div className="logo">
                <h2><img src="Agencylogo.png" /> Agency.<span>ai</span></h2>
            </div>
            <div className="links">
                <span>
                    <a 
                        href='#Home' 
                        onClick={(event) => handleNavClick(event, 'Home')}
                        onMouseEnter={() => setIsHomeHovered(true)} 
                        onMouseLeave={() => setIsHomeHovered(false)}
                        style={{ color: isHomeHovered ? 'blue' : (mode === 'light' ? 'black' : 'white') }}
                    >
                        Home
                    </a>
                </span>
                <span><a href="#services" onClick={(event) => handleNavClick(event, 'services')} onMouseEnter={() => setIsServicesHovered(true)} 
                        onMouseLeave={() => setIsServicesHovered(false)}
                        style={{ color: isServicesHovered ? 'blue' : (mode === 'light' ? 'black' : 'white') }}>Services</a></span>
                <span><a href='#OurWorks' onClick={(event) => handleNavClick(event, 'OurWorks')} onMouseEnter={() => setIsOurWorksHovered(true)} 
                        onMouseLeave={() => setIsOurWorksHovered(false)}
                        style={{ color: isOurWorksHovered ? 'blue' : (mode === 'light' ? 'black' : 'white') }}>Our Works</a></span>
                <span><a href='#Contactus' onClick={(event) => handleNavClick(event, 'Contactus')} onMouseEnter={() => setIsContactUsHovered(true)} 
                        onMouseLeave={() => setIsContactUsHovered(false)}
                        style={{ color: isContactUsHovered ? 'blue' : (mode === 'light' ? 'black' : 'white') }}>Contact Us</a></span>
            </div>
            <div className="extrabtns">
                <button className='modebtn' onClick={toggleMode} style={{ color: mode === 'light' ? 'black' : 'white', transform: mode === 'light' ? 'rotate(0deg)' : 'rotate(60deg)' }}><i className="ri-moon-fill"></i></button>
                <a className='connectbtn' href="#Contactus" onClick={(event) => handleNavClick(event, 'Contactus')}>Connect <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className="menubtn" onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
            }}>
                <i className="ri-menu-fill"></i>
            </div>
            <div className="popupwin" style={{ color: modeStyle.color, display: isMenuOpen ? 'flex' : 'none' }}>
                <span>
                    <a 
                        href="#Home"
                        onClick={(event) => handleNavClick(event, 'Home')}
                        onMouseEnter={() => setIsHomeHovered(true)}
                        onMouseLeave={() => setIsHomeHovered(false)}
                        style={{ color: isHomeHovered ? 'blue' : 'inherit' }}
                    >
                        Home
                    </a>
                </span>
                <span><a href="#services" onClick={(event) => handleNavClick(event, 'services')} onMouseEnter={() => setIsServicesHovered(true)} 
                        onMouseLeave={() => setIsServicesHovered(false)}
                        style={{ color: isServicesHovered ? 'blue' : 'inherit' }}>Services</a></span>
                <span><a href="#OurWorks" onClick={(event) => handleNavClick(event, 'OurWorks')} onMouseEnter={() => setIsOurWorksHovered(true)} 
                        onMouseLeave={() => setIsOurWorksHovered(false)}
                        style={{ color: isOurWorksHovered ? 'blue' : 'inherit' }}>Our Works</a></span>
                <span><a href="#Contactus" onClick={(event) => handleNavClick(event, 'Contactus')} onMouseEnter={() => setIsContactUsHovered(true)} 
                        onMouseLeave={() => setIsContactUsHovered(false)}
                        style={{ color: isContactUsHovered ? 'blue' : 'inherit' }}>Contact Us</a></span>
                <div className="extrabtns2">
                    <button className='modebtn2' onClick={toggleMode} style={{ color: mode === 'light' ? 'black' : 'white', transform: mode === 'light' ? 'rotate(0deg)' : 'rotate(60deg)' }}><i className="ri-moon-fill"></i></button>
                    <a className='connectbtn2' href="#Contactus" onClick={(event) => handleNavClick(event, 'Contactus')}>Connect <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>
        </div>
        </>
    )
}
