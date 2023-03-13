
'use strict';

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');
var apiKey = 'y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y'
var requestUrl = 'https://api.watchmode.com/v1/genres/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y'
var submit = document.querySelector("#startbtn")
var genreForm = document.getElementById("genre-form")
var genreBox = document.getElementById("genre-box")
var swipeCards = document.querySelector('.swipe')


// selection
var action = document.querySelector(".action")
var anime = document.querySelector(".anime")
var comedy = document.querySelector(".comedy")
var documentary = document.querySelector(".documentary")
var scienceFiction = document.querySelector(".science-fiction")
var horror = document.querySelector(".horror")
var thriller = document.querySelector(".thriller")
var drama = document.querySelector(".drama")
var western = document.querySelector(".western")
var adventure = document.querySelector(".adventure")
var musical = document.querySelector(".musical")

// API title by genre links
var actionOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=1'
var animeOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=33'
var comedyOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=4'
var documentaryOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=6'
var sciFiOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=15'
var horrorOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=11'
var thrillerOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=17'
var dramaOptions = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=7'
var westernOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=19'
var adventureOption = 'https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=2'




// inputs
var actionInput = document.querySelector(".actionMovies")
var animeInput = document.querySelector(".animeMovies")
var comedyInput = document.querySelector(".comedyMovies")
var documentaryInput = document.querySelector(".documentaryMovies")
var sciFiInput = document.querySelector(".sciFiMovies")
var horrorInput = document.querySelector(".horrorMovies")
var thrillerInput = document.querySelector(".thrillerMovies")
var dramaInput = document.querySelector(".dramaMovies")
var westernInput = document.querySelector(".westernMovies")
var adventureInput = document.querySelector(".adventureMovies")
var musicalInput = document.querySelector(".musicalMovies")

// submit button
var button = document.querySelector("#startbtn")
console.log(actionInput)
console.log(animeInput)
console.log(comedyInput)
console.log(documentaryInput)
console.log(sciFiInput)
console.log(horrorInput)
console.log(thrillerInput)
console.log(dramaInput)
console.log(westernInput)
console.log(adventureInput)
console.log(musicalInput)

// action.textContent="action"



// gets genre list https://api.watchmode.com/v1/genres/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y

// gives list of all movies and genres
function getAPI(data) {
  fetch(`https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=${data}`)
    .then(function (response) {
      return response.json()

    }).then(function (data) {
      console.log(data)

    })

}
// function to get titles from selected genre

// function getTitles(){
//   fetch('https://api.watchmode.com/v1/list-titles/?apiKey=y4NfAsZoZ844MeF86OxedvbR4KclKduLv7jUZL1y&genres=')
//   .then(function (response){
//     return response.json()

//   }).then(function(data){
//     console.log(data)

// })
// }

// action.textContent=data[0].name

// anime.textContent=data[5].name

// comedy.textContent=data[7].name

// documentary.textContent=data[9].name

// scienceFiction.textContent=data[26].name

// horror.textContent=data[10].name

// }

// getAPI()

// get options on toggle board-----------------v
// var genOptions = document.createElement("span")


// --------------------------------------^
function initCards(card, index) {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
}

  tinderContainer.classList.add('loaded');


initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);

// button.addEventListener('click',(e) => {
// actionInput.setAttribute('checked') 
// animeInput.setAttribute('checked') 
// comedyInput.setAttribute('checked') 
// documentaryInput.setAttribute('checked') 
// sciFiInput.setAttribute('checked') 
// horrorInput.setAttribute('checked') 
// console.log(actionInput)
// console.log(animeInput)
// console.log(comedyInput)
// console.log(documentaryInput)
// console.log(sciFiInput)
// console.log(horrorInput)


// })

// hide cards on load
function hide(variable){
  variable.style = 'display: none;'
};

// show cards on submit
function show(variable){
  variable.style = '';
}

function startScreen(){

hide(swipeCards)
hide(genreBox)
}

// function startSwipe(){
//   show(swipeCards)
// }

// moves from form to page with cards
function handleFormSubmit(event) {
  event.preventDefault()
  console.log(event.target.action.split('='))
  var genre = event.target.action.split('=')[1]
  getAPI(genre)
  // window.location.href='./cards.html'
  
}

// setup local storage for 'loved' movies
localStorage.setItem('love',love)
console.log(localStorage.getItem('love'))

genreForm.addEventListener('submit',handleFormSubmit)
genreBox.addEventListener('submit',startScreen)
swipeCards.addEventListener('submit',show)
