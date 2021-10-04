import React from 'react'
import Separator from '../../common/seperator/separator';
import { WorkData } from '../../data/work';
import WorkCard from './work-card/WorkCard';
import './work.css';

function Work() {
    const data = WorkData;
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((work) => {
                    return <WorkCard work={work} />
                })}
            </div>
        </div>
    )
}

export default Work;
