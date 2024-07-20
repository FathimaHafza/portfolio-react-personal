import React, { useRef } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_6pzxx1p', 'template_3ua36u8', form.current, {
                publicKey: 'IMOTfwsxDi5gqdZSa', // Make sure this is your EmailJS public key
            })
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                }
            );
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        I am an undergraduate student eager to collaborate on front-end projects.
                        Let's create something amazing together!
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>hafsha4work@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>0762117479</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>C/10, F.H Mawatha, Balangoda</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={sendEmail} className="contact-right" ref={form}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" name="from_name" />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter your email" name="from_email" />
                    <label htmlFor="message">Enter your message here</label>
                    <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button className="contact-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
