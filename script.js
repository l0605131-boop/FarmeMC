// Les données des fermes
const farms = [
    {
        name: "Ferme à fer",
        type: "Ressources",
        image: "https://i.imgur.com/7gK9u3A.png",
        description: "Automatisez la production de fer pour vos blocs de construction et outils.",
        tutorialUrl: "https://www.youtube.com/watch?v=your-farm-video",
        materials: "100 blocs de fer, 20 verres, 50 planches de chêne."
    },
    {
        name: "Ferme à mobs",
        type: "Mobs",
        image: "https://i.imgur.com/uRj0o1g.png",
        description: "Récupérez de l'expérience, des cordes, des os et plus encore.",
        tutorialUrl: "https://www.youtube.com/watch?v=your-farm-video",
        materials: "60 blocs de pierre, 30 échelles, 10 barrières."
    },
    {
        name: "Ferme à canne à sucre",
        type: "Automatique",
        image: "https://i.imgur.com/V9X9eS2.png",
        description: "Produisez de la canne à sucre en continu pour le papier et les livres.",
        tutorialUrl: "https://www.youtube.com/watch?v=your-farm-video",
        materials: "20 cannes à sucre, 20 sables, 2 seaux d'eau, 15 pistons."
    },
    {
        name: "Ferme de Mobs Générale",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme polyvalente pour obtenir de l'expérience et des objets de plusieurs types de mobs.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Or",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Récupérez de l'or et de l'expérience en tuant des Piglins zombifiés.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Squelettes Wither",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Automatisez la collecte des crânes de Squelettes Wither pour invoquer le Wither.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Sorcières",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Obtenez des bâtons lumineux, de la poudre de redstone, et des fioles de verre.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Creepers",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Faites exploser les Creepers pour obtenir des feux d'artifice et de la poudre à canon.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Ghasts",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Récupérez des larmes de Ghast, utiles pour les potions.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Endermen",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme à expérience extrêmement rapide, située dans l'End.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Slimes",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour collecter des boules de slime, essentielles pour la redstone.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Cubes de Magma",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour récupérer des crèmes de magma dans le Nether.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Disques",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Un mécanisme pour obtenir des disques de musique rares.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Wither",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour affronter et obtenir de la Nether Star du Wither de manière automatisée.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Gardiens",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir des Prismarines, cristaux de Prismarine, et de l'expérience.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Blazes",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Ferme à expérience et à bâtons de Blaze, essentielle dans le Nether.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Têtes de Mobs",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour récupérer les têtes de Creepers, Squelettes ou Zombies.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Spawners",
        type: "Mobs",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Un tutoriel pour optimiser un spawner de mobs trouvé.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Hoglins",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour collecter de la viande et de l'expérience dans le Nether.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Tridents",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir le Trident, une arme rare et puissante.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Shulkers",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour avoir des coquilles de Shulkers, utiles pour les boîtes de Shulkers.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Lampes à Grenouilles",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour créer automatiquement des Lampes à Grenouilles.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Cuivre",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme qui produit des lingots de cuivre pour le bricolage.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Raids",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir des émeraudes, des totems d'immortalité et d'autres objets précieux.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Échanges avec les Piglins",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Automatise les échanges d'or avec les Piglins pour obtenir divers objets.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Calmars",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour collecter des sacs d'encre et des sacs d'encre luisante.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Pêche",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour obtenir de la nourriture, des livres enchantés et des objets de valeur.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Œufs",
        type: "Animaux",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour produire une source infinie d'œufs pour la nourriture et le bricolage.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Animaux (Vache, Cochon, Mouton, Lapin, Poule)",
        type: "Animaux",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme polyvalente pour la viande, le cuir et d'autres ressources animales.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Laine",
        type: "Animaux",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour collecter de la laine de manière automatisée.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Champignons",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour produire des champignons rouges et bruns en grande quantité.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Tortues/Écailles",
        type: "Animaux",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour collecter des écailles de tortues pour les casques.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Lait",
        type: "Animaux",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir du lait en continu à partir de vaches.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Œufs de Sniffer",
        type: "Animaux",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Un mécanisme pour automatiser la reproduction des Sniffers.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Poissons tropicaux",
        type: "Animaux",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir des poissons tropicaux pour la décoration ou la nourriture.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Cactus",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour produire du cactus, qui peut être transformé en colorant vert.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Pastèques",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme automatisée pour obtenir des pastèques.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Citrouilles",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour produire des citrouilles, utiles pour les golem de neige et les tartes.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Fleurs",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour collecter une grande variété de fleurs.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Blé, Carottes, Pommes de Terre, Betteraves",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme qui produit automatiquement les cultures de base du jeu.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Verrues du Nether",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Essentielle pour la fabrication de potions.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Fèves de Cacao",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir du colorant marron pour tes constructions.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Bambou",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour une production illimitée de bambou, utile pour les échafaudages.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Mangroves",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour faire pousser et récolter des arbres de la mangrove.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Baies Sucrées",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour une nourriture facile et rapide.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Cornichons de Mer",
        type: "Cultures",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir des cornichons de mer pour la décoration ou l'éclairage sous-marin.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Feuilles Gouttantes",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour collecter des feuilles gouttelettes pour tes constructions.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Mousse",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Produit de la mousse pour générer de la verdure.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Pavés",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une source infinie de pavés pour la construction.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Obsidienne",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour obtenir de l'obsidienne facilement.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Pierre/Pavés",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une source de pierre et de pavés à l'infini.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Bois",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour une production automatique et continue de bois.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Bois du Nether",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir les variétés de bois du Nether.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Glace",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour la production automatisée de glace.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Liane",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour obtenir de grandes quantités de lianes.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Kelp",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour collecter de grandes quantités de varech.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Lave",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une source illimitée de lave pour le combustible.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Boue",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour créer de la boue à partir d'eau et de terre.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Sculk",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour collecter des blocs de Sculk et de l'expérience.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Basalte",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour produire de la basalte pour la construction.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Baies Lumineuses",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Une ferme pour les baies lumineuses, une source de nourriture et de lumière.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme d'Améthyste",
        type: "Ressources",
        image: "https://i.imgur.com/PLACEHOLDER.png",
        description: "Pour obtenir des éclats d'améthyste pour le verre teinté et les télescopes.",
        tutorialUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
        materials: "PLACEHOLDER"
    },
    {
        name: "Ferme de Neige",
        type: "
