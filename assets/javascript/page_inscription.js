const password = document.getElementById('password');
const eye = document.getElementById('eye');

eye.addEventListener('click', () => {
    const isPassword = password.type === 'password';
    password.type = isPassword ? 'text' : 'password';

    // Change l’icône selon l’état
    eye.src = isPassword ? 'assets/images/eyeOff.png' : 'assets/images/eyeOn.png';
});