(() => {

/**************************************************
    1. GLOBAL VARIABLES
**************************************************/


/**************************************************
    2. GLOBAL ELEMENTS
**************************************************/

// GLOBAL ELEMENTS
const mainView = document.getElementById('view');

/**************************************************
    3. GET DATA FROM FIRESTORE
**************************************************/

db.collection('exercise').get().then( (snapshot) => {
  snapshot.docs.forEach( item => {
  showAndCreateExerciseSelection(item);
  });
});


/**************************************************
    4. FUNCTIONS
**************************************************/

// CONVERT YOUTUBE LINK TO VIDEO ID
function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
      return match[2];
  } else {
      return 'error';
  }
}

// RENDER LIST FROM DATABASE 
const showAndCreateExerciseSelection = (item) => {

const div = document.createElement('div');

div.setAttribute('data-id', item.id);
div.classList.add('exercise-card-view');

const headerContainer = document.createElement('header');
headerContainer.classList.add('item-header', 'flex-row', 'space-between-row');

const titleContainer = document.createElement('div');
titleContainer.classList.add('title-container');

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

const videoTitle = document.createElement('h1');
videoTitle.textContent = item.data().videoTitle;

const videoDescription = document.createElement('p');
videoDescription.textContent = item.data().videoDescription;

const addToWorkout = document.createElement('i');
addToWorkout.classList.add('add-to-workout', 'far', 'fa-plus-square');

const playVideo = document.createElement('i');
playVideo.classList.add('play-video', 'fas', 'fa-video');

const deleteVideo = document.createElement('i');
deleteVideo.classList.add('delete-video', 'far', 'fa-trash-alt');

const videoDiv = document.createElement('div');
  videoDiv.classList.add('video-wrapper', 'hide');

  videoDiv.innerHTML = `
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/${getId(item.data().videoUrl)}" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;

titleContainer.appendChild(videoTitle);

buttonContainer.appendChild(playVideo);
buttonContainer.appendChild(addToWorkout);
buttonContainer.appendChild(deleteVideo);

headerContainer.appendChild(titleContainer);
headerContainer.appendChild(buttonContainer);

div.appendChild(videoDiv);
div.appendChild(headerContainer);
div.appendChild(videoDescription);




mainView.appendChild(div);



playVideo.addEventListener('click', (event) => {
  event.stopPropagation(); // need to learn more
  videoDiv.classList.toggle('hide');
  let id = div.getAttribute('data-id');
  console.log('Play Video Button Clicked', id);
})


addToWorkout.addEventListener('click', (event) => {
  event.stopPropagation();
  let id = div.getAttribute('data-id');
  console.log('Learn More Button Clicked', id);
})


deleteVideo.addEventListener('click', (event) => {
  let id = div.getAttribute('data-id');
  mainView.removeChild(div);
  event.stopPropagation();
  console.log('DeleteButton Clicked', id);
})


}



})();