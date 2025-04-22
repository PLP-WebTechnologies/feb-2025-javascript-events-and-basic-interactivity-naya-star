// Form Validation and Event Handling
const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;

    // Basic Form Validation
    if (firstName === '' || surname === '' || email === '' || password === '' || confirmPassword === '' || !gender || dob === '' || course === '') {
        alert("Please fill in all the fields.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Registration successful!");
});

// Image Slideshow (Background) Logic
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

setInterval(function() {
    plusSlides(1);
}, 5000);  // Slide changes every 3 seconds

// Button Hover Effects
submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = 'hwb(335 6% 11%)';
});

submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#045a49';
});
// Accordion functionality
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Toggle between adding and removing "active" class
        this.classList.toggle("active");
        // Toggle between hiding and showing the active panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}