document.getElementById("sendOtpBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the entered email from the input field
    const enteredEmail = document.getElementById("email").value;

    // Get the stored email from localStorage (if any)
    const storedEmail = localStorage.getItem("email");

    // Check if the entered email matches the stored email
    if (enteredEmail === storedEmail) {
        // If email matches, proceed to the OTP page
        alert("OTP sent to your email!");
        window.location.href = "./uotp.html";  // Redirect to the OTP page
    } else {
        // If email doesn't match, show an error message
        alert("Email not found. Please enter a valid email.");
    }
});
