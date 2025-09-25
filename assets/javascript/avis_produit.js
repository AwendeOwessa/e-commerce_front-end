// -----------------
// Bloc principal (produit)
// -----------------
const etoile_bloc = document.querySelectorAll('.etoile');
const note_totale = document.getElementById('note_produit');

let note = 0; // stocke la note choisie

etoile_bloc.forEach((etoile, index) => {
    etoile.addEventListener('mouseover', () => {
        allumerEtoiles(etoile_bloc, index + 1);
    });

    etoile.addEventListener('mouseout', () => {
        allumerEtoiles(etoile_bloc, note);
    });

    etoile.addEventListener('click', () => {
        note = index + 1;
        allumerEtoiles(etoile_bloc, note);
        note_totale.textContent = note;
    });
});

// -----------------
// Tri
// -----------------
const tri_bloc = document.querySelectorAll('.tri');

tri_bloc.forEach((tri, index) => {
    tri.addEventListener('click', () => {
        select(index);
    });
});

function select(index) {
    tri_bloc.forEach((element, i) => {
        if (i === index) {
            element.classList.add('tri_select');
        } else {
            element.classList.remove('tri_select');
        }
    });
}

// -----------------
// Notes sur les commentaires
// -----------------

// Fonction générique pour initialiser un bloc de commentaire
function initCommentaireBloc(section) {
    const etoiles = section.querySelectorAll('.etoile_commentaire');
    const noteSpan = section.querySelector('.note_commentaire');
    let note_commentaire = 0;

    etoiles.forEach((etoile, index) => {
        etoile.addEventListener('mouseover', () => {
            allumerEtoiles(etoiles, index + 1);
        });

        etoile.addEventListener('mouseout', () => {
            allumerEtoiles(etoiles, note_commentaire);
        });

        etoile.addEventListener('click', () => {
            note_commentaire = index + 1;
            allumerEtoiles(etoiles, note_commentaire);
            noteSpan.textContent = note_commentaire;
        });
    });
}

// Initialiser chaque section de commentaire
document.querySelectorAll('.commentaire').forEach(section => {
    initCommentaireBloc(section);
});

// -----------------
// Fonction commune pour allumer les étoiles
// -----------------
function allumerEtoiles(bloc, n) {
    bloc.forEach((e, i) => {
        if (i < n) e.classList.add('brille');
        else e.classList.remove('brille');
    });
}