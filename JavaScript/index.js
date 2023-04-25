window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navheader');
    navbar.classList.toggle('scrolled', window.scrollY > 550);
});

