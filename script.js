const menuIcon = document.querySelector('i');
const navList = document.querySelectorAll('.nav h4');
const signInElement = document.querySelector('.nav-2 button');


menuIcon.addEventListener('click', ()=> {
  navList.forEach((list)=> {
    list.style.display = 'block';
    signInElement.style.display = 'block';

    list.style.fontSize = '3.2vw';
    menuIcon.style.display = 'none';
  })
})