document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const asideLeft = document.querySelector('.aside-left');

    hamburger.addEventListener('click', function() {
        asideLeft.classList.toggle('open');
    });
});