import React from 'react';
import logo from './CU-logo.png';
import './NavBar.css';
import wa from './wa-logo.png';
import wow from './wow-logo.png';
import rio from './rio-logo.png';

function NavBar() {
  return (
    <div className="App">
      <nav>
        <a href={window.location.origin} className="custom-logo" rel="home">
          <img src={logo} id="App-logo" alt="logo" height="50px" />
        </a>
        <a
          className="link"
          id="Apply-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfTidi7OwYKxhcOY1kHwwInDZx2XfHFXK_DPwN5Iyt1aszn4w/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply
        </a>
        <div>
          <a
            className="link"
            href="https://www.wowprogress.com/guild/eu/tarren-mill/Currently+Unnamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            WoWProgress
          </a>
          <a
            className="logo-link"
            href="https://www.warcraftlogs.com/guild/eu/tarren-mill/currently%20unnamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wa} className="WoW-logo" alt="logo" height="50px" />
          </a>
          <a
            className="logo-link"
            href="https://worldofwarcraft.com/en-gb/guild/eu/tarren-mill/currently-unnamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wow} className="WoW-logo" alt="logo" height="50px" />
          </a>
          <a
            className="logo-link"
            href="https://raider.io/guilds/eu/tarren-mill/Currently%20Unnamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rio} className="WoW-logo" alt="logo" height="50px" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
