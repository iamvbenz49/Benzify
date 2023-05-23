const audioPlayer = document.getElementById('audioPlayer');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const next = document.getElementById('next');

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