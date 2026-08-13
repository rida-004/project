const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById("address").value.trim();
    const course = document.getElementById("course").value;
    const semester = document.getElementById("semester").value;
    const roll = document.getElementById("roll").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    if (name === "") {
        showMessage("Please enter your full name.");
        return;
    }

    if (email === "") {
        showMessage("Please enter your email address.");
        return;
    }

    if (phone === "") {
        showMessage("Please enter your phone number.");
        return;
    }

    if (dob === "") {
        showMessage("Please select your date of birth.");
        return;
    }

    if (!gender) {
        showMessage("Please select your gender.");
        return;
    }

    if (address === "") {
        showMessage("Please enter your address.");
        return;
    }

    if (course === "") {
        showMessage("Please select your course.");
        return;
    }

    if (semester === "") {
        showMessage("Please select your semester.");
        return;
    }

    if (roll === "") {
        showMessage("Please enter your roll number.");
        return;
    }

    if (password === "") {
        showMessage("Please create a password.");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Passwords do not match.");
        return;
    }

    if (!terms) {
        showMessage("Please agree to the terms and conditions.");
        return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    form.reset();
});

function showMessage(text) {
    message.textContent = text;
    message.style.color = "red";
}

form.addEventListener("reset", function() {
    message.textContent = "";
});