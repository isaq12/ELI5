// AnimatedHeading.js
import React, { useEffect } from 'react';
import './AnimatedHeading.css'; // Import the CSS file for styles

const AnimatedHeading = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.animated-heading span');
    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });
      
      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));
    });
  }, []);

  return (
    <div className="animated-heading">
      {'ELI5'.split('').map((char, index) => (
        <span key={index}>{char}</span>
      ))}
      <span role="img" aria-label="maglass">&nbsp;🔍</span> 
    </div>
  );
};

export default AnimatedHeading;
