import React from 'react';
import SocialContact from '../../common/social-contact/socialContact';
import './about.css';

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className="about-info">
                    Hi there , Im
                    <br />
                    <span className="info-name">Random guy , </span>
                    <br />I love web-developing
                </div>
                <div className="about-photo">
<img src={ require('../../../assets/Software engineer-amico.png').default } className="img-style" />
                 </div>
            </div>
             <div className='about-bottom'>
This is my contacts
            </div>
            <SocialContact/>
        </div>
    )
}

export default About
