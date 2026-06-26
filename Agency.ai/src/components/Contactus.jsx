import React, { useState, useEffect } from 'react'

export default function Contactus({ mode, toggleMode }) {
    const ContactusModeStyle = {
        backgroundColor: mode === 'light' ? 'white' : 'black',
        color: mode === 'light' ? 'black' : 'white',
    }

    const [subscriberEmail, setSubscriberEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const FORM_ENDPOINT = 'https://formspree.io/f/mdareqzp';

    const handleSubscribe = () => {
        if (subscriberEmail.trim() === "") {
            alert('please enter your email');
        } else {
            alert('subscribed');
            setSubscriberEmail('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userEmail.trim() === "" || userName.trim() === "") {
            alert('please enter your name and email');
            return;
        }
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('name', userName);
            formData.append('email', userEmail);
            formData.append('message', userMessage);

            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Submitted Successfully');
                setUserName('');
                setUserEmail('');
                setUserMessage('');
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        } catch (error) {
            alert('Failed to connect to the server. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div id='Contactus' className={`Contactuscont ${mode}`} style={ContactusModeStyle}>
            <div className="topportion" style={ContactusModeStyle}>
                <h1 style={ContactusModeStyle}>Reach out to us</h1>
                <p style={ContactusModeStyle}>From strategy to execution, we're here to help you succeed.</p>
                <form className="contactform" style={ContactusModeStyle} onSubmit={handleSubmit}>
                    <div className="part1">
                        <div className="namebox">
                            <h3>Your Name</h3>
                            <div className="nameinput" >
                                <i className="ri-user-line" style={{ pointerEvents: 'none' }}></i>
                                <input type="text" name="name" placeholder='Enter your name' style={ContactusModeStyle} value={userName} onChange={(e) => setUserName(e.target.value)} required />
                            </div>
                        </div>
                        <div className="emailbox">
                            <h3>Your Email</h3>
                            <div className="mailinput">
                                <i className="ri-mail-line" style={{ pointerEvents: 'none' }}></i>
                                <input type="email" name="email" placeholder='Enter your email' style={ContactusModeStyle} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className="part2">
                        <h3>Your Message</h3>
                        <textarea name="message" placeholder='Enter your message' style={ContactusModeStyle} value={userMessage} onChange={(e) => setUserMessage(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className='submitbtn' disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Submit'} <i className="ri-arrow-right-line"></i>
                    </button>
                </form>
            </div>
            <div className="footer" style={{
                backgroundColor: mode === 'light' ? 'rgba(68, 68, 68, 0.493)' : 'rgba(68, 68, 68, 0.493)',
                color: mode === 'light' ? 'black' : 'white'
            }}>
                <div className="upperpart" style={{
                    color: mode === 'light' ? 'black' : 'white'
                }}>
                    <div className="leftpart">
                        <div className="footerlogo"><h2><img src="Agencylogo.png" /> Agency.<span>ai</span></h2></div>
                        <p>Welcome to our digital platform where creativity meets technology!</p>
                    </div>
                    <div className="rightpart">
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Stay updated with our latest news and offers.</p>
                        <div className="subscribewin">
                            <input
                                type="email"
                                placeholder='Enter your email'
                                value={subscriberEmail}
                                onChange={(e) => setSubscriberEmail(e.target.value)}
                            />
                            <button className='subscribebtn' onClick={handleSubscribe}>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="lowerpart" style={{
                    color: mode === 'light' ? 'black' : 'white'
                }}>
                    <p>© 2024 Agency.ai. All rights reserved.</p>
                    <div className="socialmedia">
                        <i className="ri-facebook-circle-fill"></i>
                        <i className="ri-twitter-x-line"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-linkedin-box-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}