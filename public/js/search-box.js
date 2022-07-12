
const body = document.querySelector('body');
const searchElement = document.querySelector('[data-search]');
const searchInputElement = searchElement.querySelector('[data-search-input]');
const searchControlElement = searchElement.querySelector('[data-search-control]');
const searchOpenClass = 'is-search-open';

/**
 * Helper to close the search if user clicks elsewhere.
 */
body.addEventListener('click', (event) => {
  if (event.target !== searchInputElement && event.target !== searchControlElement) {
    searchElement.classList.remove(searchOpenClass);
  }
});

searchInputElement.addEventListener('click', searchInputEventHandler);
searchInputElement.addEventListener('focus', searchInputEventHandler);

function searchInputEventHandler() {
  searchElement.classList.add(searchOpenClass);
}

searchControlElement.addEventListener('click', () => {
  searchInputElement.value = '';
  searchInputElement.focus();
});



async function searchHandler(){


    console.log(searchInputElement.value);
   

    const searchText=searchInputElement.value;
    if(searchText){

      window.location.replace(`/search/${searchText}`);
    }

    //TO DO else handler
}


searchInputElement.addEventListener('change',searchHandler);
