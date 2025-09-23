const etoile_bloc = document.querySelectorAll('.etoile')
const note_totale = document.getElementById('note')

let note = 0; // stocke la note choisie

etoile_bloc.forEach((etoile, index) => {
    etoile.addEventListener('mouseover', () => {
        allumerEtoiles(index + 1);
    });

    etoile.addEventListener('mouseout', () => {
        allumerEtoiles(note); // revenir à la note choisie
    });

    etoile.addEventListener('click', () => {
        note = index + 1;
        allumerEtoiles(note);
        note_totale.textContent = note;
    });
});

function allumerEtoiles(n) {
    etoile_bloc.forEach((e, i) => {
        if (i < n) e.classList.add('brille');
        else e.classList.remove('brille');
    });
}

const tri_bloc = document.querySelectorAll('.tri')

tri_bloc.forEach((tri, index) => {
    tri.addEventListener('click', () => {
        select(index);
    })
})

function select(index) {
    tri_bloc.forEach((element, i) => {
        if (i === index) {
            element.classList.add('tri_select')
        } else {
            element.classList.remove('tri_select')
        }
    })
}