import React from 'react';
import Intro from '../Intro/Intro.js';
import Article from '../Article/Article.js';

function Home() {
  return (
    <div>
      <Intro />
      <Article
        video="https://www.youtube.com/embed/SM90NNF3oMw"
        title="Castle Nathria (soon&trade;)"
      >
        <p>We will be back with our kill videos!</p>
        <p>Pull count:</p>
        <ul>
          <li>Shriekwing: 0</li>
          <li>Altimor the Huntsman: 0</li>
          <li>Hungering Destroyer: 0</li>
          <li>Artificer Xy'Mox: 0</li>
          <li>Sun King's Salvation: 0</li>
          <li>Lady Inerva Darkvein: 0</li>
          <li>The Council of Blood: 0</li>
          <li>Sludgefist: 0</li>
          <li>Stoneborne Generals: 0</li>
          <li>Sire Denathrius: 0</li>
        </ul>
      </Article>
      {/* <Article
        video="https://www.youtube.com/embed/HlCWhtmQPvo"
        title="Castle Nathria"
      >
        <p>Pull count:</p>
        <ul>
          <li>Shriekwing:1 </li>
          <li>Altimor the Huntsman: 1</li>
          <li>Hungering Destroyer: 1</li>
          <li>Artificer Xy'Mox: 1</li>
          <li>Sun King's Salvation: 1</li>
          <li>Lady Inerva Darkvein: 1</li>
          <li>The Council of Blood: 1</li>
          <li>Sludgefist: 1</li>
          <li>Stoneborne Generals: 1</li>
          <li>Sire Denathrius: 1</li>
        </ul>
      </Article> */}
    </div>
  );
}

export default Home;
