
import React from 'react';
import './WorkCard.css';

function WorkCard({ work }) {
    return (
        <div className="work-card">
           <img src={work.companyLogo} className="work-logo" />
            <div className="work-info">
                <label className="company-name">{work.company}</label>
                <div className="work-date">
                    <label>{work.dateJoining}</label> - <label>{work.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{work.work}</p>
                </div>
            </div>
            
        </div>
    )
}

export default WorkCard
