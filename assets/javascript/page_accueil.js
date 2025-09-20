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

const liste_like = document.querySelectorAll('.like');

liste_like.forEach(likeImg => {
    likeImg.addEventListener('click', () => {
        // Vérifie si l'image actuelle est "likeOff"
        const isOff = likeImg.src.includes('likeOff.png');

        // Change l'image selon l'état
        likeImg.src = isOff ?
            'assets/images/likeOn.png' :
            'assets/images/likeOff.png';
    });
});