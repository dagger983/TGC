document.addEventListener('DOMContentLoaded', function() {
    const animatedElement = document.getElementById('animated-element');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slideInLeft');
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(animatedElement);
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedElement = document.getElementById('animated-element2');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slideInRight');
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(animatedElement);
});

let currentIndex = 1;
const slides = document.querySelectorAll('input[name="controls"]');
const totalSlides = slides.length;

function autoPlay() {
  slides[currentIndex % totalSlides].checked = true;
  currentIndex++;
  setTimeout(autoPlay, 1800);
}

autoPlay();
document.getElementById("currentYear").textContent = new Date().getFullYear();