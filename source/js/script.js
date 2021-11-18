'use strict';
(function() {
  var contactsForm = document.querySelector('.contacts-form');
  var menuMobOpener = document.querySelector('.page-header__container-menu-toggle');
  var menuMob = document.querySelector('.menu--mob');
  var pageOverlay = document.querySelector('.page-main__overlay');

  contactsForm.addEventListener('submit', (evt)=> {
    evt.preventDefault();
    contactsForm.reset();
  });

  menuMobOpener.addEventListener('click', (evt) => {
    menuMobOpener.classList.toggle('page-header__container-menu-toggle--opened');
    menuMob.classList.toggle('menu--opened');
    pageOverlay.classList.toggle('page-main__overlay--opened');
    document.addEventListener('keydown', onPopupEscKeydown);
  });

  pageOverlay.addEventListener('click', () => {
    menuMobOpener.classList.toggle('page-header__container-menu-toggle--opened');
    menuMob.classList.toggle('menu--opened');
    pageOverlay.classList.toggle('page-main__overlay--opened');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });

  menuMob.addEventListener('click', (evt) => {
    menuMobOpener.classList.toggle('page-header__container-menu-toggle--opened');
    menuMob.classList.toggle('menu--opened');
    pageOverlay.classList.toggle('page-main__overlay--opened');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });

  const isEscEvent = (evt) => {
    return evt.key === 'Escape' || evt.key === 'Esc';
  };

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      menuMobOpener.classList.toggle('page-header__container-menu-toggle--opened');
      menuMob.classList.toggle('menu--opened');
      pageOverlay.classList.toggle('page-main__overlay--opened');
    }
  };
})();
