
//Adds selected song to the library and refresh homepage with library displaying added song

const library=document.querySelector('.song-list-container');

async function addSongToLibrary(event){

     //Verifies the User clicked the Play Icon
      if(event.target.classList.contains('fa-heart')){
       
        const songId=event.target.parentElement.parentElement.dataset.id;
       
       
            method:'POST',
            body:JSON.stringify({songId}), const response=await fetch('/api/user/saveSong',
        {
            headers: { 'Content-Type': 'application/json' },
        });


        if(response.ok){
            
            console.log("To do -Display the Success Message");
            window.location.replace('/home');
        }
        }
        else{
            return;
        }
}

playList.addEventListener('click',addSongToLibrary);