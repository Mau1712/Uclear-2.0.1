window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navheader');
    navbar.classList.toggle('scrolled', window.scrollY > 550);
});



const menuMobile = document.querySelector('.menuMobile');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
      menuMobile.classList.add('menuMobile-scroll');
    } else {
      menuMobile.classList.remove('menuMobile-scroll');
    }
  });