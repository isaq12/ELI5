import React from 'react';
import './App.css';
import SimplificationForm from './SimplificationForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import RippleBackground from './RippleBackground';
import AnimatedHeading from './AnimatedHeading'; // Import the animated heading

function App() {
  return (
    <div className="App">
      <RippleBackground />
      <AnimatedHeading /> {/* Use the animated heading here */}
      <div className="content">
        <SimplificationForm />
        {/* Additional content */}
      </div>
    </div>
  );
}

export default App;
