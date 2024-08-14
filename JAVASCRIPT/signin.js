document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form inputs
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store the collected data (in localStorage for simplicity)
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Proceed to the OTP verification page
    window.location.href = "./otp.html";
});
