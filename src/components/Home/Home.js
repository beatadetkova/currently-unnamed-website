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
          <li>Artificer Xy'Mox: 50</li>
          <li>Sun King's Salvation: 47</li>
          <li>Lady Inerva Darkvein: 75</li>
          <li>The Council of Blood: 71</li>
          <li>Sludgefist: 127</li>
          <li>Stoneborne Generals: 180</li>
          <li>Sire Denathrius: ?</li>
        </ul>
      </Article>
    </div>
  );
}

export default Home;
