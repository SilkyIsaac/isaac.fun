
let sun = document.getElementById('sun');
let mountr = document.getElementById('mountr');
let mountl = document.getElementById('mountl');
let rockr = document.getElementById('rockr');
let rockl = document.getElementById('rockl');


let section3 = document.querySelectorAll('.scrub-section')[3]; 

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let sectionTop = section3.offsetTop;
    let sectionHeight = section3.offsetHeight;

    let progress = (scrollY - sectionTop) / sectionHeight;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;
    sun.style.top = -progress * 600 + 'px';
    mountr.style.left = progress * 100 + 'px';
    mountl.style.left = -progress * 100 + 'px';
    rockr.style.left = progress * 500 + 'px';
    rockl.style.left = -progress * 500 + 'px';

});