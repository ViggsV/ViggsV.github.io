document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var asideLeft = document.querySelector('.aside-left');

    hamburger.addEventListener('click', function () {
        asideLeft.classList.toggle('open');
    });
});
