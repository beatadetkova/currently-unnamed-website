import React, { useState, useEffect } from 'react';
import './Article.css';

function Article({ video }) {
  const [videoSrc, setVideoSrc] = useState('');
  const [articleRef, setArticleRef] = useState();

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

  return (
    <div className="Article" ref={setArticleRef}>
      <iframe
        title="youtube-video"
        width="618"
        height="347.5"
        src={videoSrc}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Article;
