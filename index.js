// Navbar toggle
function toggleMenu(){
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// Background slideshow
const home = document.getElementById('home');
const images = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg'
];
let current = 0;

function changeBackground(){
  home.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

// Initial background
changeBackground();
setInterval(changeBackground, 5000);
