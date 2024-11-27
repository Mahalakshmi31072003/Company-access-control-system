// JavaScript to set the username dynamically
document.addEventListener('DOMContentLoaded', () => {
  const username = "John Doe"; // Replace this with the actual logged-in username
  document.getElementById('loggedInUsername').textContent = username;
});


// On login button click
const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click', () => {
  const username = document.getElementById('usernameInput').value;
  sessionStorage.setItem('username', username);
  window.location.href = 'index.html'; // Redirect to dashboard
});


// On dashboard page
document.addEventListener('DOMContentLoaded', () => {
    const username = sessionStorage.getItem('username') || "User";
    document.getElementById('loggedInUsername').textContent = username;
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const username = sessionStorage.getItem('username') || "Admin User";
    document.getElementById('loggedInUsername').textContent = username;
  
    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function () {
      sessionStorage.clear(); // Clear session storage
      alert('You have been logged out successfully!');
      window.location.href = 'index.html'; // Redirect to login page
    });
    
    
  
  });
  
