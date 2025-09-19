const crayon = document.getElementById("crayon");
const profil = document.getElementById("profil");
const fichier = document.getElementById("fichier");

crayon.addEventListener("click", () => {
    fichier.click();
});

fichier.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
        const imageURL = URL.createObjectURL(file);
        profil.src = imageURL;
    } else {
        alert("Veuillez sélectionner une image valide.");
    }
});

const imageURL = URL.createObjectURL(file);
profil.src = imageURL;
profil.onload = () => URL.revokeObjectURL(imageURL);