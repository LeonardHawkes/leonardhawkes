import './ProjectCard.css';

interface ProjectProps {
    project: {
        title: string;
        subtitle: string;
        imageUrl: string;
        link: string;
        description: string;
        codeLink: string;
    };
}

const ProjectCard = ({project}: ProjectProps) => {
    const {title, subtitle, imageUrl, link, description, codeLink} = project;

    return (
        <article className='project-card'>
            <header>
                <h2>
                    <a href={link || '#'}>
                        {title}
                        <br />
                        <br />
                        {subtitle}
                    </a>
                </h2>
            </header>

            {link ? (
                <a href={link} className='image fit'>
                    <img src={imageUrl} alt={title} />
                </a>
            ) : (
                <div className='image fit'>
                    <img src={imageUrl} alt={title} />
                </div>
            )}

            <p>{description}</p>

            {codeLink && (
                <ul className='actions special'>
                    <li>
                        <a href={codeLink} className='button'>
                            View Code
                        </a>
                    </li>
                </ul>
            )}
        </article>
    );
};

export default ProjectCard;