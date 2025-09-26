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

