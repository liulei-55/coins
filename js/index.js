const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;

    if (password === '131419') {
        window.location.href = './pages/getcoins.html';
    } else {
        alert('Wrong password. Please try again.');
        }
});