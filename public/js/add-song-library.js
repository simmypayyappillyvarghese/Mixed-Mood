
const myLibrary=[];

const library=document.querySelector('.song-list-container');

async function addSongToLibrary(event){

     //Verifies the User clicked the Play Icon
      if(event.target.classList.contains('fa-heart')){
       
        const songId=event.target.parentElement.parentElement.dataset.id;
       
        // event.target
        event.target.style.color='#CD5C5C';

        const response=await fetch('/api/user/saveSong',
        {
            method:'POST',
            body:JSON.stringify({songId}),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response);

        if(response.ok){

            console.log("To do -Display the Success Message");
            window.location.replace('/home/save');
        }
        }
        else{
            return;
        }
}

playList.addEventListener('click',addSongToLibrary);