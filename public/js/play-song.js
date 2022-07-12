const playList=document.querySelector('#playlist-container');
// const listItem=document.querySelector('#music-list');
const audioElement=document.querySelector('#audio-element');
const audioSource=document.querySelector('#audio-source');


function playSongHandler(event){

    //Verifies the User clicked the Play Icon
    if(event.target.classList.contains('fa-play')){
    const media_url=event.target.parentElement.parentElement.dataset.media;

    audioSource.setAttribute('src',media_url)
    audioElement.style.display="block";

    audioElement.load();
    audioElement.play();

    }
    else{
        return;
    }
}

playList.addEventListener('click',playSongHandler);
