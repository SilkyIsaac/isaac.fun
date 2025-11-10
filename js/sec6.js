// Select images for Dani Philips section
let back1 = document.getElementById('back1');
let back3 = document.getElementById('back3');
let back5 = document.getElementById('back5');

// Select the section — adjust index if necessary
let section5 = document.querySelectorAll('.scrub-section')[5]; // 5th section in order

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let sectionTop = section5.offsetTop;
    let sectionHeight = section5.offsetHeight;

    // Calculate progress of scroll through this section (0–1)
    let progress = (scrollY - sectionTop) / sectionHeight;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    // Parallax-style movement — tweak values for your desired depth
   
    back1.style.left = progress * -200 + 'px'; 
    back3.style.top = -progress * 500 + 'px';
    back3.style.left = -progress * 300 + 'px';
    back5.style.left = progress * 300 + 'px';
});
