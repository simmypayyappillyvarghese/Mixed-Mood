const refreshHandler = async (event) => {
    const temp = parsedSongList
    for(let i = temp.length -1; i>0;i--) {
      let j=Math.floor(Math.random()* (i + 1))
      [temp[i], temp[j]] = [temp[j], temp[i]];}
    parsedSongList = temp 
    // document.location.reload()
}
const refreshElement= document.querySelector('#refresh-icon')
refreshElement.addEventListener("click",)


