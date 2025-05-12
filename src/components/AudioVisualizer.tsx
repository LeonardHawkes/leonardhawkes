// src/components/AudioVisualizer.tsx
import React, { useEffect, useRef } from 'react';
import './AudioVisualizer.css';

interface AudioVisualizerProps {
  color?: string;
  height?: number;
  barCount?: number;
  barWidth?: number;
  barGap?: number;
  animate?: boolean;
}

const AudioVisualizer = ({
  color = '#3a86ff',
  height = 100,
  barCount = 32,
  barWidth = 4,
  barGap = 1,
  animate = true
}: AudioVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = (barWidth + barGap) * barCount - barGap;
    canvas.height = height;
    
    // Function to generate random bar heights for the visualization
    const generateRandomBars = (): number[] => {
      return Array.from({ length: barCount }, () => Math.random() * height);
    };
    
    // Function to draw bars
    const drawBars = (barHeights: number[]) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      barHeights.forEach((barHeight, index) => {
        const x = index * (barWidth + barGap);
        const y = canvas.height - barHeight;
        
        // Create gradient for each bar
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, adjustColor(color, 40)); // Lighter at the top
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
      });
    };
    
    // Function to adjust color brightness
    const adjustColor = (color: string, amount: number): string => {
      return '#' + color.replace(/^#/, '').replace(/../g, hex => {
        const value = Math.min(255, Math.max(0, parseInt(hex, 16) + amount));
        return value.toString(16).padStart(2, '0');
      });
    };
    
    if (animate) {
      // Animate the bars
      let barHeights = generateRandomBars();
      
      const animate = () => {
        // Update bar heights with smooth transitions
        barHeights = barHeights.map(height => {
          const targetHeight = Math.random() * canvas.height;
          return height + (targetHeight - height) * 0.1;
        });
        
        drawBars(barHeights);
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animate();
    } else {
      // Just draw static bars
      drawBars(generateRandomBars());
    }
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color, height, barCount, barWidth, barGap, animate]);
  
  return (
    <div className="audio-visualizer">
      <canvas ref={canvasRef} className="visualizer-canvas"></canvas>
    </div>
  );
};

export default AudioVisualizer;