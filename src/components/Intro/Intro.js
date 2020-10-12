import React from 'react';
import './Intro.css';
import discord from './discord-logo.png';
import battlenet from './battle-net-logo.png';

function Intro() {
  return (
    <div className="Intro">
      <div class="guild-name">
        <h1>Currently Unnamed</h1>
        <h2>Mythic Raiding guild on Tarren Mill</h2>
      </div>
      <div>
        <section>
          <p>
          &lt;Currently Unnamed&gt; is a new 2 day guild on Tarren Mill made up of a group of progress focused, experienced raiders. We are all multi-cutting edge players looking to raid at a good standard in Shadowlands but on a more relaxed schedule, aiming to hit rank 500 in the first tier. If you are interested send a message to one of our officers!
          </p>
          <p>
            Deamonized (GM): &nbsp;
            <img src={discord} id="Discord-logo" alt="discord" height="12px" />
            Deamonized#5170 &nbsp;
            <img src={battlenet} id="Battle-net-logo" alt="Battle-net" height="12px" />  
            Deamonized#2416 <br />
            Base: &nbsp;
            <img src={discord} id="Discord-logo" alt="discord" height="12px" />
            Baseless#4255 &nbsp;
            <img src={battlenet} id="Battle-net-logo" alt="Battle-net" height="12px" /> 
            Baseless#2713 <br />
            Inspired: &nbsp;
            <img src={discord} id="Discord-logo" alt="discord" height="12px" />
            Inspired#0001 &nbsp;
            <img src={battlenet} id="Battle-net-logo" alt="Battle-net" height="12px" /> 
            Inspired#21448
          </p>
          <p>
            Raid days are (in server time):
            <ul>
              <li>Wednesday 20:00 - 23:30 </li>
              <li>Thursday 20:00 - 23:30</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Intro;
