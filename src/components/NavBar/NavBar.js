import React from 'react';
import logo from './CU-logo.png';
import './NavBar.css';
import wl from './wl-logo.png';
import wow from './wow-logo.png';
import rio from './rio-logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="app-logo">
          <img src={logo} className="app-logo" alt="logo" />
        </Link>
        <a href="https://discord.gg/K5jxQMGjMj" className="link" id="Apply-link">Apply</a>
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
            <img src={wl} className="logo-link" alt="logo" />
          </a>
          <a
            className="logo-link"
            href="https://worldofwarcraft.com/en-gb/guild/eu/tarren-mill/currently-unnamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wow} className="logo-link" alt="logo" />
          </a>
          <a
            className="logo-link"
            href="https://raider.io/guilds/eu/tarren-mill/Currently%20Unnamed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rio} className="logo-link" alt="logo" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
