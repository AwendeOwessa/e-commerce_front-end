// Récupération des éléments DOM
const crayon = document.getElementById("crayon");
const profil = document.getElementById("profil");
const fichier = document.getElementById("fichier");

// Fonction pour gérer l'affichage d'une nouvelle image
function displayImage(file) {
    const imageURL = URL.createObjectURL(file);
    profil.src = imageURL;

    // Nettoyer l'URL après le chargement de l'image
    profil.onload = () => URL.revokeObjectURL(imageURL);
}

// Fonction pour valider le fichier
function validateFile(file) {
    // Vérifier si c'est une image
    if (!file.type.startsWith("image/")) {
        alert("Veuillez sélectionner une image valide.");
        return false;
    }

    // Vérifier la taille du fichier (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB en bytes
    if (file.size > maxSize) {
        alert("L'image est trop volumineuse. Taille maximale autorisée : 5MB");
        return false;
    }

    return true;
}

// Event listener pour le clic sur le crayon
crayon.addEventListener("click", () => {
    fichier.click();
});

// Event listener pour le changement de fichier
fichier.addEventListener('change', (event) => {
    const file = event.target.files[0];

    // Vérifier qu'un fichier a été sélectionné
    if (!file) return;

    // Valider le fichier
    if (validateFile(file)) {
        displayImage(file);
    }

    // Réinitialiser l'input file pour permettre de sélectionner le même fichier à nouveau
    fichier.value = '';
});

// Event listener pour gérer les erreurs de chargement d'image
profil.addEventListener('error', () => {
    alert("Erreur lors du chargement de l'image. Veuillez réessayer avec une autre image.");
});

// Optionnel : Permettre le drag & drop sur l'image de profil
profil.addEventListener('dragover', (e) => {
    e.preventDefault();
    profil.style.opacity = '0.7';
});

profil.addEventListener('dragleave', () => {
    profil.style.opacity = '1';
});

profil.addEventListener('drop', (e) => {
    e.preventDefault();
    profil.style.opacity = '1';

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        if (validateFile(file)) {
            displayImage(file);
        }
    }
});