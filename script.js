//asdasdadasdasd





















// Typing Animation-------------------------------
var typed = new Typed(".text", {
    strings: ["Software Engineer Intern"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});






















// Scroll to top Animation----------------------------
const toTop = document.querySelector(".top");

// Function to scroll smoothly to the top
function scrollToTop(duration) {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    const startTime = performance.now();

    function animation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = ease(progress);
        window.scrollTo(0, startPosition + distance * easeProgress);
        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}

// Add click event listener to the "to top" button
toTop.addEventListener("click", () => {
    const duration = 1000; // Duration of the scroll animation in milliseconds
    scrollToTop(duration);
});

// Show/hide "to top" button based on scroll position
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});





















// Smooth scrolling function---------------------------
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Include current scroll position
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Smooth scroll to target section-------------------------
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        var duration = 1000; // Adjust scroll duration as needed
        smoothScroll(target, duration);
    });
});







    // SCROLL SPY----------------------------------------


    window.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar a');
    
        function changeActiveLink() {
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 50; // Adjusted offset
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    currentSectionId = section.getAttribute('id');
                }
            });
    
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href').substring(1); // Remove the leading '#'
                if (linkHref === currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    
        window.addEventListener('scroll', changeActiveLink);
    });
    
    
    


//-----------------------------Fade In Seminars

// Function to check if an element is in viewport

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log('Top:', rect.top, 'Bottom:', rect.bottom, 'Window Height:', window.innerHeight);
    return (
        (rect.top >= 0 && rect.top <= window.innerHeight) ||
        (rect.bottom >= 0 && rect.bottom <= window.innerHeight)
    );
}

// Function to handle scroll event
function handleScroll() {
    const timelineSection = document.getElementById('tryTimelineseminars');
    console.log('Handling scroll...');
    if (isInViewport(timelineSection)) {
        console.log('Timeline section is in viewport');
        timelineSection.classList.add('visible');
        // Remove the scroll event listener once the timeline section is visible
        document.removeEventListener('scroll', handleScroll);
    }
}

// Add event listener for scroll event
document.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();












//------------------------------------remove highlight when scrolling

window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    function changeActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50; // Adjusted offset
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', changeActiveLink);
});











//----------------------------SCROLL INTO FADE IN SLIDE UP------------------------------

// Function to handle scroll event for About section animations
function handleAboutAnimation() {
    const aboutSection = document.getElementById('About');
    if (aboutSection && !aboutSection.classList.contains('animated') && isInViewport(aboutSection)) {
        aboutSection.classList.add('animated');
        aboutSection.querySelector('.about-img').classList.add('slide-right'); // Change class to slide-right
        aboutSection.querySelector('.about-text').classList.add('fade-in');
        // Remove the scroll event listener once the animations are applied
        document.removeEventListener('scroll', handleAboutAnimation);
    }
}

// Add event listener for scroll event to trigger About section animations
document.addEventListener('scroll', handleAboutAnimation);












//----------------------------SKILLS ANIMATION------------------------------


