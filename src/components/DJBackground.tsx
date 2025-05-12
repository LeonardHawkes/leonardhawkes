// src/components/DJBackground.tsx
import React from 'react';
import './DJBackground.css';

const DJBackground: React.FC = () => {
  return (
    <div className="dj-background">
      <div className="turntable left">
        <div className="record">
          <div className="record-center"></div>
          <div className="record-grooves"></div>
        </div>
        <div className="tone-arm"></div>
      </div>
      
      <div className="turntable right">
        <div className="record">
          <div className="record-center"></div>
          <div className="record-grooves"></div>
        </div>
        <div className="tone-arm"></div>
      </div>
      
      <div className="equalizer">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="eq-bar">
            {Array.from({ length: 8 }).map((_, ledIndex) => (
              <div key={ledIndex} className={`eq-led ${ledIndex < 4 ? 'active' : ''}`}></div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="waveform">
        {Array.from({ length: 100 }).map((_, index) => (
          <div 
            key={index} 
            className="wave-segment"
            style={{ 
              height: `${20 + Math.sin(index * 0.2) * 15}px`,
              animationDelay: `${index * 0.02}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DJBackground;