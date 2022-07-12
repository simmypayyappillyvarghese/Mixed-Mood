const playIcon=document.querySelector('#playlist-container');
const listItem=document.querySelector('#music-list');
const audioElement=document.querySelector('#audio-element');
const audioSource=document.querySelector('#audio-source');


function playSongHandler(event){

    const dataset=event.target.parentElement.parentElement.dataset;
   

    audioSource.setAttribute('src',dataset.media)
    audioElement.style.display="block";

    audioElement.load();
    audioElement.play();

}

playIcon.addEventListener('click',playSongHandler);
