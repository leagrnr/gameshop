// backend/seeder/userSeeder.js
const { User, Game, Review } = require('../models');

async function seedUsers() {
    try {
        await User.sync({ force: true }); // Réinitialise la table User
        console.log('Table User créée avec succès.');

        const users = [
            { username: 'alice', email: 'alice@email.com', password: 'password123' },
            { username: 'bob', email: 'bob@email.com', password: 'password123' },
            { username: 'charlie', email: 'charlie@email.com', password: 'password123' },
            { username: 'diana', email: 'diana@email.com', password: 'password123' },
            { username: 'eve', email: 'eve@email.com', password: 'password123' }
        ];

        await User.bulkCreate(users);
        console.log('Utilisateurs insérés avec succès.');
    } catch (error) {
        console.error('Erreur lors du seed des utilisateurs :', error);
    }
}

seedUsers();