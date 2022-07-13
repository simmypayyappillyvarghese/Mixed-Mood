const moodButtons = document.querySelector('.btn-group');
// const happyButton = document.querySelector('#happy');
// const loveButton = document.querySelector('#love');
// const pumpedupButton = document.querySelector('#pumped-up');
// const sadButton = document.querySelector('#sad');

 function searchMood(event){
    console.log(event.target.value);
    const moodText =event.target.value;
     if(moodText){
        window.location.replace(`/mood/${moodText}`);
     }
 }

// angerButton.addEventListener('click',searchMood);
// happyButton.addEventListener('click',searchMood);
// loveButton.addEventListener('click',searchMood);
// pumpedupButton.addEventListener('click',searchMood);
// sadButton.addEventListener('click',searchMood);
moodButtons.addEventListener('click',searchMood);