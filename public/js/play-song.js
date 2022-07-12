const playIcon=document.querySelector('#play-icon');
const listItem=document.querySelector('#music-list');
const audioElement=document.querySelector('#audio-element');
const audioSource=document.querySelector('#audio-source');

function playSongHandler(event){

    const dataset=event.target.parentElement.parentElement.dataset;
    console.log(dataset.id,dataset.media);

    audioSource.setAttribute('src',dataset.media)
    audioElement.style.display="block";

    audioElement.load();
    audioElement.play();

    

}

playIcon.addEventListener('click',playSongHandler);