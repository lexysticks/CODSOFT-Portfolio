const mybtn = document.getElementById('mybtn');
const nav_container = document.getElementById('nav_container');
const navlinkEls = document.querySelector('nav__link')
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.container');
let currentIndex = 0;
let autoPlayInterval;

// Function to update the slide position
function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to go to the next slide
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop through slides
  updateSlidePosition();
}

// Start autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(goToNextSlide, 3000); // Slide every 3 seconds
}

// Stop autoplay
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Pause autoplay on hover and resume on mouse leave
slides.forEach((slide) => {
  slide.addEventListener('mouseenter', stopAutoPlay);
  slide.addEventListener('mouseleave', startAutoPlay);
});

// Initialize slider
startAutoPlay();





mybtn.addEventListener('click',event =>{
    nav_container.classList.toggle('hidden')
 }

)
navlinkEls.array.forEach(element => {
   navlinkEls.addEventListener('click',event=>{
    navlinkEls.querySelector('.active')?.classList.remove('active');
    navlinkEls.classList.add('active');
   })

    
})