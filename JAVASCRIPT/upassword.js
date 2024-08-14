


document.getElementById("setPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the input fields
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store the new password in localStorage (or sessionStorage)
    localStorage.setItem("password", newPassword);

    // Notify the user
    alert("Password updated successfully!");

    // Redirect to another page (e.g., the login page)
    window.location.href = "../HTML/update.html";
});




