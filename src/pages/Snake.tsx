import React from 'react';
import SnakeGame from '../components/SnakeGame';
import './Snake.css';

const Snake = () => {
  return (
    <div className="snake-page">
      <div className="snake-page-content">
        <header className="snake-page-header">
          <h1>Snake Game</h1>
          <p>A classic Snake game built with React and TypeScript</p>
        </header>

        <div className="game-wrapper">
          <SnakeGame />
        </div>

        <div className="project-description">
          <h2>About This Project</h2>
          <p>
            This interactive Snake game was built by Leonard Hawkes as a demonstration of
            front-end engineering, real-time state management, and game logic using React
            and TypeScript.
          </p>
          
          <ul>
            <li>Responsive design that works on both desktop and mobile</li>
            <li>Keyboard controls (arrow keys) and touch controls for mobile</li>
            <li>Increasing difficulty as your score grows</li>
            <li>Clean, modern UI with a space theme</li>
          </ul>

          <h3>Technical Implementation</h3>
          <p>
            This project uses React Hooks for state management and game logic. Key technical features include:
          </p>
          
          <ul>
            <li>RequestAnimationFrame for smooth gameplay</li>
            <li>Custom collision detection algorithm</li>
            <li>React useEffect and useCallback for optimized rendering</li>
            <li>TypeScript for type safety and better developer experience</li>
            <li>CSS Grid for the game board layout</li>
          </ul>

          <div className="code-links">
            <a 
              href="https://github.com/LeonardHawkes/Snake" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button"
            >
              <i className="fab fa-github"></i> View Original Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snake;