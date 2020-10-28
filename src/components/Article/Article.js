import React, { useState, useEffect } from 'react';
import './Article.css';
import Spinner from './Spinner.js';

function Article({ video, children, title }) {
  const [videoSrc, setVideoSrc] = useState('');
  const [articleRef, setArticleRef] = useState();
  const [contentRef, setContentRef] = useState();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (
      !IntersectionObserver ||
      !IntersectionObserver.prototype.observe ||
      !IntersectionObserver.prototype.unobserve
    ) {
      setVideoSrc(video);
      return () => {};
    }
    if (articleRef) {
      let didCancel = false;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!didCancel && entry.isIntersecting) {
              setVideoSrc(video);
              observer.unobserve(articleRef);
            }
          }
        },
        { threshold: 0.01 }
      );
      observer.observe(articleRef);
      return () => {
        // stop observing intersection
        didCancel = true;
        observer.unobserve(articleRef);
      };
    }
  }, [video, articleRef]);

  useEffect(() => {
    //handling resizing
    const resizeHandler = (e) => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  function loadHandler() {
    setIsVideoLoaded(true);
  }

  function expandContent() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="Article" ref={setArticleRef}>
      <div id="loader">
        {!isVideoLoaded && <Spinner />}
        {videoSrc.length > 0 && (
          <iframe
            onLoad={loadHandler}
            className={!isVideoLoaded ? 'hidden' : ''}
            title="youtube-video"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
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
