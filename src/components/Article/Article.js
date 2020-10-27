import React, { useState, useEffect, useCallback } from 'react';
import './Article.css';
import Spinner from './Spinner.js';

function Article({ video, children, title }) {
  const [videoSrc, setVideoSrc] = useState('');
  const [articleRef, setArticleRef] = useState();
  const [contentRef, setContentRef] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setwindowWidth] = useState(0);

  const updateWidthCb = useCallback(updateWidth);

  useEffect(() => {
    // calculate window width
    updateWidthCb();
    window.addEventListener('resize', updateWidthCb);
    // handling article intersection
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
      // remove event listener for window resizing
      window.removeEventListener('resize', updateWidthCb);
      // stop observing intersection
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(articleRef);
      }
    };
  }, [video, videoSrc, articleRef, updateWidthCb]);

  function updateWidth() {
    setwindowWidth(window.innerWidth);
  }

  function loadHandler() {
    if (videoSrc.length > 0) {
      setShowVideo(!showVideo);
    }
  }

  function expandContent() {
    setIsExpanded(!isExpanded);
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
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div id="content">
        <h1>{title}</h1>
        <div onClick={expandContent}>
          <div id="text-content" className={isExpanded ? 'expanded' : ''}>
            <div ref={setContentRef}>{children}</div>
          </div>
          <div id="expand-info">
            {windowWidth < 600 && contentRef?.offsetHeight > 55
              ? `Show ${isExpanded ? 'less' : 'more'}`
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
