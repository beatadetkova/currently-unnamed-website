import React from 'react';
import Intro from '../Intro/Intro.js';
import Article from '../Article/Article.js';

function Home() {
  return (
    <div>
      <Intro />
      <Article video="https://www.youtube.com/embed/Vdre3Tx10MA" />
      <Article video="https://www.youtube.com/embed/HlCWhtmQPvo" />
    </div>
  );
}

export default Home;
