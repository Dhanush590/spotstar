
document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form inputs
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate phone number (must start with 6-9 and be 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert("Invalid phone number! It must start with a digit between 6 and 9, and have exactly 10 digits.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address!");
        return;
    }

    // Validate password strength
    let upper = 0, lower = 0, num = 0, special = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') upper++;
        else if (char >= 'a' && char <= 'z') lower++;
        else if (char >= '0' && char <= '9') num++;
        else special++;
    }

    if (password.length < 8 || password.length > 16 || upper < 1 || lower < 1 || num < 1 || special < 1) {
        alert("Your password is weak! It must be between 8-16 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store the collected data (in localStorage for simplicity)
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Proceed to the OTP verification page
    window.location.href = "./otp.html";
});

