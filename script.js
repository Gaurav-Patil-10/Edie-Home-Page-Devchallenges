// show menu

const navMenu = document.getElementById('header-menu'),
    navToggle = document.getElementById('menu-icon'),
    navClose = document.getElementById('close-icon');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


//remove when clicked

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
//   const navMenu = document.getElementById('header-menu');

  // when we click the link , we remove show -menu
  navMenu.classList.remove('show-menu')
  console.log('link clicked');
}


navLink.forEach(n => n.addEventListener('click', linkAction))
