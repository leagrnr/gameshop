// backend/seeder/reviewSeeder.js
const { Review } = require('../models');

async function seedReviews() {
    try {
        await Review.sync({ force: true }); // Réinitialise la table Review
        console.log('Table Review créée avec succès.');

        const reviews = [
            { content: 'Incroyable aventure, à recommander !', rating: 9.5, userId: 1, gameId: 1 },
            { content: 'Très fun, univers magique.', rating: 9.0, userId: 2, gameId: 2 },
            { content: 'Difficile mais gratifiant.', rating: 8.7, userId: 3, gameId: 3 },
            { content: 'Scénario et gameplay au top.', rating: 9.8, userId: 4, gameId: 4 },
            { content: 'Plateformer exigeant et touchant.', rating: 9.2, userId: 5, gameId: 5 },
        ];

        await Review.bulkCreate(reviews);
        console.log('Avis insérés avec succès.');
    } catch (error) {
        console.error('Erreur lors du seed des avis :', error);
    }
}

seedReviews();