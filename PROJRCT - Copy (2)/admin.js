document.addEventListener("DOMContentLoaded", () => {
  refreshUsers();
});

function refreshUsers() {
  const users = getUsers();
  displayUsers(users);
  updateUserCount(users.length);
}

function getUsers() {
  const storedUsers = localStorage.getItem('libraryUsers');
  if (storedUsers) {
    return JSON.parse(storedUsers);
  } else {
    // Initialize with default users if none exist
    const defaultUsers = [
      { name: "Test User", email: "user@example.com", password: "password123" },
      { name: "Admin User", email: "admin@ineyslibrary.com", password: "admin123" },
      { name: "Reader User", email: "reader@library.com", password: "reader123" }
    ];
    localStorage.setItem('libraryUsers', JSON.stringify(defaultUsers));
    return defaultUsers;
  }
}

function displayUsers(users) {
  const userTable = document.getElementById('userTable');
  
  if (users.length === 0) {
    userTable.innerHTML = '<p>No users found in database.</p>';
    return;
  }

  let tableHTML = `
    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
  `;

  users.forEach((user, index) => {
    tableHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${'*'.repeat(user.password.length)}</td>
        <td>
          <button onclick="deleteUser(${index})" class="danger">Delete</button>
        </td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  userTable.innerHTML = tableHTML;
}

function updateUserCount(count) {
  const userCount = document.getElementById('userCount');
  userCount.innerHTML = `<h3>Total Users: ${count}</h3>`;
}

function deleteUser(index) {
  if (confirm('Are you sure you want to delete this user?')) {
    const users = getUsers();
    users.splice(index, 1);
    localStorage.setItem('libraryUsers', JSON.stringify(users));
    refreshUsers();
    alert('User deleted successfully!');
  }
}

function exportUsers() {
  const users = getUsers();
  const dataStr = JSON.stringify(users, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = 'library_users.json';
  link.click();
  
  alert('Users exported successfully!');
}

function clearDatabase() {
  if (confirm('Are you sure you want to clear all users? This action cannot be undone!')) {
    localStorage.removeItem('libraryUsers');
    localStorage.removeItem('currentUser');
    refreshUsers();
    alert('Database cleared successfully!');
  }
}

function resetToDefault() {
  if (confirm('Are you sure you want to reset to default users? This will clear all custom accounts.')) {
    const defaultUsers = [
      { name: "Test User", email: "user@example.com", password: "password123" },
      { name: "Admin User", email: "admin@ineyslibrary.com", password: "admin123" },
      { name: "Reader User", email: "reader@library.com", password: "reader123" }
    ];
    localStorage.setItem('libraryUsers', JSON.stringify(defaultUsers));
    refreshUsers();
    alert('Database reset to default users!');
  }
}
