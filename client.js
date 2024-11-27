document.getElementById('logoutBtn').addEventListener('click', function () {
    sessionStorage.clear(); // Clear session storage
    alert('You have been logged out successfully!');
    window.location.href = 'index.html'; // Redirect to login page
  });
  