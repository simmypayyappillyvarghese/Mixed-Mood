// const refreshHandler = async (event) => {
//     const temp = parsedSongList
//     for(let i = temp.length -1; i>0;i--) {
//       let j=Math.floor(Math.random()* (i + 1))
//       [temp[i], temp[j]] = [temp[j], temp[i]];}
//     parsedSongList = temp 
    
// }
// const refreshElement= document.querySelector('#refresh-icon')
// refreshElement.addEventListener("click",)

const shuffleButton = document.querySelector("#refresh-icon");
const playList = document.querySelector("#playlist-container");

shuffleButton.addEventListener("click", (e) => {
  const songArray = [...playList.querySelectorAll(".song")];
  while (songArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * songArray.length);
    const currentSong = songArray.splice(randomIndex, 1)[0];
    playList.appendChild(currentSong);
  }
});
