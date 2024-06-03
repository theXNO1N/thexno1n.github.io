
const about = document.getElementById('about');
const fullText = document.getElementById('fullText');
const smallText = document.getElementById('smallText');

const music = document.getElementById("music");
const cardMusic = document.getElementById("cardMusic");

const albumPhoto = document.getElementById('albumPhoto')
const album = document.getElementById('album')
const musicName = document.getElementById('musicName')
const currentMusic = document.getElementById('currentMusic')

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");

const videoPlayer = document.getElementById('videoPlayer')
const video = document.getElementById('video')
const body = document.getElementById('body')

window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('change', window.scrollY > 10);
});

function moreText() {
  smallText.style.display = 'none'
  fullText.style.display = 'block'
  about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.8) 0%, rgb(12, 12, 12) 90%)'
}
function lessText() {
  smallText.style.display = 'block'
  fullText.style.display = 'none'
  about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.5) 20%, rgb(12, 12, 12) 90%)'
}

// PLAYER DE MÚSICA
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
  music.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});


music.addEventListener("timeupdate", () => {
  const progress = (music.currentTime / music.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

music.addEventListener("timeupdate", () => {
  const progress = (music.currentTime / music.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

progressContainer.addEventListener("click", (e) => {
  const progress = (e.offsetX / progressContainer.offsetWidth) * music.duration;
  music.currentTime = progress;
});

// MUDAR INFORMAÇÕES DA MÚSICA

function music1(){
  cardMusic.style.display = 'flex'
  musicName.innerHTML = 'breathe slow'
  albumPhoto.src = "./img/breathe slow icon.jpg"
  album.innerHTML = 'breathe slow <br> (w meltycanon)'
  music.src = "./src/breathe slow (w meltycanon).mp3"
  music.play() 
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}
function music2(){
  cardMusic.style.display = 'Balance'
  musicName.innerHTML = 'alireza jj <span class="(Ft Mehrad Hidden & Sohrab Mj & Khalse)">Remix</span>'
  album.innerHTML = 'llb'
  albumPhoto.src = "./img/balanc.jpg"
  music.src = "./src/Alireza JJ - Balance (Ft Mehrad Hidden & Sohrab Mj & Khalse) (320).mp3.mp3"
  music.play()  
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}
function music3(){
  cardMusic.style.display = 'Westside'
  musicName.innerHTML = 'Softcore'
  albumPhoto.src = "./img/westside.jpg"
  album.innerHTML = '(ft Arash Saretan & Parsa1) <br>  8 - Arta'
  music.src = "./src/08.Arta & Arash Saretan & Parsa1 - Westside (320).mp3"
  music.play() 
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}
function music4(){
  cardMusic.style.display = 'ghors 2 '
  musicName.innerHTML = 'Hiphopologist'
  album.innerHTML = 'album ghors <br> ft poobon'
  albumPhoto.src = "./img/ghors.jpg"
  music.src = "./src/GHORS2.mp3"
  music.play() 
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

//MUDAR VIDEO MODAL

function exitModal(){
  videoPlayer.style.display = 'none'
  body.style.overflow = 'auto'
  video.src = '##'
}


function video1(){

  window.scrollTo(0, document.body.scrollHeight);

  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = 'https://www.youtube.com/embed/GCdwKhTtNNw'
}
function video2(){
  window.scrollTo(0, document.body.scrollHeight);
  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = 'https://www.youtube.com/embed/_lMlsPQJs6U'
}
function video3(){
  window.scrollTo(0, document.body.scrollHeight);
  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = 'https://www.youtube.com/embed/8giBPUpzKRw'
}
function video4(){
  window.scrollTo(0, document.body.scrollHeight);
  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = 'https://www.youtube.com/embed/Jir-WItz1OI'
}

