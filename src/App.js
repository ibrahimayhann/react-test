import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
     <div className="title">Re'Whise</div>
      <div className="subtitle">Coming Soon</div>
    </div>
    
  );
}

export default App;
/*
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const fullText = "Re'whise";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="title">{text}</div>
      <div className="subtitle">Yakında</div>
    </div>
  );
}*/
