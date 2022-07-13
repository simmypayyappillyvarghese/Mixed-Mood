//Makes a fetch call to the mood route with mood text value from the radio button

const moodButtons = document.querySelector('.btn-group');

 function searchMood(event){
    
    const moodText =event.target.value;
     if(moodText){
        window.location.replace(`/mood/${moodText}`);
     }
 }


moodButtons.addEventListener('click',searchMood);