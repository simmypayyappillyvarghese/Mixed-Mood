
const myLibrary=[];

async function addSongToLibrary(event){

     //Verifies the User clicked the Play Icon
      if(event.target.classList.contains('fa-heart')){
       
        const songId=event.target.parentElement.parentElement.dataset.id;
    
        const response=await fetch('/api/user/saveSong',
        {
            method:'POST',
            body:JSON.stringify({songId}),
            method: 'POST',
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