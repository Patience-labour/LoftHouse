import './Video.scss';
import './../../Libs/youtubeLightbox/youtube.css';
import interior from './../../Img/Bg/Video.jpg';
import playBtn from './../../Img/Icons/play-button.svg';
import { useEffect } from 'react';
import { initYouTubeLightbox } from './../../Libs/youtubeLightbox/youtube';

export const Video = () => {

  useEffect(() => {
    setTimeout(() => {
      initYouTubeLightbox();
    }, 100);
  }, []);

  return (
    <section className="video">
      <div className="container">
        <a data-youtubelightbox href="https://www.youtube.com/wathc?v=bhJNL9JUsnY" className="video__link">
          <img src={interior} alt="interior" className="video__img" />
          <img src={playBtn} alt="play" className="video__icon" />
        </a>
      </div>
    </section>
  )
}