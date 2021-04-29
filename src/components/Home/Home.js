import React from 'react';
import Intro from '../Intro/Intro.js';
import Article from '../Article/Article.js';

function Home() {
  return (
    <div>
      <Intro />
      <Article
        video="https://www.youtube.com/embed/SM90NNF3oMw"
        title="Castle Nathria"
      >
        <p>We will be back with our kill videos soon!</p>
        <p>Pull count:</p>
        <ul>
          <li>Shriekwing: 8</li>
          <li>Altimor the Huntsman: 14</li>
          <li>Hungering Destroyer: 28</li>
          <li>Artificer Xy'Mox: 50 <a href="https://www.twitch.tv/videos/865078457">Hunter PoV</a></li>
          <li>Sun King's Salvation: 47</li>
          <li>Lady Inerva Darkvein: 75</li>
          <li>The Council of Blood: 71</li>
          <li>Sludgefist: 127 <a href="https://www.twitch.tv/videos/919007159">Hunter PoV</a></li>
          <li>Stone Legion Generals: 180 <a href="https://www.twitch.tv/videos/953161383">Resto Shaman PoV</a></li>
          <li>Sire Denathrius: 233 <a href="https://www.twitch.tv/videos/994729320">DK PoV</a></li>
        </ul>
      </Article>
    </div>
  );
}

export default Home;
