const videoElement = document.querySelector('.video');
const progressBar = document.querySelector('.progress-bar');
const progressRange = document.querySelector('.progress-range');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');

function videoIsPaused() {
    return videoElement.paused === true;
}

// Play & Pause ----------------------------------- //

function playPauseVideo() {
    if (videoIsPaused()) {
        playBtn.classList.replace('fa-play', 'fa-pause');
        videoElement.play();
    } else {
        playBtn.classList.replace('fa-pause', 'fa-play');
        videoElement.pause();
    }
}

// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


document.addEventListener('click', playPauseVideo);