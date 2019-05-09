/**************************************************
      HANDLE MODAL AND NAVIGATION
**************************************************/ 
const modalWindow = document.getElementById('modal');


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
    if (item.getAttribute('id') === 'home') {
      location.href = "index.html";
    } else if (item.getAttribute('id') === 'other') {
      location.href = "about.html";
    }
      
  })
});