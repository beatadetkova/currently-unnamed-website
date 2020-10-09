import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a
          id="wowprogress"
          href="https://www.wowprogress.com/guild/eu/tarren-mill/Currently+Unnamed"
          target="_blank"
          rel="noopener noreferrer"
        >
          WoWProgress
        </a>
        <a
          href="https://raider.io/guilds/eu/tarren-mill/Currently%20Unnamed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdnassets.raider.io/images/brand/Mark_2ColorWhite.svg"
            alt="RaiderIO icon"
          />
        </a>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </nav>
    </div>
  );
}

export default App;
