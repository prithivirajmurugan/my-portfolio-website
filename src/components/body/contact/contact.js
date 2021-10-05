import React from 'react'
import Separator from '../../common/seperator/separator';
import SocialContact from '../../common/social-contact/socialContact';
import ContactForm from './contact-form/ContactForm';
import './contact.css';

function Contact() {
    return (
        <div className='contact'>
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch contact me on any of the platform</p>
                    <ContactForm />
                    <SocialContact/>
                </div>
                <div className="download">
                    <a download href={require('../../../assets/bosch-logo.png').default}>
                        <i class="fas fa-file-download download-icon"></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
