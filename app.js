function playAudio() {
  var audio = document.getElementById("poemAudio");
  audio.play();
  var button = document.getElementById("playPoem");
  button.style.display = "none";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.classList.contains('portrait-img')) {
      entry.target.classList.toggle('animate-portrait-ground', entry.isIntersecting);
    }
    entry.target.classList.toggle('show', entry.isIntersecting);


  });
});

const visibleElements = document.querySelectorAll('.portrait-img');
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));
visibleElements.forEach((el) => observer.observe(el));

    document.querySelector('.portrait-ground').addEventListener('animationend', function() {
      document.querySelector('.portrait-right').style.animationPlayState = 'running';
      document.querySelector('.portrait-left').style.animationPlayState = 'running';

    });

/*

I am trying to make the girls come in after boy and im tripping out
const element = document.getElementsByClassName(".animate-portrait-ground");
element.addEventListener("animationend", listener, false);

element.className = "slidein";

    if (entry.isIntersecting) {
        const element = document.querySelector(".animate-portrait-ground");
        const element2 = document.querySelector(".portrait-right");
        const element3 = document.querySelector(".portrait-left");
  
        element.addEventListener("animationend", function() {
          element2.style.animationPlayState = "running";
          element3.style.animationPlayState = "running";
        }, {once: true});

    }*/



