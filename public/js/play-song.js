const playList=document.querySelector('#playlist-container');
const libraryConainer=document.querySelector('#library-container');

const audioElement=document.querySelector('#audio-element');
const audioSource=document.querySelector('#audio-source');

//Display the audio player and play the selected song from library and playlist

function playSongHandler(event){

    let media_url;

    //Verifies the User clicked the Play Icon from Playlist or Library

    if(event.target.classList.contains('fa-play')){

    if(event.target.classList.contains('fa-play-library')){
          media_url=event.target.parentElement.parentElement.parentElement.dataset.media;

    }
    else{
        media_url=event.target.parentElement.parentElement.dataset.media;
    }    
    
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
libraryConainer.addEventListener('click',playSongHandler);
