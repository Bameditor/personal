const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.1 });


function playVideo(id) {
  document.getElementById(id).play();

}

function pauseVideo(id) {
  document.getElementById(id).pause();

}

function openPlaylist(id) {
      window.location.href = `playlist.html?id=${id}`;
    }

// Get all video cards
const cards = document.querySelectorAll('.video-card');

cards.forEach(card => {
  const video = card.querySelector('video');
  const playBtn = card.querySelector('.play-btn');
  const pauseBtn = card.querySelector('.pause-btn');

  playBtn.addEventListener('click', () => {
    video.play();
  });

  pauseBtn.addEventListener('click', () => {
    video.pause();
  });
});

// 🎥 Get all video elements
const allVideos = document.querySelectorAll('.video-card video');

// Loop through each video card
document.querySelectorAll('.video-card').forEach(card => {
  const video = card.querySelector('video');
  const playBtn = card.querySelector('.play-btn');
  const pauseBtn = card.querySelector('.pause-btn');

  // ▶️ Play button — pauses other videos first
  playBtn.addEventListener('click', () => {
    allVideos.forEach(v => {
      if (v !== video) v.pause(); // pause all except this one
    });
    video.play();
  });

  // ⏸ Pause button — only pauses this video
  pauseBtn.addEventListener('click', () => {
    video.pause();
  });

  // ⏯ Also handle manual play (when user clicks directly on the video)
  video.addEventListener('play', () => {
    allVideos.forEach(v => {
      if (v !== video) v.pause();
    });
  });
});
