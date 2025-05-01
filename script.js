function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users)); 
}
function signup() {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value()
    if (!username || !password) {
        alert('Please enter both Username and Password.');
        return;
    }
    const users = getUsers();
    if (users.find(user => user.username === username)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }
    users.push({ username, password });
    saveUsers(users);
    alert('Signup successful! Redirecting to the login...');
    toggleForms(); 
}
function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
    errorMessage.innerText = '';
    if (!username || !password) {
        errorMessage.innerText = 'Please enter both username and password.';
        errorMessage.style.display = 'block';
        return;
    }
    const users = getUsers();
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
function toggleForms() {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    signupForm.style.display = (signupForm.style.display === "none") ? "block" : "none";
    loginForm.style.display = (loginForm.style.display === "none") ? "block" : "none";
}


