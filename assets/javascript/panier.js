//---------------------------------
//ajout de la quantité d'un article
//---------------------------------

const quantite_bloc_liste = document.querySelectorAll('.quantite_bloc');

quantite_bloc_liste.forEach((quantite_bloc) => {
    const quantites = quantite_bloc.querySelectorAll('.quantite');
    const nombre = quantite_bloc.querySelector('.nombre')

    let valeur_texte = nombre.textContent;
    let valeur = Number(valeur_texte);

    quantites.forEach((quantite, index) => {
        //clic sur un bouton
        quantite.addEventListener('click', () => {
            if (index === 0) {
                if (valeur > 1) {
                    valeur = valeur - 1;
                }
            } else if (index === 1) {
                valeur = valeur + 1;
            }
            valeur_texte = String(valeur);
            nombre.textContent = valeur_texte;
        })
    })
})

//--------------------------------------
//gestion de la suppression d'un article
//--------------------------------------

const bloc_article_liste = document.querySelectorAll('.bloc_article');
let pressTimer = null;
let currentDeleteButton = null;

// Fonction pour créer le bouton de suppression
function creerBoutonSupprimer() {
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.className = "delete-button delete-elastic";
    boutonSupprimer.style.cssText = `
        border: none;
        position: absolute;
        top: 10px;
        right: -60px;
        opacity: 0;
        background: transparent;
        cursor: pointer;
        z-index: 10;
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    boutonSupprimer.innerHTML = '<img src="assets/images/delete.png" alt="Supprimer" style="height: 50px; width: 50px;">';

    return boutonSupprimer;
}

function afficherBoutonSupprimer(bloc_article) {
    // S'assurer que le bloc a les bonnes propriétés CSS
    bloc_article.style.position = 'relative';
    bloc_article.style.overflow = 'hidden';

    // Supprimer bouton existant
    if (currentDeleteButton) {
        currentDeleteButton.style.right = '-60px';
        currentDeleteButton.style.opacity = '0';
        setTimeout(() => {
            if (currentDeleteButton && currentDeleteButton.parentNode) {
                currentDeleteButton.remove();
            }
        }, 300);
    }

    // Créer nouveau bouton
    currentDeleteButton = creerBoutonSupprimer();
    bloc_article.appendChild(currentDeleteButton);

    // Déclencher l'animation élastique
    setTimeout(() => {
        currentDeleteButton.style.right = '10px';
        currentDeleteButton.style.opacity = '1';
    }, 50);

    // Gérer la suppression
    currentDeleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        bloc_article.style.transition = 'all 0.5s ease';
        bloc_article.style.opacity = '0';
        bloc_article.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            bloc_article.remove();
        }, 500);
    });
}

// Application des événements
bloc_article_liste.forEach(bloc_article => {
    bloc_article.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('quantite')) return;
        pressTimer = setTimeout(() => {
            afficherBoutonSupprimer(bloc_article);
        }, 2000);
    });

    bloc_article.addEventListener('mouseup', () => {
        if (pressTimer) clearTimeout(pressTimer);
    });

    bloc_article.addEventListener('mouseleave', () => {
        if (pressTimer) clearTimeout(pressTimer);
    });
});