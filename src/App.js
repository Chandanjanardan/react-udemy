// src/TextToSpeech.js
import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance('hello how are you ');
      window.speechSynthesis.speak(speech);
    } else {
      alert('Sorry, your browser does not support text to speech!');
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeakClick = () => {
    speak(text);
  };

  return (
    <div>
      <h1>Text to Speech</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        placeholder="Enter text here..."
      />
      <br />
      <button onClick={handleSpeakClick}>Speak</button>
    </div>
  );
};

export default App;
