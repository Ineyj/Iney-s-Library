document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  // Initialize users array from localStorage or use default users
  function initializeUsers() {
    const storedUsers = localStorage.getItem('libraryUsers');
    if (storedUsers) {
      return JSON.parse(storedUsers);
    } else {
      // Default users for first time setup
      const defaultUsers = [
        { name: "Test User", email: "user@example.com", password: "password123" },
        { name: "Admin User", email: "admin@ineyslibrary.com", password: "admin123" },
        { name: "Reader User", email: "reader@library.com", password: "reader123" }
      ];
      localStorage.setItem('libraryUsers', JSON.stringify(defaultUsers));
      return defaultUsers;
    }
  }

  let users = initializeUsers();

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      showMessage("Please fill in all fields", "error");
      return;
    }

    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    if (password.length < 6) {
      showMessage("Password must be at least 6 characters long", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match", "error");
      confirmPasswordInput.value = "";
      return;
    }

    // Check if email already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      showMessage("An account with this email already exists. Please login instead.", "error");
      return;
    }

    // Create new user account
    const newUser = { name, email, password };
    users.push(newUser);
    
    // Save updated users array to localStorage
    localStorage.setItem('libraryUsers', JSON.stringify(users));

    // Show success message
    showMessage("Account created successfully! Redirecting to login...", "success");
    
    // Clear form
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";

    // Redirect to login page after successful signup
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });

  function validateEmail(email) {
    // Basic email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector(".message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create new message element
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      text-align: center;
      font-weight: bold;
      ${type === 'error' ? 'background-color: #ffebee; color: #c62828; border: 1px solid #ffcdd2;' : 'background-color: #e8f5e8; color: #2e7d32; border: 1px solid #c8e6c9;'}
    `;

    // Insert message after the form
    const form = document.getElementById("signupForm");
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }
});
