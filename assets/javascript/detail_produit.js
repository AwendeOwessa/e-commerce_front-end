// Toggle pour afficher/cacher les images supplémentaires
const img_secondaire_bloc = document.querySelectorAll('.img_secondaire');
const toggleBtn = document.getElementById('toggle');
const visibleByDefault = 4;
const hiddenCount = img_secondaire_bloc.length - visibleByDefault;

function updateToggleButton() {
    const isAnyHidden = Array.from(img_secondaire_bloc)
        .slice(visibleByDefault)
        .some(img => img.classList.contains('masquer'));

    toggleBtn.textContent = isAnyHidden ? `${hiddenCount}+` : '−';
}

toggleBtn.addEventListener('click', function() {
    const isCurrentlyExpanded = !img_secondaire_bloc[visibleByDefault].classList.contains('masquer');

    for (let i = visibleByDefault; i < img_secondaire_bloc.length; i++) {
        if (isCurrentlyExpanded) {
            img_secondaire_bloc[i].classList.add('masquer');
        } else {
            img_secondaire_bloc[i].classList.remove('masquer');
        }
    }
    updateToggleButton();
});

// Changer l'image principale
function changeMainImage(src) {
    const mainImage = document.querySelector('.img_principale');
    const newSrc = src.replace('50x50', '600x300');
    mainImage.src = newSrc;
}

// Sélection de couleur
function selectColor(colorName, element) {
    document.querySelectorAll('.couleur').forEach(c => {
        c.classList.remove('selected');
        const existingSelect = c.querySelector('.select_color');
        if (existingSelect) existingSelect.remove();
    });

    element.classList.add('selected');
    const select = document.createElement('div');
    select.className = 'select_color';
    element.appendChild(select);

    document.getElementById('couleurText').textContent = colorName;
}

// Toggle description
function toggleDescription() {
    const detail = document.querySelector('.detail');
    const readmore = document.querySelector('.readmore');

    if (detail.style.webkitLineClamp === 'none') {
        detail.style.webkitLineClamp = '4';
        readmore.textContent = 'Lire plus';
    } else {
        detail.style.webkitLineClamp = 'none';
        readmore.textContent = 'Lire moins';
    }
}