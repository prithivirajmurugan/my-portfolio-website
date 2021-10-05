import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <form name="contact" method ="POST" data-netlify-recaptcha="true" data-netlify="true">
             <input type="text" name="name" placeholder="Your name" className="contact-form-input" />
            <input type="email" name="email" placeholder="Your email address" className="contact-form-input" />
            <textarea rows="5" cols="30" name="description" placeholder="Your message" className="contact-form-input"></textarea>
            <div data-netlify-recaptcha="true"></div>
            <button className="contact-form-send"><i class="fa fa-paper-plane" aria-hidden="true"></i>Send Message</button>
        </form>
                );
}

export default ContactForm;