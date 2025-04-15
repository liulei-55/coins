const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const version = document.querySelector('input[name="option"]:checked').value;

    alert(version)
    if (password === '131419') {
        if (version === 'version1' || version === null) {
            window.location.href = './pages/getcoins.html';
        } else {
            window.location.href = './pages/getcoins2.html';
        }
    } else {
        alert('Wrong password. Please try again.');
    }
});
