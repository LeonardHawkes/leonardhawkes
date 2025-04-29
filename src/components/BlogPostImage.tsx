import React from 'react';

const BlogPostImage = () => {
  return (
    <div className="blog-image-container">
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3a86ff" />
            <stop offset="100%" stopColor="#8338ec" />
          </linearGradient>
          <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="800" height="500" fill="url(#bg-gradient)" />
        
        {/* Abstract Circuit Pattern */}
        <g opacity="0.2" fill="none" stroke="#ffffff" strokeWidth="2">
          <path d="M100,100 L200,150 L300,100 L400,200 L500,150 L600,250 L700,200" />
          <path d="M100,200 L250,250 L400,300 L550,250 L700,300" />
          <path d="M100,300 L200,350 L300,300 L400,400 L500,350 L600,400 L700,350" />
          <circle cx="200" cy="150" r="8" fill="#ffffff" />
          <circle cx="400" cy="200" r="8" fill="#ffffff" />
          <circle cx="600" cy="250" r="8" fill="#ffffff" />
          <circle cx="250" cy="250" r="8" fill="#ffffff" />
          <circle cx="550" cy="250" r="8" fill="#ffffff" />
          <circle cx="200" cy="350" r="8" fill="#ffffff" />
          <circle cx="400" cy="400" r="8" fill="#ffffff" />
          <circle cx="600" cy="400" r="8" fill="#ffffff" />
        </g>
        
        {/* Title */}
        <text
          x="400"
          y="150"
          fontFamily="Arial, sans-serif"
          fontSize="36"
          fontWeight="bold"
          fill="url(#text-gradient)"
          textAnchor="middle"
        >
          NLP & LLMs in Finance
        </text>
        
        {/* Subtitle */}
        <text
          x="400"
          y="200"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fill="#ffffff"
          textAnchor="middle"
        >
          Reshaping the Financial Industry
        </text>
        
        {/* Icons */}
        <g transform="translate(300, 280)">
          <rect x="0" y="0" width="200" height="120" rx="10" fill="rgba(255, 255, 255, 0.1)" />
          <text x="100" y="40" fontFamily="Arial, sans-serif" fontSize="20" fill="#ffffff" textAnchor="middle">AI + Finance</text>
          <text x="100" y="80" fontFamily="Arial, sans-serif" fontSize="16" fill="#ffffff" textAnchor="middle">April 2025</text>
        </g>
      </svg>
    </div>
  );
};

export default BlogPostImage;