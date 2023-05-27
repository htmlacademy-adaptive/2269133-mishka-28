const headerNav = document.querySelector('.header-navigation');
const navButton = document.querySelector('.header-navigation__button');

headerNav.classList.remove('header-navigation--nojs');

navButton.addEventListener('click', function () {
  if (headerNav.classList.contains('header-navigation--closed')) {
    headerNav.classList.remove('header-navigation--closed');
    headerNav.classList.add('header-navigation--opened');
  } else {
    headerNav.classList.add('header-navigation--closed');
    headerNav.classList.remove('header-navigation--opened');
  }
});
