(() => {

  /**************************************************
      1. GLOBAL VARIABLES
  **************************************************/
      
  // GLOABAL VARIABLES
  let view = 'home';


  /**************************************************
      2. GLOBAL ELEMENTS
  **************************************************/

  // GLOBAL ELEMENTS
  const mainView = document.getElementById('view');
  const modalWindow = document.getElementById('modal');

  /**************************************************
      3. HANDLE CONDITIONAL RENDERING
  **************************************************/

  switch (view) {
    case 'home': {
      // GET DATA FROM FIRESTORE
      db.collection('exercise').get().then( (snapshot) => {
        snapshot.docs.forEach( item => {
        showAndCreateExerciseSelection(item);
        });
      });
      console.log('home');
      break;
    }

    case 'other': {
      console.log('other');
    }

    default:
      return;
  }
  /**************************************************
      4. HANDLE MODAL AND NAVIGATION
  **************************************************/ 

  const showMenu = document.getElementById('show-menu');
  showMenu.addEventListener('click', () => {
    modalWindow.style.display = 'block';
  })

  modalWindow.addEventListener('click', () => {
    modalWindow.style.display = 'none';

  });

  const menuItem = document.querySelectorAll('.main-nav__item');
  menuItem.forEach( item => {
    item.addEventListener('click', () => {
      if (item)
      console.log(item, 'clicked');
    })
  });
  /**************************************************
      4. GLOBAL FUNCTIONS
  **************************************************/

  // HANDLES LIST VIEW RENDER FROM DATABASE
  const showAndCreateExerciseSelection = (item) => {
    const div = document.createElement('div');

    div.setAttribute('data-id', item.id);
    div.classList.add('exercise-card-view');

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

    div.appendChild(videoTitle);
    div.appendChild(videoDescription);
    div.appendChild(playVideo);
    div.appendChild(addToWorkout);
    div.appendChild(deleteVideo);
    mainView.appendChild(div);
    
  
    playVideo.addEventListener('click', (event) => {
      event.stopPropagation();
      let id = event.target.parentElement.getAttribute('data-id');
      console.log('Play Video Button Clicked', id);
    })


    addToWorkout.addEventListener('click', (event) => {
      event.stopPropagation();
      let id = event.target.parentElement.getAttribute('data-id');
      console.log('Learn More Button Clicked', id);
    })
    

    deleteVideo.addEventListener('click', (event) => {
      let id = event.target.parentElement.getAttribute('data-id');
      mainView.removeChild(div);
      event.stopPropagation();
      console.log('DeleteButton Clicked', id);
    })
    
  }

  

})();