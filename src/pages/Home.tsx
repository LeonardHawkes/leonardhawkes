// src/pages/Home.tsx
import React from "react";
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import { Link } from "react-router-dom";
import BlogPostImage from "../components/BlogPostImage";

const Home = () => {
    const projects = [
        {
            title: 'PilotHelper',
            subtitle: 'Secure course application for pilots',
            imageKey: 'pilotHelper',
            link: 'https://www.pilothelper.com',
            description: 'PilotHelper is a secure course application designed to train pilots with the necessary skills needed to offer meaningful support to their peers.',
            codeLink: '',
            techStack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Express']
        },
        {
            title: 'Snake',
            subtitle: 'Interactive Snake Game',
            imageKey: 'snakeGame',
            link: '',
            description: 'A classic Snake game built with React and TypeScript. Control the snake to eat food and grow longer without hitting the walls or yourself. Features responsive design, touch controls for mobile, and increasing difficulty.',
            codeLink: 'https://github.com/LeonardHawkes/Snake',
            demoPath: '/snake', // Link to playable demo
            techStack: ['React', 'TypeScript', 'CSS Grid', 'Game Logic']
        },
        {
            title: 'Vtraxx',
            subtitle: 'Spotify Top Track Generator',
            imageKey: 'vtraxx',
            link: '',
            description: 'An application that uses Spotify\'s API to gather a user\'s most recent top tracks and displays them on a cassette tape visual. Originally showed 10 tracks, now displays 5 with larger font for improved readability.',
            codeLink: 'https://github.com/LeonardHawkes/vtraxx',
            techStack: ['JavaScript', 'Node.js', 'Spotify API', 'Express', 'HTML/CSS']
        },
        {
            title: 'Covid-19 Tracker',
            subtitle: 'Coronavirus Worldwide Cases Dashboard',
            imageKey: 'covidTracker',
            link: '',
            description: 'A Java Spring application that collects and displays global COVID-19 case data in a readable, interactive table format. Demonstrates implementation of Spring Framework and Java 12 web application deployment.',
            codeLink: 'https://github.com/LeonardHawkes/coronavirus-tracker',
            techStack: ['Java', 'Spring Boot', 'Thymeleaf', 'Bootstrap', 'REST API']
        },
        {
            title: 'Flappy Bird',
            subtitle: 'Java-based Flappy Bird Clone',
            imageKey: 'flappyBird',
            link: '',
            description: 'A recreation of the popular Flappy Bird game built with Java. Features click or spacebar controls and procedurally generated obstacles for infinite gameplay.',
            codeLink: 'https://github.com/LeonardHawkes/FlappyBirdJava',
            techStack: ['Java', 'Javax Swing', 'AWT', 'Event Listeners']
        },
        {
            title: 'Java Quiz',
            subtitle: '10 Question Java Quiz Application',
            imageKey: 'javaQuiz',
            link: '',
            description: 'An interactive quiz application built with Java Swing that tests knowledge of Java programming. Uses arrays for efficient memory usage instead of a database.',
            codeLink: 'https://github.com/LeonardHawkes/JavaTest',
            techStack: ['Java', 'Javax Swing', 'AWT', 'Event Listeners']
        }
    ];
      
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Leonard Hawkes</h1>
                    <h2>Software Developer</h2>
                    <p>
                        I'm a passionate developer with a focus on creating robust, user-friendly applications.
                        My expertise spans frontend, backend, and mobile development technologies.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="button">View My Work</a>
                        <a href="#contact" className="button secondary">Contact Me</a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section section-container">
                <div className="section-header">
                    <h2>About Me</h2>
                    <div className="section-divider"></div>
                </div>
                <div className="about-content">
                    <p>
                        I'm a passionate developer, but more importantly, I'm passionate about technology.
                        I enjoy building applications that solve real-world problems and provide value to users.
                        With experience in various programming languages and frameworks, I approach each project
                        with a focus on clean code, performance, and user experience.
                    </p>
                    <p>
                        When I'm not coding, you might find me exploring new technologies, contributing to open source,
                        or sharing knowledge with the developer community.
                    </p>
                </div>
            </section>
            {/* Latest Blog Post Feature */}
            <section className="latest-blog">
                <h2>Latest from My Blog</h2>
                <article className="featured-blog-post">
                    <div className="blog-image">
                        <BlogPostImage />
                    </div>
                    <div className="blog-content">
                        <h3>How NLP & LLMs Are Reshaping Finance</h3>
                        <p>
                            An exploration of how Natural Language Processing and Large Language Models 
                            are revolutionizing the financial industry through improved analysis, 
                            automation, and customer service.
                        </p>
                        <div className="blog-actions">
                            <a 
                                href="https://medium.com/@leonardhawkesjr/how-nlp-llms-are-reshaping-finance-c82afeda5990" 
                                className="button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read on Medium
                            </a>
                            <Link to="/blog" className="button alt">View All Posts</Link>
                        </div>
                    </div>
                </article>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section section-container">
                <div className="section-header">
                    <h2>My Projects</h2>
                    <div className="section-divider"></div>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section section-container">
                <div className="section-header">
                    <h2>My Skills</h2>
                    <div className="section-divider"></div>
                </div>
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>Frontend</h3>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <i className="fab fa-react"></i>
                                <span>React</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-js-square"></i>
                                <span>JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-html5"></i>
                                <span>HTML5</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-css3-alt"></i>
                                <span>CSS3</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-sass"></i>
                                <span>Sass</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Backend</h3>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <i className="fab fa-node-js"></i>
                                <span>Node.js</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-java"></i>
                                <span>Java</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-leaf"></i>
                                <span>Spring</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Tools & Others</h3>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <i className="fab fa-git-alt"></i>
                                <span>Git</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-cloud"></i>
                                <span>Heroku</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-server"></i>
                                <span>RESTful APIs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;