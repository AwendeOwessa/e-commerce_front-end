function scrollCategorie(amount) {
    const bar = document.querySelector('.categorie_barre');
    bar.scrollBy({ left: amount, behavior: 'smooth' });
};

const loupe = document.querySelector('.loupe');
const recherche = document.querySelector('.recherche')

loupe.addEventListener('click', () => {
    recherche.focus();
})

function scrollTri(amount) {
    const tri_bloc = document.querySelector('.tri_bloc');
    tri_bloc.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}