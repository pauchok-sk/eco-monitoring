export default function contactsVideo() {
  const video = document.querySelector(".s-contacts__video");

  if (video) {
    const btnPlay = document.querySelector(".s-contacts__gallery .btn-play");

    btnPlay.addEventListener("click", () => {
      if (video.classList.contains("_played")) {
        handlePause();
      } else {
        handlePlay();
      }
    });
    video.addEventListener("ended", handlePause);

    video.addEventListener("click", () => {
      if (video.classList.contains("_played")) {
        handlePause();
      } else {
        handlePlay();
      }
    });

    function handlePlay() {
      video.classList.add("_played");
      btnPlay.classList.add("_active");
      video.play();
    }
    function handlePause() {
      video.classList.remove("_played");
      btnPlay.classList.remove("_active");
      video.pause();
    }
  }
}
