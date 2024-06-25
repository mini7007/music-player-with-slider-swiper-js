// © 2024. shobhitDev All rights reserved.
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Ram Aayenge 🚩",
    name: "Ram Aayenge 🚩By Mini",
    source: "Ram Aayenge.m4a",
  },
  {
    title: "ADHARAM MADHURAM",
    name: "ADHARAM MADHURAM By Mini",
    source: "ADHARAM MADHURAM.m4a",
  },
  {
    title: "Ram Aayenge 🚩",
    name: "Ram Aayenge 🚩By Mini",
    source: "Ram Aayenge.m4a",
  },
  {
    title: "Keejo Kesari Ke Laal",
    name: "Keejo Kesari Ke Laal By Mini",
    source: "Keejo Kesari Ke Laal.m4a",
  },
  {
    title: "Shiv Tandav Stotram",
    name: "Shiv Tandav Stotram By Mini",
    source: "Shiv Tandav Stotram.m4a",
  },

  {
    title: "ganpati bappa morya 🙏🙏🚩🚩❤️❤️❤️❤️",
    name: "ganpati bappa morya 🙏🚩❤️ by Mini",
    source: "ganpati bappa morya.m4a",
  },
  {
    title: "Shakti Hai Bhakti Hai",
    name: "Shakti Hai Bhakti Hai By Shobhit Ashana",
    source: "Shakti Hai Bhakti Hai.m4a",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
// © 2024. shobhitDev All rights reserved.
