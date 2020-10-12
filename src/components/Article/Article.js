import React from 'react';
import './Article.css';

function Article(props) {
  return (
    <div className="Article">
      <iframe
        title="youtube-video"
        width="618"
        height="347.5"
        src={props.video}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Article;
