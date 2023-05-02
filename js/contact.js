const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
        submitForm();
    }
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.send(formData);
    alert("Your message has been sent. Thank you!");
    form.reset();
}
