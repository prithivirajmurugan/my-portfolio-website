import React from 'react';
import Separator from '../../common/seperator/separator';
import { ProjectData } from '../../data/projects';
import './project.css';
import ProjectCard from './projectCard/projectCard';

function Project() {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator/>
            <label className="section-title">Projects</label>
            <div>
                {
                    data.map((project) => {
                        return <ProjectCard project={project} />;

                    })
                }
            </div>
        </div>
    )
}

export default Project
