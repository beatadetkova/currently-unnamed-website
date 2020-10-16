import React from 'react';
import './Intro.css';
import discord from './discord-logo.png';
import battlenet from './battle-net-logo.png';

function Intro() {
  return (
    <div id="intro">
      <div id="guild-name">
        <h1>Currently Unnamed</h1>
        <h2>Mythic Raiding guild on Tarren Mill</h2>
      </div>
      <div>
        <section>
          <p>
            <span className="bold-text">&lt;Currently Unnamed&gt;</span> is a
            new 2 day guild on Tarren Mill made up of a group of progress
            focused, experienced raiders. We are all multi-cutting edge players
            looking to raid at a good standard in Shadowlands but on a more
            relaxed schedule, aiming to hit rank 500 in the first tier.
          </p>
          <p>If you are interested send a message to one of our officers!</p>
          <p>
            Deamonized (GM): &nbsp;
            <img
              src={discord}
              className="Discord-logo"
              alt="discord"
              height="12px"
            />
            Deamonized#5170 &nbsp;
            <img
              src={battlenet}
              className="Battle-net-logo"
              alt="Battle-net"
              height="12px"
            />
            Deamonized#2416 <br />
            Base: &nbsp;
            <img
              src={discord}
              className="Discord-logo"
              alt="discord"
              height="12px"
            />
            Baseless#4255 &nbsp;
            <img
              src={battlenet}
              className="Battle-net-logo"
              alt="Battle-net"
              height="12px"
            />
            Baseless#2713 <br />
            Inspired: &nbsp;
            <img
              src={discord}
              className="Discord-logo"
              alt="discord"
              height="12px"
            />
            Inspired#0001 &nbsp;
            <img
              src={battlenet}
              className="Battle-net-logo"
              alt="Battle-net"
              height="12px"
            />
            Inspired#21448
          </p>
          <label>Raid days are (server time):</label>
          <ul>
            <li>Wednesday 20:00 - 23:30 </li>
            <li>Thursday 20:00 - 23:30</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Intro;
