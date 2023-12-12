
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    var isValid = true;

    document.getElementById("nameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("messageError").textContent = '';

    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message.length < 20) {
        document.getElementById("messageError").textContent = "Message content must be at least 20 characters long.";
        isValid = false;
    }

    return isValid;
}
