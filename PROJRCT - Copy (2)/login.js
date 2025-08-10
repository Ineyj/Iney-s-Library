document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Get users from localStorage database
  function getUsers() {
    const storedUsers = localStorage.getItem('libraryUsers');
    if (storedUsers) {
      return JSON.parse(storedUsers);
    } else {
      // If no users exist, initialize with default users
      const defaultUsers = [
        { name: "Test User", email: "user@example.com", password: "password123" },
        { name: "Admin User", email: "admin@ineyslibrary.com", password: "admin123" },
        { name: "Reader User", email: "reader@library.com", password: "reader123" }
      ];
      localStorage.setItem('libraryUsers', JSON.stringify(defaultUsers));
      return defaultUsers;
    }
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!email || !password) {
      showMessage("Please fill in all fields", "error");
      return;
    }

    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address", "error");
      return;
    }

    // Get current users from database
    const users = getUsers();

    // Check if user exists
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      showMessage(`Welcome back, ${user.name}! Login successful! Redirecting...`, "success");
      
      // Store current user session
      localStorage.setItem('currentUser', JSON.stringify({
        name: user.name,
        email: user.email,
        loginTime: new Date().toISOString()
      }));
      
      // Clear form
      emailInput.value = "";
      passwordInput.value = "";
      
      // Simulate redirect after successful login
      setTimeout(() => {
        window.location.href = "categories.html";
      }, 1500);
    } else {
      showMessage("Account not found. Please check your credentials or sign up.", "error");
      // Clear password field for security
      passwordInput.value = "";
    }
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
    const form = document.getElementById("loginForm");
    form.parentNode.insertBefore(messageDiv, form.nextSibling);

    // Auto-remove message after 5 seconds
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }
});