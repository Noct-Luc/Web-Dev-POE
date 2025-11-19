const form = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const feedbackMessage = document.createElement('p');  // To show feedback on submission

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form submission
    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumValue = phoneNum.value.trim();

    // Reset feedback
    if (feedbackMessage) {
        feedbackMessage.remove();
    }

    // Check if inputs are valid
    let formValid = true;

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be blank');
        formValid = false;
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be blank');
        formValid = false;
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        formValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        formValid = false;
    } else {
        setSuccessFor(email);
    }

    if (phoneNumValue === '') {
        setErrorFor(phoneNum, 'Phone Number cannot be blank');
        formValid = false;
    } else {
        setSuccessFor(phoneNum);
    }

    // If all inputs are valid
    if (formValid) {
        // Show success feedback
        displayFeedbackMessage("Thank you for contacting Cake4Days! We will get back to you shortly.", "success");
        
        // Reset the form after a brief delay
        setTimeout(() => {
            form.reset();  // Reset the form
            feedbackMessage.remove(); // Remove the feedback message
        }, 2000); // Wait 2 seconds before resetting
    }
}

function displayFeedbackMessage(message, type) {
    feedbackMessage.textContent = message;
    feedbackMessage.style.textAlign = 'center';
    feedbackMessage.style.fontSize = '1.2em';
    feedbackMessage.style.fontWeight = 'bold';
    feedbackMessage.style.color = type === 'success' ? 'green' : 'red';

    // Add the feedback message to the form
    form.appendChild(feedbackMessage);
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

