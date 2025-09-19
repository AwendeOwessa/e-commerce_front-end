const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');

eye1.addEventListener('click', () => {
    const isPassword1 = password.type === 'password';
    password.type = isPassword1 ? 'text' : 'password';
    // Change l’icône selon l’état
    eye1.src = isPassword1 ? 'assets/images/eyeOff.png' : 'assets/images/eyeOn.png';
});

eye2.addEventListener('click', () => {
    const isPassword2 = passwordConfirm.type === 'password';
    passwordConfirm.type = isPassword2 ? 'text' : 'password';
    // Change l’icône selon l’état
    eye2.src = isPassword2 ? 'assets/images/eyeOff.png' : 'assets/images/eyeOn.png';
});


//pour s'assurer que les deux mots de passe sont identiques

const differentPassword = document.getElementById('differentPassword');

function validationPassword() {
    if (password.value !== passwordConfirm.value && passwordConfirm.value !== "") {
        differentPassword.textContent = "Le mot de passe ne correspondent pas";
        differentPassword.style.color = "red";
    } else if (passwordConfirm.value === "") {
        differentPassword.textContent = "";
    } else {
        differentPassword.textContent = "Le mot de passe correspondent";
        differentPassword.style.color = "green";
    }
}

password.addEventListener("change", validationPassword);
passwordConfirm.addEventListener("keyup", validationPassword);
password.addEventListener("input", validationPassword);
passwordConfirm.addEventListener("input", validationPassword);