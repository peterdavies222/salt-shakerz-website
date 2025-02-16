console.log ("JavaScript is working!");

const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('nav ul');
let navLinksHeight = navLinks.scrollHeight;

window.addEventListener('load', ()=> {
    navLinksHeight = navLinks.scrollHeight;
    //console.log(navLinksHeight);
    navLinks.style.top = `-${navLinksHeight}px`;
});

window.addEventListener('resize', ()=> {
    navLinksHeight = navLinks.scrollHeight;
    //console.log(navLinksHeight);
    if(!navLinks.classList.contains('visible')){
        navLinks.style.top = `-${navLinksHeight}px`;
    };
});

menuButton.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
    //console.log(navLinks.classList);
});

const navLinksElements = document.querySelectorAll('nav ul li');
navLinksElements.forEach(element => {
    element.addEventListener('click', ()=> {
        navLinks.classList.remove('active');
    });
});

/*
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
*/
// navUl.style.top = 0.5*(navHeight + window.innerHeight - ulHeight) + 'px';

/*
setTimeout(() => {
    alert("Please note that this site is currently only functional on desktop screens. If you're using a phone or tablet, it may not run as expected... yet!");
  }, 100)
*/

let spotifySlideRightBtn = document.querySelector('.episodes-slide-right.spotify');
let spotifyGallery = document.querySelector('.spotify-episodes');
let youtubeSlideRightBtn = document.querySelector('.episodes-slide-right.youtube');
let youtubeGallery = document.querySelector('.youtube-episodes');

function checkIfScrollable(content, button){
    if(content && content.scrollWidth > content.clientWidth) {
        button.style.display = 'block';
    };
    if(content && content.scrollWidth <= content.clientWidth) {
        button.style.display = 'none';
    };
};

window.addEventListener('resize', ()=> {
    checkIfScrollable(spotifyGallery, spotifySlideRightBtn);
});

window.addEventListener('load', ()=> {
    checkIfScrollable(spotifyGallery, spotifySlideRightBtn);
});

window.addEventListener('resize', ()=> {
    checkIfScrollable(youtubeGallery, youtubeSlideRightBtn);
});

window.addEventListener('load', ()=> {
    checkIfScrollable(youtubeGallery, youtubeSlideRightBtn);
});

spotifySlideRightBtn.addEventListener('click', ()=> {
    spotifyGallery.scrollLeft += 200;
});

youtubeSlideRightBtn.addEventListener('click', ()=> {
    youtubeGallery.scrollLeft += 200;
});

const highlightsCarousel = document.querySelector('.highlights-carousel');
const highlightsBackBtn = document.querySelector('.highlights-back');
const highlightsNextBtn = document.querySelector('.highlights-next');

let highlightsCarouselItemWidth = document.querySelector('.highlight-item-a').offsetWidth;
window.addEventListener('resize', ()=> {
    highlightsCarouselItemWidth = document.querySelector('.highlight-item-a').offsetWidth;
})

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
    } else if(2*highlightsCarouselItemWidth + 50 < highlightsCarousel.scrollLeft && highlightsCarousel.scrollLeft < 2*highlightsCarouselItemWidth + 70){
        highlightsBackBtn.classList.remove('inactive');
        highlightsNextBtn.classList.add('inactive');
    } else {
        highlightsBackBtn.classList.remove('inactive');
        highlightsNextBtn.classList.remove('inactive');
    };
}, 100);