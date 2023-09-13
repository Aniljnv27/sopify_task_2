// Get the navbar element
const navbar = document.querySelector('.navbar');

// Variable to store the last scroll position
let lastScrollTop = 0;

// Function to handle scroll event
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down, add a class to the navbar to hide it
        navbar.classList.add('scroll-down');
    } else {
        // Scrolling up, remove the class to show the navbar
        navbar.classList.remove('scroll-down');
    }

    lastScrollTop = scrollTop;
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);
