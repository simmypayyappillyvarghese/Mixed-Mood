

const body = document.querySelector('body');
const searchElement = document.querySelector('[data-search]');
const searchInputElement = searchElement.querySelector('[data-search-input]');
const searchControlElement = searchElement.querySelector('[data-search-control]');
const searchOpenClass = 'is-search-open';

/**
 * Search Box JS Code for animation
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


//If User enter a text and search for it will make a fetch call to search route

async function searchHandler(){

    const searchText=searchInputElement.value;
    if(searchText){
      window.location.replace(`/search/${searchText}`);
    }

}

searchInputElement.addEventListener('change',searchHandler);
