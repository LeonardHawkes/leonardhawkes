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
  const gameLoopRef = useRef<number | null>(null);

  // Update refs when state changes
  useEffect(() => {
    directionRef.current = direction;
    snakeRef.current = snake;
    foodRef.current = food;
    gameStatusRef.current = gameStatus;
    scoreRef.current = score;
  }, [direction, snake, food, gameStatus, score]);

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
  const checkCollision = (head: { x: number; y: number }, snakeBody: Array<{ x: number; y: number }> = snakeRef.current): boolean => {
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
  };

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
      setScore(scoreRef.current + 1);
      
      // Increase speed slightly
      if (scoreRef.current % 5 === 0) {
        setSpeed(prevSpeed => Math.max(60, prevSpeed - 10));
      }
      
      // Generate new food
      setFood(generateFood());
    } else {
      // Remove tail if no food eaten
      currentSnake.pop();
    }

    setSnake(currentSnake);
  }, [generateFood]);

  // Game loop
  const gameLoop = useCallback((timestamp: number) => {
    let previousTime = timestamp;
    let lag = 0;

    const loop = (currentTime: number) => {
      if (gameStatusRef.current !== GameStatus.RUNNING) return;
      
      const elapsed = currentTime - previousTime;
      previousTime = currentTime;
      lag += elapsed;

      while (lag >= speed) {
        moveSnake();
        lag -= speed;
      }

      gameLoopRef.current = requestAnimationFrame(loop);
    };

    gameLoopRef.current = requestAnimationFrame(loop);
  }, [moveSnake, speed]);

  // Handle keyboard input
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameStatusRef.current === GameStatus.GAME_OVER) return;

    switch (e.key) {
      case 'ArrowUp':
        if (directionRef.current !== Direction.DOWN) {
          setDirection(Direction.UP);
        }
        break;
      case 'ArrowDown':
        if (directionRef.current !== Direction.UP) {
          setDirection(Direction.DOWN);
        }
        break;
      case 'ArrowLeft':
        if (directionRef.current !== Direction.RIGHT) {
          setDirection(Direction.LEFT);
        }
        break;
      case 'ArrowRight':
        if (directionRef.current !== Direction.LEFT) {
          setDirection(Direction.RIGHT);
        }
        break;
      case ' ':
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
        resetGame();
        break;
    }
  }, []);

  // Start the game
  const startGame = () => {
    setGameStatus(GameStatus.RUNNING);
    setSnake(INITIAL_SNAKE);
    setDirection(Direction.DOWN);
    setScore(0);
    setFood(generateFood());
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  // Pause the game
  const pauseGame = () => {
    setGameStatus(GameStatus.PAUSED);
  };

  // Resume the game
  const resumeGame = () => {
    setGameStatus(GameStatus.RUNNING);
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  // Reset the game
  const resetGame = () => {
    setGameStatus(GameStatus.NOT_STARTED);
    setSnake(INITIAL_SNAKE);
    setDirection(Direction.DOWN);
    setScore(0);
    setFood(generateFood());
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
      gameLoopRef.current = null;
    }
  };

  // Handle mobile controls
  const handleMobileControl = (newDirection: Direction) => {
    // Only allow direction change if it's not the opposite direction
    if (
      (newDirection === Direction.UP && directionRef.current !== Direction.DOWN) ||
      (newDirection === Direction.DOWN && directionRef.current !== Direction.UP) ||
      (newDirection === Direction.LEFT && directionRef.current !== Direction.RIGHT) ||
      (newDirection === Direction.RIGHT && directionRef.current !== Direction.LEFT)
    ) {
      setDirection(newDirection);
    }
  };

  // Set up and clean up event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
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