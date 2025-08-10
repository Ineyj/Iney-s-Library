// script.js
document.getElementById('resetForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const newPassword = document.getElementById('newPassword').value;

  // Save to localStorage (for demo purposes only)
  localStorage.setItem(email, newPassword);

  document.getElementById('message').textContent = 'Password reset successfully!';
  this.reset();
});