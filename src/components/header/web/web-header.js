import React from 'react'
import './web-header.css';

function WebHeader() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                    <i class="fas fa-project-diagram option-icon"></i>Projects
                </a>

            </div>
            <div className="web-option">
                <a href="#skills">
                    <i class="fas fa-laptop-code option-icon"></i>Skills
                </a>

            </div>
            <div className="web-option">
                <a href="#work">
                  <i class="fas fa-briefcase option-icon"></i> Work
                </a>

            </div>
            <div className="web-option">
                <a href="#contact">
                    <i class="far fa-user option-icon"></i> Contact
                </a>

            </div>
        </div>
    )
}

export default WebHeader
