document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector("header");

  if (!headerElement) {
    console.error("Header placeholder not found.");
    return;
  }

  console.log("Attempting to load header from fetch...");

  fetch("../partials/header.html")
    .then(response => {
      console.log("Response status: ", response.status);
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      console.log("HTML fetched successfully:", html);
      headerElement.innerHTML = html;
      console.log("Header rendered in DOM.");
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });
});


  /* FOR NAVIGATING */

  document.addEventListener("DOMContentLoaded", () => {
  
    const signupLink = document.querySelector(".signup-link");
    const forgotPasswordLink = document.querySelector(".forgot-password-link");
    const guestLink = document.querySelector(".guest-link");
  
    // Handle Login Button

  
    // Intercept link clicks
    if (signupLink) {
      signupLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Navigating to Sign Up...");
        window.location.href = "/views/signup/signup.html";
      });
    }
  
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Navigating to Forgot Password...");
        window.location.href = "/views/forgotpassword/fg.html";
      });
    }
  
    if (guestLink) {
      guestLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Navigating to Guest...");
        window.location.href = "/views/guest/guest.html";
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login-button");
  
    // Handle Login Logic
    if (loginButton) {
      loginButton.addEventListener("click", () => {
        const accountNumber = document.querySelector('.input-box input[type="text"]').value.trim();
        const password = document.querySelector('.input-box input[type="password"]').value.trim();
  
        if (!accountNumber || !password) {
          alert("Please fill in both fields.");
          return;
        }
  
        console.log("Attempting login with:");
        console.log("Account Number:", accountNumber);
        console.log("Password:", password);
  
        // Simulate a login check (replace this with actual server logic)
        if (accountNumber === "3" && password === "3") {
          alert("Login successful! Redirecting...");
          window.location.href = "/views/login/login.html"; // Redirect to dashboard after successful login
        } else {
          alert("Invalid credentials. Please try again.");
        }
      });
    }
  });
  