const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerText = "Pausar música";
  } else {
    audioPlayer.pause();
    playButton.innerText = "Reproducir música";
  }
});
