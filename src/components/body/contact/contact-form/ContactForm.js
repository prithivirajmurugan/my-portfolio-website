import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <form name="contact" method ="POST" data-netlify-recaptcha="true" netlify>
             <input type="text" name="name" placeholder="Your name" className="contact-form-input" required />
            <input type="email" name="email" placeholder="Your email address" className="contact-form-input" required />
            <textarea rows="5" cols="30" name="description" placeholder="Your message" className="contact-form-input" required></textarea>
            <div data-netlify-recaptcha="true"></div>
            <button className="contact-form-send" type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>Send Message</button>
        </form>
                );
}

export default ContactForm;