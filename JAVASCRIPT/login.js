document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get stored email and password from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Get values from the login form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate the login credentials
    if (username === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "../spotstar/HTML/main.html";  // Redirect to the next page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
