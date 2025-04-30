import React, { useState, useEffect, useRef, useCallback } from 'react';
import './SnakeGame.css';

// Direction constants
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

// Game status
enum GameStatus {
  NOT_STARTED = 'NOT_STARTED',
  RUNNING = 'RUNNING',
  PAUSED = 'PAUSED',
  GAME_OVER = 'GAME_OVER'
}

// Initial snake position
const INITIAL_SNAKE = [
  { x: 8, y: 8 },
  { x: 8, y: 7 },
  { x: 8, y: 6 }
];

// Grid size
const GRID_SIZE = 16;

const SnakeGame: React.FC = () => {
  // Game states
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>(Direction.DOWN);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.NOT_STARTED);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(150); // Milliseconds between moves
  
  // Refs to prevent stale closures in event handlers and intervals
  const directionRef = useRef(direction);
  const snakeRef = useRef(snake);
  const foodRef = useRef(food);
  const gameStatusRef = useRef(gameStatus);
  const scoreRef = useRef(score);
  const speedRef = useRef(speed);
  const gameLoopRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  // Update refs when state changes
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);

  useEffect(() => {
    foodRef.current = food;
  }, [food]);

  useEffect(() => {
    gameStatusRef.current = gameStatus;
  }, [gameStatus]);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  // Generate random food position
  const generateFood = useCallback((): {x: number, y: number} => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };

    // Make sure food doesn't spawn on snake
    if (snakeRef.current.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood();
    }

    return newFood;
  }, []);

  // Check if snake collided with itself or walls
  const checkCollision = useCallback((head: { x: number; y: number }, snakeBody: Array<{ x: number; y: number }> = snakeRef.current): boolean => {
    // Check wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }

    // Check self collision (excluding the head)
    for (let i = 1; i < snakeBody.length; i++) {
      if (head.x === snakeBody[i].x && head.y === snakeBody[i].y) {
        return true;
      }
    }

    return false;
  }, []);

  // Move the snake
  const moveSnake = useCallback(() => {
    if (gameStatusRef.current !== GameStatus.RUNNING) return;

    const currentSnake = [...snakeRef.current];
    const head = { ...currentSnake[0] };

    // Move head based on direction
    switch (directionRef.current) {
      case Direction.UP:
        head.y -= 1;
        break;
      case Direction.DOWN:
        head.y += 1;
        break;
      case Direction.LEFT:
        head.x -= 1;
        break;
      case Direction.RIGHT:
        head.x += 1;
        break;
    }

    // Check if game over due to collision
    if (checkCollision(head)) {
      setGameStatus(GameStatus.GAME_OVER);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      return;
    }

    // Move the snake
    currentSnake.unshift(head);

    // Check if snake ate food
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      // Increase score
      const newScore = scoreRef.current + 1;
      setScore(newScore);
      
      // Generate new food
      const newFood = generateFood();
      setFood(newFood);
      
      // Increase speed slightly
      if (newScore % 5 === 0) {
        const newSpeed = Math.max(60, speedRef.current - 10);
        setSpeed(newSpeed);
      }
    } else {
      // Remove tail if no food eaten
      currentSnake.pop();
    }

    setSnake(currentSnake);
  }, [checkCollision, generateFood]);

  // Game loop
  const runGameLoop = useCallback((timestamp: number) => {
    if (gameStatusRef.current !== GameStatus.RUNNING) {
      return;
    }
    
    const currentSpeed = speedRef.current;
    
    if (timestamp - lastUpdateTimeRef.current >= currentSpeed) {
      lastUpdateTimeRef.current = timestamp;
      moveSnake();
    }
    
    gameLoopRef.current = requestAnimationFrame(runGameLoop);
  }, [moveSnake]);

  // Start the game
  const startGame = useCallback(() => {
    setGameStatus(GameStatus.RUNNING);
    setSnake(INITIAL_SNAKE);
    setDirection(Direction.DOWN);
    setScore(0);
    setFood(generateFood());
    lastUpdateTimeRef.current = 0;
    
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
    
    gameLoopRef.current = requestAnimationFrame(runGameLoop);
  }, [generateFood, runGameLoop]);

  // Pause the game
  const pauseGame = useCallback(() => {
    if (gameStatusRef.current === GameStatus.RUNNING) {
      setGameStatus(GameStatus.PAUSED);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
    }
  }, []);

  // Resume the game
  const resumeGame = useCallback(() => {
    if (gameStatusRef.current === GameStatus.PAUSED) {
      setGameStatus(GameStatus.RUNNING);
      lastUpdateTimeRef.current = 0;
      gameLoopRef.current = requestAnimationFrame(runGameLoop);
    }
  }, [runGameLoop]);

  // Reset the game
  const resetGame = useCallback(() => {
    setGameStatus(GameStatus.NOT_STARTED);
    setSnake(INITIAL_SNAKE);
    setDirection(Direction.DOWN);
    setScore(0);
    setFood(generateFood());
    setSpeed(150);
    
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
      gameLoopRef.current = null;
    }
  }, [generateFood]);

  // Handle keyboard input
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameStatusRef.current === GameStatus.GAME_OVER) return;

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault(); // Prevent default behavior
        if (directionRef.current !== Direction.DOWN) {
          setDirection(Direction.UP);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (directionRef.current !== Direction.UP) {
          setDirection(Direction.DOWN);
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (directionRef.current !== Direction.RIGHT) {
          setDirection(Direction.LEFT);
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (directionRef.current !== Direction.LEFT) {
          setDirection(Direction.RIGHT);
        }
        break;
      case ' ':
        e.preventDefault(); // Prevent spacebar from scrolling
        if (gameStatusRef.current === GameStatus.NOT_STARTED) {
          startGame();
        } else if (gameStatusRef.current === GameStatus.RUNNING) {
          pauseGame();
        } else if (gameStatusRef.current === GameStatus.PAUSED) {
          resumeGame();
        }
        break;
      case 'r':
      case 'R':
        e.preventDefault();
        resetGame();
        break;
    }
  }, [startGame, pauseGame, resumeGame, resetGame]);

  // Handle mobile controls
  const handleMobileControl = useCallback((newDirection: Direction) => {
    // Only allow direction change if it's not the opposite direction
    if (
      (newDirection === Direction.UP && directionRef.current !== Direction.DOWN) ||
      (newDirection === Direction.DOWN && directionRef.current !== Direction.UP) ||
      (newDirection === Direction.LEFT && directionRef.current !== Direction.RIGHT) ||
      (newDirection === Direction.RIGHT && directionRef.current !== Direction.LEFT)
    ) {
      setDirection(newDirection);
    }
  }, []);

  // Set up and clean up event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
        gameLoopRef.current = null;
      }
    };
  }, [handleKeyDown]);

  // Render game grid
  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;
        const isHead = snake[0]?.x === x && snake[0]?.y === y;
        
        let cellClass = 'cell';
        if (isHead) {
          cellClass += ' head';
        } else if (isSnake) {
          cellClass += ' snake';
        } else if (isFood) {
          cellClass += ' food';
        }
        
        grid.push(
          <div 
            key={`${x}-${y}`} 
            className={cellClass}
            style={{ 
              gridColumn: x + 1, 
              gridRow: y + 1 
            }}
          />
        );
      }
    }
    return grid;
  };

  // Prevent space bar from scrolling
  useEffect(() => {
    const preventSpaceScroll = (e: KeyboardEvent) => {
      if (e.key === ' ' || 
          e.key === 'ArrowUp' || 
          e.key === 'ArrowDown' || 
          e.key === 'ArrowLeft' || 
          e.key === 'ArrowRight') {
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', preventSpaceScroll);
    
    return () => {
      window.removeEventListener('keydown', preventSpaceScroll);
    };
  }, []);

  return (
    <div className="snake-game-container">
      <div className="game-info">
        <h2>Snake Game</h2>
        <div className="score">Score: {score}</div>
        <div className="controls-info">
          <p>Use arrow keys to move</p>
          <p>Press Space to start/pause</p>
          <p>Press R to reset</p>
        </div>
      </div>

      <div className="game-board">
        {renderGrid()}
        
        {gameStatus === GameStatus.NOT_STARTED && (
          <div className="overlay">
            <div className="message">Press Space to Start</div>
          </div>
        )}
        
        {gameStatus === GameStatus.PAUSED && (
          <div className="overlay">
            <div className="message">Paused</div>
            <button onClick={resumeGame}>Resume</button>
          </div>
        )}
        
        {gameStatus === GameStatus.GAME_OVER && (
          <div className="overlay">
            <div className="message">Game Over!</div>
            <div className="final-score">Score: {score}</div>
            <button onClick={startGame}>Play Again</button>
          </div>
        )}
      </div>

      <div className="mobile-controls">
        <button className="control-btn up" onClick={() => handleMobileControl(Direction.UP)}>
          <span>↑</span>
        </button>
        <div className="horizontal-controls">
          <button className="control-btn left" onClick={() => handleMobileControl(Direction.LEFT)}>
            <span>←</span>
          </button>
          <button className="control-btn right" onClick={() => handleMobileControl(Direction.RIGHT)}>
            <span>→</span>
          </button>
        </div>
        <button className="control-btn down" onClick={() => handleMobileControl(Direction.DOWN)}>
          <span>↓</span>
        </button>
      </div>

      <div className="game-buttons">
        {gameStatus === GameStatus.NOT_STARTED && (
          <button onClick={startGame}>Start Game</button>
        )}
        {gameStatus === GameStatus.RUNNING && (
          <button onClick={pauseGame}>Pause</button>
        )}
        {gameStatus === GameStatus.PAUSED && (
          <button onClick={resumeGame}>Resume</button>
        )}
        {gameStatus !== GameStatus.NOT_STARTED && (
          <button onClick={resetGame}>Reset</button>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;