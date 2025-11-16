// Initialize variables
let currentSlide = 1;
const totalSlides = 8;

// Get DOM elements
const slides = document.querySelectorAll('.slide');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
const currentSlideElement = document.getElementById('current-slide');
const themeToggle = document.getElementById('theme-toggle-checkbox');

// Theme Management
function initTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Theme toggle event listener
themeToggle.addEventListener('change', toggleTheme);

// Slide Navigation
function updateSlide() {
    // Remove all active/prev/next classes
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');

        if (index + 1 === currentSlide) {
            slide.classList.add('active');
        } else if (index + 1 < currentSlide) {
            slide.classList.add('prev');
        } else {
            slide.classList.add('next');
        }
    });

    // Update slide counter
    currentSlideElement.textContent = currentSlide;

    // Update arrow visibility
    if (currentSlide === 1) {
        prevArrow.classList.add('hidden');
    } else {
        prevArrow.classList.remove('hidden');
    }

    if (currentSlide === totalSlides) {
        nextArrow.classList.add('hidden');
    } else {
        nextArrow.classList.remove('hidden');
    }
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlide();
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlide();
    }
}

function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        currentSlide = slideNumber;
        updateSlide();
    }
}

// Event Listeners for Navigation
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'PageUp':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides);
            break;
    }
});

// Touch/Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            prevSlide();
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateSlide();
});
