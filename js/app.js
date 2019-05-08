(() => {
  console.log('ready');

  // ELEMENTS
  const mainView = document.getElementById('view');
  console.log(mainView);

  // FUNCTIONS
  const showAndCreateExerciseSelection = (item) => {
    console.log(item.data());
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

    /*
    div.innerHTML = `
      <h1>${item.data().videoTitle}</h1>
      <p>${item.data().videoDescription}</p>
      <i class="play-video fas fa-video"></i>
      <i class="add-to-workout far fa-plus-square"></i>
      <i class="delete-video far fa-trash-alt"></i>
      `;
    */

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
      event.stopPropagation();
      console.log('DeleteButton Clicked', id);
    })
    
  }

   // GET DATA FROM FIRESTORE
   db.collection('exercise').get().then( (snapshot) => {
    snapshot.docs.forEach( item => {
      showAndCreateExerciseSelection(item);
      console.log(mainView);
      console.log(mainView);
    });
  });

})();