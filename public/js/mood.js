const moodButtons = document.querySelector('.btn-group');

 function searchMood(event){
    console.log(event.target.value);
    const moodText =event.target.value;
     if(moodText){
        window.location.replace(`/mood/${moodText}`);
     }
 }


moodButtons.addEventListener('click',searchMood);