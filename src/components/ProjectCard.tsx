import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

import { getImageKey } from '../utils/imageImports';

interface ProjectProps {
    project: {
        title: string;
        subtitle: string;
        imageKey: string;
        link: string;
        description: string;
        codeLink: string;
        demoPath?: string; // Add optional path to demo page
        techStack?: string[];
    };
}

const ProjectCard = ({project}: ProjectProps) => {
    const {title, subtitle, imageKey, link, description, codeLink, demoPath, techStack = []} = project;


    const imageUrl = getImageKey(imageKey);

    return (
        <article className='project-card'>
            <header className='project-card-header'>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </header>

            <div className='image-container'>
                <img src={imageUrl} alt={title} />
            </div>

            <div className='project-card-content'>
                {techStack.length > 0 && (
                    <div className='tech-tags'>
                        {techStack.map((tech, index) => (
                            <span key={index} className='tech-tag'>{tech}</span>
                        ))}
                    </div>
                )}

                <p className='project-card-description'>{description}</p>

                <div className='project-card-footer'>
                    <div className='project-links'>
                        {/* External link if available */}
                        {link && (
                            <a href={link} target='_blank' rel='noopener noreferrer' className='button'>
                                <i className='fas fa-external-link-alt'></i> View Live
                            </a>
                        )}

                        {/* Interactive demo link if available */}
                        {demoPath && (
                            <Link to={demoPath} className='button primary'>
                                <i className='fas fa-gamepad'></i> Play Demo
                            </Link>
                        )}

                        {/* Code repo link if available */}
                        {codeLink && (
                            <a href={codeLink} target='_blank' rel='noopener noreferrer' className='button secondary'>
                                <i className='fas fa-code'></i> View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;