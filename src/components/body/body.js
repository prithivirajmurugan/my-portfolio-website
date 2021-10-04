import React from 'react';
import About from './about/about';
import './body.css';
import Contact from './contact/contact';
import Project from './projects/project';
import Skills from './skills/skills';
import Work from './work/work';

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Project />
            </section>
             <section id="skills">
                <Skills />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
    
        </div>
    )
}

export default Body
