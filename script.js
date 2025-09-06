// Les données des fermes
const farms = [
    {
        name: "Ferme à fer",
        type: "Ressources",
        image: "https://i.imgur.com/7gK9u3A.png", // Lien d'image fonctionnel
        description: "Automatisez la production de fer pour vos blocs de construction et outils.",
    },
    {
        name: "Ferme à mobs",
        type: "Mobs",
        image: "https://i.imgur.com/uRj0o1g.png", // Lien d'image fonctionnel
        description: "Récupérez de l'expérience, des cordes, des os et plus encore.",
    },
    {
        name: "Ferme à canne à sucre",
        type: "Automatique",
        image: "https://i.imgur.com/V9X9eS2.png", // Lien d'image fonctionnel
        description: "Produisez de la canne à sucre en continu pour le papier et les livres.",
    },
    // Ajoute d'autres fermes ici si tu le souhaites !
    /*
    {
        name: "Nouvelle Ferme",
        type: "Nouveau Type",
        image: "https://lien.vers.ton.image/nouvelle-ferme.png",
        description: "Description de ta nouvelle ferme ici.",
    },
    */
];

// Fonction pour créer une fiche de ferme
function createFarmCard(farm) {
    const card = document.createElement('div');
    card.classList.add('farm-card');

    card.innerHTML = `
        <img src="${farm.image}" alt="Image de la ${farm.name}">
        <div class="farm-info">
            <h2>${farm.name}</h2>
            <p><strong>Type :</strong> ${farm.type}</p>
            <p>${farm.description}</p>
        </div>
    `;

    return card;
}

// Fonction pour afficher toutes les fiches de fermes
function displayFarms(filteredFarms = farms) {
    const container = document.getElementById('farms-container');
    container.innerHTML = ''; // Vide le conteneur avant d'afficher
    filteredFarms.forEach(farm => {
        const farmCard = createFarmCard(farm);
        container.appendChild(farmCard);
    });
}

// Nouvelle fonction pour filtrer les fermes
function filterFarms() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase(); // Récupère le texte de recherche en minuscules

    const filteredFarms = farms.filter(farm => {
        // Vérifie si le terme de recherche est dans le nom, la description ou le type de la ferme
        return farm.name.toLowerCase().includes(searchTerm) ||
               farm.description.toLowerCase().includes(searchTerm) ||
               farm.type.toLowerCase().includes(searchTerm);
    });

    displayFarms(filteredFarms); // Affiche uniquement les fermes filtrées
}

// Appel de la fonction pour démarrer l'affichage
document.addEventListener('DOMContentLoaded', () => {
    displayFarms(); // Affiche toutes les fermes au chargement initial
});
