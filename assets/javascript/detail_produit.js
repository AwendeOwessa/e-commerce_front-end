 const img_secondaire_bloc = document.querySelectorAll('.img_secondaire');
 const container = document.querySelector('.img_bloc');
 const toggleBtn = document.getElementById('toggle');

 const totalImages = img_secondaire_bloc.length;
 const visibleByDefault = 4; // Nombre d'images visibles par défaut
 const hiddenCount = totalImages - visibleByDefault;

 function updateToggleButton() {
     const isAnyHidden = Array.from(img_secondaire_bloc)
         .slice(visibleByDefault)
         .some(img => img.classList.contains('masquer'));

     if (isAnyHidden) {
         toggleBtn.textContent = `${hiddenCount}+`;
         toggleBtn.classList.remove('active');
     } else {
         toggleBtn.textContent = '−';
         toggleBtn.classList.add('active');
     }
 }

 function toggleImages() {
     const isCurrentlyExpanded = !img_secondaire_bloc[visibleByDefault].classList.contains('masquer');

     // Toggle les images cachées (à partir de l'index 4)
     for (let i = visibleByDefault; i < img_secondaire_bloc.length; i++) {
         if (isCurrentlyExpanded) {
             img_secondaire_bloc[i].classList.add('masquer');
         } else {
             img_secondaire_bloc[i].classList.remove('masquer');
         }
     }

     updateToggleButton();
 }

 toggleBtn.addEventListener('click', toggleImages);

 // Initialiser l'état du bouton
 updateToggleButton();

 // Animation de chargement
 img_secondaire_bloc.forEach((img, index) => {
     img.style.animationDelay = `${index * 0.1}s`;
 });

 const detail = document.querySelector(".detail");
 const readmore = document.querySelector('.readmore');

 const texteComplet = detail.textContent.trim();
 const texte_visible = texteComplet.slice(0, 100);

 let isExpanded = false;

 detail.innerText = `${texte_visible}...`;

 readmore.addEventListener('click', () => {
     if (!isExpanded) {
         detail.innerText = texteComplet;
         readmore.innerText = "read less";
     } else {
         detail.innerText = `${texte_visible}...`;
         readmore.innerText = "read more";
     }
     isExpanded = !isExpanded;
 });

 const couleur_bloc = document.querySelectorAll(".couleur");

 couleur_bloc.forEach((couleur) => {
     couleur.addEventListener('click', () => {
         couleur_bloc.forEach(c => {
             const existingSelect = c.querySelector('.select_color');
             if (existingSelect) {
                 existingSelect.remove();
             }
         });

         const select = document.createElement('div');
         select.className = 'select_color';
         couleur.appendChild(select);
     });
 });