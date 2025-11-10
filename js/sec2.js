let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let section2 = document.querySelectorAll('.scrub-section')[1]; 

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let sectionTop = section2.offsetTop;
    let sectionHeight = section2.offsetHeight;

  
    let progress = (scrollY - sectionTop) / sectionHeight;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

   
    let move = progress; 

   leaf.style.top = -move * 550 + 'px';
leaf.style.left = move * 550 + 'px';
hill5.style.left = move * 550 + 'px';
hill4.style.left = -move * 550 + 'px';
hill1.style.top = move * 450 + 'px';
});
