// Refresh Icon will refresh the list of the songs from the search playslist

const shuffleButton = document.querySelector("#refresh-icon");
const playList1 = document.querySelector("#playlist-container");

shuffleButton.addEventListener("click", (e) => {
  const songArray = [...playList1.querySelectorAll(".song")];
  while (songArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * songArray.length);
    const currentSong = songArray.splice(randomIndex, 1)[0];
    console.log(currentSong)
    playList1.appendChild(currentSong);
  }
});

