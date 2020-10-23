import React from 'react';
import './Intro.css';
import discord from './discord-logo.png';
import battlenet from './battle-net-logo.png';

const ContactInfo = ({ name, discordID, battleTag }) => {
  return (
    <div className="contact-info">
      <div>{name}:</div>
      <div className="social-contact">
        <div className="logo">
          <img src={discord} alt="discord" />
        </div>
        <div>{discordID}</div>
      </div>
      <div className="social-contact">
        <div className="logo">
          <img src={battlenet} alt="Battle-net" />
        </div>
        <div>{battleTag}</div>
      </div>
    </div>
  );
};

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
          <ContactInfo
            name="Deamonized (GM)"
            discordID="Deamonized#5170"
            battleTag="Deamonized#2416"
          />
          <ContactInfo
            name="Base"
            discordID="Baseless#4255"
            battleTag="Baseless#2713"
          />
          <ContactInfo
            name="Inspired"
            discordID="Inspired#0001"
            battleTag="Inspired#21448"
          />
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
