const audioPlayer = document.getElementById('audioPlayer');
const play = document.getElementsByClassName('play');
const pause = document.getElementsByClassName('pause');
const next = document.getElementsByClassName('next');

play.addEventListener('click', function() {
  audioPlayer.play();
});

pause.addEventListener('click', function() {
  audioPlayer.pause();
});

next.addEventListener('click', function() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});