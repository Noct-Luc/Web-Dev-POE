// Enquiry Form Submission
function handleEnquirySubmission() {
    const enquiryMessage = document.querySelector("#enquiryMessage").value;
    const enquiryType = document.querySelector("#enquiryType").value;

    // Validate if the enquiry message is empty
    if (enquiryMessage.trim() === '') {
        alert("Please write a message before submitting.");
        return false;
    }

    // Validate if the user selected an enquiry type
    if (enquiryType === '') {
        alert("Please select an enquiry type (Product, Service, Volunteer, Sponsor).");
        return false;
    }

    // Process the enquiry based on type
    let responseMessage = "";

    switch (enquiryType) {
        case 'product':
            responseMessage = "Thank you for your product enquiry. We will provide pricing and availability soon.";
            break;
        case 'service':
            responseMessage = "Thank you for your service enquiry. We will check availability and get back to you.";
            break;
        case 'volunteer':
            responseMessage = "Thank you for your interest in volunteering. We will send you more details shortly.";
            break;
        case 'sponsor':
            responseMessage = "Thank you for your interest in sponsoring. We will contact you with sponsorship opportunities.";
            break;
        default:
            responseMessage = "Thank you for your enquiry. We will get back to you soon!";
    }

    // Display the appropriate response
    alert(responseMessage);

    // Reset the form fields
    document.querySelector("#enquiryMessage").value = '';  // Clear the message field
    document.querySelector("#enquiryType").value = '';     // Reset the dropdown to default (empty)

    return false; // Prevent form submission
}

// Add event listeners to forms
window.addEventListener('DOMContentLoaded', (event) => {
    // Enquiry form validation and submission
    const enquiryButton = document.querySelector("#button");
    enquiryButton.addEventListener("click", function (e) {
        e.preventDefault();
        handleEnquirySubmission();
    });
});
