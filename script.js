// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Function to show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    const small = formGroup.querySelector('small');
    if (small) {
        small.textContent = message;
    } else {
        const errorText = document.createElement('small');
        errorText.style.color = 'red';
        errorText.textContent = message;
        formGroup.appendChild(errorText);
    }
}

// Function to clear error message
function clearError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const small = formGroup.querySelector('small');
    if (small) {
        formGroup.removeChild(small);
    }
}

// Validate Email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Validate Form
function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required.');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Email is not valid.');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required.');
        isValid = false;
    } else {
        clearError(messageInput);
    }

    return isValid;
}

// Form Submit Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
        alert('Message sent successfully!');
        form.reset();
    }
});
