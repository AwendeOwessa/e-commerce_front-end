const liste_selection = document.querySelectorAll('.selection');

liste_selection.forEach(element => {
    element.addEventListener('click', () => {
        liste_selection.forEach(el => el.classList.remove('choisit'));
        element.classList.add('choisit');
    });
});

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