const bcrypt = require('bcrypt');
const { User } = require('../models');

async function seedUsers() {
    try {
        await User.sync({ force: true });
        console.log('Table User créée avec succès.');

        const users = await Promise.all([
            {
                username: 'alice',
                email: 'alice@email.com',
                password: await bcrypt.hash('password123', 10)
            },
            {
                username: 'bob',
                email: 'bob@email.com',
                password: await bcrypt.hash('password123', 10)
            },
            {
                username: 'charlie',
                email: 'charlie@email.com',
                password: await bcrypt.hash('password123', 10)
            },
            {
                username: 'diana',
                email: 'diana@email.com',
                password: await bcrypt.hash('password123', 10)
            },
            {
                username: 'eve',
                email: 'eve@email.com',
                password: await bcrypt.hash('password123', 10)
            }
        ]);

        await User.bulkCreate(users);
        console.log('Utilisateurs insérés avec succès.');
    } catch (error) {
        console.error('Erreur lors du seed des utilisateurs :', error);
    }
}

seedUsers();
