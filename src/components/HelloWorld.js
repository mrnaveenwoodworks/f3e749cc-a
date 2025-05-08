import React, { useState, useEffect } from 'react';
import '../styles/HelloWorld.css';

const HelloWorld = () => {
  const [loaded, setLoaded] = useState(false);
  const helloText = "Hello";
  const worldText = "World!";

  useEffect(() => {
    // Set loaded state to true after component mounts
    // This will trigger the animations
    setLoaded(true);
  }, []);

  return (
    <div className="hello-world-container">
      <div className="text-container">
        {/* Hello text with letter-by-letter animation */}
        <span className="hello-text">
          {helloText.split('').map((letter, index) => (
            <span 
              key={`hello-${index}`} 
              className={`animated-letter ${loaded ? 'appear' : ''}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
        
        {/* Space between words */}
        <span className="space">&nbsp;</span>
        
        {/* World text with letter-by-letter animation */}
        <span className="world-text">
          {worldText.split('').map((letter, index) => (
            <span 
              key={`world-${index}`} 
              className={`animated-letter ${loaded ? 'appear' : ''}`}
              style={{ animationDelay: `${0.1 * (index + helloText.length + 1)}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>
      
      {/* Decorative elements */}
      <div className={`circle-decoration ${loaded ? 'show' : ''}`}></div>
      <div className={`line-decoration left ${loaded ? 'extend' : ''}`}></div>
      <div className={`line-decoration right ${loaded ? 'extend' : ''}`}></div>
      
      {/* Floating particles for extra visual effect */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={`particle-${i}`}
          className="particle"
          style={{
            '--size': `${Math.random() * 10 + 5}px`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 2}s`,
            '--duration': `${Math.random() * 10 + 10}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default HelloWorld;