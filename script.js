// Function to get users from local storage or initialize an empty array
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Function to save users to local storage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users)); // Corrected variable name from 'user' to 'users'
}

// Function to toggle between signup and login forms
function toggleForms() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}

// Function to handle signup
function signup() {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value;

    // Validate input
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    const users = getUsers();

    // Check if the username already exists
    if (users.find(user => user.username === username)) {
        alert('Username already exists. Please choose another one.');
        return;
    }

    // Store user data
    users.push({ username, password });
    saveUsers(users);

    // Show confirmation popup
    alert('Signup successful! Redirecting to login...');
    toggleForms(); // Switch to login form
}

// Function to handle login
function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.style.display = 'none';
    errorMessage.innerText = '';

    // Validate input
    if (!username || !password) {
        errorMessage.innerText = 'Please enter both username and password.';
        errorMessage.style.display = 'block';
        return;
    }

    const users = getUsers();

    // Check if the user exists and the password is correct
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Successful login
        alert('Login successful! Redirecting to the homepage...');
        // Redirect to a new page (you can change 'homepage.html' to your desired page)
        window.location.href = 'homepage.html';
    } else {
        // Invalid credentials
        errorMessage.innerText = 'Invalid username or password. Please try again.';
        errorMessage.style.display = 'block';
    }
}
