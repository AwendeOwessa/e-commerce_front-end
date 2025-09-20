const img_secondaire_bloc = document.querySelectorAll('.img_secondaire');
const bouton = document.querySelectorAll('.bouton')


const compteur = img_secondaire_bloc.length;

const plus = document.getElementById('plus')
plus.innerText = `${compteur-6}+`

plus.addEventListener('click', () => {
    for (let i = 4; i < (img_secondaire_bloc.length); i++) {
        const element = img_secondaire_bloc[i];
        element.classList.toggle("afficher")
    }
});