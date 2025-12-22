// src/pages/Home.tsx
import React from "react";
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import { Link } from "react-router-dom";
import BlogPostImage from "../components/BlogPostImage";

const Home = () => {
    const projects = [
        {
            title: 'VibeLink', //#1 App!
            subtitle: '🎵 Share the Vibe, Any Platform 🎵',
            imageKey: 'vibeLink',
            link: 'https://www.getvibelink.com',
            iosDownloadLink: 'https://apps.apple.com/us/app/vibelink-app/id6748924820',
            description: 'VibeLink is a mobile app that converts a music url into a shareable link, allowing users to share their favorite tracks across any platform.',
            codeLink: '',
            techStack: ['React Native', 'Node.js', 'Railway', 'Spotify API', 'YouTube API', 'Apple Music API (JWT)', 'Gradle', 'Kotlin', 'Xcode', 'Swift']
        },
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
    ];
      
    return (
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Leonard Hawkes</h1>
            <h2>Software Engineer • Founder • Speaker</h2>
            <p>
              Full-stack Software Engineer III at JPMorgan Chase. Founder of
              VibeLink (iOS/Android). Public speaker on AI in fintech. Inventor on a U.S.
              patent application.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="button">
                View My Work
              </a>
              <Link to="/blog" className="button secondary">
                Writing & Speaking
              </Link>
              <Link to="/dj-events" className="button secondary">
                DJ Doc Aux
              </Link>
            </div>
          </div>
        </section>

        <section className="identity-strip">
          <p>
            Roles: Software Engineer · Founder of VibeLink · AI & Fintech
            Speaker · DJ (DJ Doc Aux)
          </p>
        </section>

        {/* About Section */}
        <section className="about-section section-container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <p>
              Leonard Hawkes is a full-stack software engineer with
              approximately five years of professional experience building,
              shipping, and scaling production systems. He works as a Software
              Engineer III at JPMorgan Chase, contributing to high-throughput
              real-time payments platforms and leading frontend and full-stack
              development for critical financial systems.
            </p>
            <p>
              Outside of work, he builds consumer products end-to-end, including
              VibeLink—an iOS/Android app that converts and shares music links
              across Spotify, Apple Music, and YouTube. He speaks on artificial
              intelligence and fintech, and is listed as an inventor on a U.S.
              patent application related to processing streams of balance
              transfer data.
            </p>
          </div>
        </section>

        <section className="patent-section section-container">
          <div className="section-header">
            <h2>Patent</h2>
            <div className="section-divider"></div>
          </div>
          <p>
            Leonard Hawkes is a listed inventor on a U.S. patent application
            titled “Systems and Methods for Processing Streams of Balance
            Transfer Data Records,” published April 25, 2024.
          </p>
        </section>

        {/* Latest Blog Post Feature */}
        <section className="latest-blog">
          <h2 className="latest-blog-title">Latest from My Blog</h2>
          <article className="featured-blog-post">
            <div className="blog-image">
              <BlogPostImage />
            </div>
            <div className="blog-content">
              <h3>How NLP & LLMs Are Reshaping Finance</h3>
              <p>
                An exploration of how Natural Language Processing and Large
                Language Models are revolutionizing the financial industry
                through improved analysis, automation, and customer service.
              </p>
              <div className="blog-actions">
                <Link
                  to="/blog/nlp-llms-reshaping-finance"
                  className="button"
                >
                  Read Article
                </Link>
                <Link to="/blog" className="button alt">
                  View All Posts
                </Link>
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