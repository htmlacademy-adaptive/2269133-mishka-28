let headerNavigation = document.querySelector('.header-navigation__wrapper');
let navButton = document.querySelector('.header-navigation__button');

navMain.classList.remove('header-navigation__wrapper--nojs');

navToggle.addEventListener('click', function () {
  if (headerNavigation.classList.contains('header-navigation__wrapper--closed')) {
    headerNavigation.classList.remove('header-navigation__wrapper--closed');
    headerNavigation.classList.add('header-navigation__wrapper--open');
  } else {
    headerNavigation.classList.add('header-navigation__wrapper--closed');
    headerNavigation.classList.remove('header-navigation__wrapper--open');
  }
});
