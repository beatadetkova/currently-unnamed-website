import React, { useState, useEffect } from 'react';
import './Article.css';
import Spinner from './Spinner.js';

function Article({ video, children, title }) {
  const [videoSrc, setVideoSrc] = useState('');
  const [articleRef, setArticleRef] = useState();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (articleRef && videoSrc !== video) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!didCancel && entry.isIntersecting) {
                setVideoSrc(video);
                observer.unobserve(articleRef);
              }
            });
          },
          {
            threshold: 0.01,
          }
        );
        observer.observe(articleRef);
      } else {
        setVideoSrc(video);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(articleRef);
      }
    };
  }, [video, videoSrc, articleRef]);

  function loadHandler() {
    if (videoSrc.length > 0) {
      setShowVideo(!showVideo);
    }
  }

  return (
    <div className="Article" ref={setArticleRef}>
      <div id="loader">
        <div className={showVideo ? 'hidden' : ''}>
          <Spinner />
        </div>
        <iframe
          className={showVideo ? '' : 'hidden'}
          onLoad={loadHandler}
          title="youtube-video"
          width="618"
          height="347.5"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div id="content">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Article;
