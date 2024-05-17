import React, { useState } from 'react';
import './App.css'; // Ensure that the styles are imported
import axios from 'axios';

const SimplificationForm = () => {
  const [inputText, setInputText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  // Function to handle the submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/simplify', { text: inputText });
      setSimplifiedText(response.data.simplifiedText);
    } catch (error) {
      console.error('Error:', error);
      setSimplifiedText('Failed to simplify the text.');
    }
  };

  // Function to reset the input and output
  const handleReset = () => {
    setInputText('');
    setSimplifiedText('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="Ask me..💬"
        />
        <div className="button-container">
          <button type="submit">Simplify</button>
          <button type="button" onClick={handleReset} className="reset-button" title="Reset">
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
      </form>
      {simplifiedText && (
        <div className="result-container">
          {simplifiedText}
        </div>
      )}
    </div>
  );
};

export default SimplificationForm;
