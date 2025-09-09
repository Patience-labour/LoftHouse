import './youtube.css';

export const initYouTubeLightbox = () => {
  console.log('Initializing YouTube Lightbox...');

  const linksBtnsSelector = 'a[data-youtubelightbox]';
  const isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;
  let player;
  let youtubelightbox;

  function createLightboxElement() {
    if (document.getElementById('youtubelightbox')) return;

    const lightboxHTML = `
      <div id="youtubelightbox" class="youtubelightbox" style="display: none;">
        <div class="youtubelightbox__centeredchild">
          <div id="youtubelightboxPlayer"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    youtubelightbox = document.getElementById('youtubelightbox');

    youtubelightbox.addEventListener('click', function () {
      this.style.display = 'none';
      if (player && player.stopVideo) {
        player.stopVideo();
      }
    }, false);

    const centeredChild = youtubelightbox.querySelector('.youtubelightbox__centeredchild');
    if (centeredChild) {
      centeredChild.addEventListener('click', function (e) {
        e.stopPropagation();
      }, false);
    }
  }

  function getYouTubeId(link) {
    const youtubeIdReg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    const match = youtubeIdReg.exec(link);
    return match ? match[1] : null;
  }

  function createYouTubePlayer(videoId) {
    player = new YT.Player('youtubelightboxPlayer', {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 0
      },
    });
  }

  function initLightbox() {
    const targetLinks = document.querySelectorAll(linksBtnsSelector);
    console.log('Found links:', targetLinks.length);

    targetLinks.forEach(link => {
      const videoId = getYouTubeId(link.href);
      console.log('Video ID for link:', videoId);

      if (videoId) {
        link.setAttribute('data-video-id', videoId);

        link.addEventListener('click', function (e) {
          e.preventDefault();
          console.log('Opening lightbox for video:', videoId);

          youtubelightbox.style.display = 'block';

          if (typeof player === 'undefined') {
            createYouTubePlayer(videoId);
          } else {
            if (isiOS) {
              player.cueVideoById(videoId);
            } else {
              player.loadVideoById(videoId);
            }
          }
        }, false);
      }
    });
  }

  if (typeof YT !== 'undefined' && YT.loaded) {
    console.log('YouTube API already loaded');
    createLightboxElement();
    initLightbox();
  } else {
    console.log('Loading YouTube API...');
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function () {
      console.log('YouTube API ready');
      createLightboxElement();
      initLightbox();
    };
  }
};