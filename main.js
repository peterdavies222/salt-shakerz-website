console.log ("JavaScript is working!");

const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('nav ul');

menuButton.addEventListener('click', function(){
    navLinks.classList.toggle('visible');
});

let navLinksElements = document.querySelectorAll('nav ul li');
navLinksElements.forEach(function(e){
    e.addEventListener('click', function(){
        navLinks.classList.remove('visible');
    });
});

let nav = document.querySelector('nav');
let navHeight = nav.offsetHeight;
let navUl = document.querySelector('nav ul');
let ulHeight = navUl.offsetHeight;

navUl.style.top = 0.5*(navHeight + window.innerHeight - ulHeight) + 'px';

setTimeout(() => {
    alert("Please note that this site is currently only functional on desktop screens. If you're using a phone or tablet, it may not run as expected... yet!");
  }, 100)


const highlightsCarousel = document.querySelector('.highlights-carousel');
const highlightsBackBtn = document.querySelector('.highlights-back');
const highlightsNextBtn = document.querySelector('.highlights-next');

let highlightsCarouselItemWidth = document.querySelector('.highlight-item-a').offsetWidth;

highlightsBackBtn.addEventListener('click', ()=> {
    highlightsCarousel.scrollLeft -= (highlightsCarouselItemWidth + 30);
});

highlightsNextBtn.addEventListener('click', ()=> {
    highlightsCarousel.scrollLeft += (highlightsCarouselItemWidth + 30);
});

setInterval(() => {
    if(highlightsCarousel.scrollLeft == 0){
        highlightsBackBtn.classList.add('inactive');
        highlightsNextBtn.classList.remove('inactive');
    } else if(highlightsCarousel.scrollLeft == highlightsCarouselItemWidth + 30){
        highlightsBackBtn.classList.remove('inactive');
        highlightsNextBtn.classList.add('inactive');
    } else {
        highlightsBackBtn.classList.remove('inactive');
        highlightsNextBtn.classList.remove('inactive');
    };
}, 100);