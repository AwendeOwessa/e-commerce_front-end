const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

const minuteur = document.getElementById('minuteur');
const renvoyer = document.getElementById('renvoyer');

let timer = null;

function renvoieCode() {
    let seconde = 59;
    minuteur.textContent = `(00:${String(seconde).padStart(2, '0')})`;
    renvoyer.disabled = true;

    if (timer) clearInterval(timer);

    timer = setInterval(() => {
        seconde--;
        minuteur.textContent = `(00:${String(seconde).padStart(2, '0')})`;

        if (seconde <= 0) {
            clearInterval(timer);
            timer = null;
            renvoyer.disabled = false;
        }
    }, 1000);
}

renvoyer.addEventListener('click', renvoieCode);