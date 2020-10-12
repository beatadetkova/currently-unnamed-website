import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Intro from './components/Intro/Intro.js';
import Article from './components/Article/Article.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Article video="https://www.youtube.com/embed/Vdre3Tx10MA" />
      <Article video="https://www.youtube.com/embed/HlCWhtmQPvo" />
    </div>
  );
}

export default App;
