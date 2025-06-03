const sequelize = require('sequelize');
const Game = require('../models/gameModel');

async function seedGames() {
    try {
        await Game.sync({ force: true }); // Recreate the table
        console.log('Table Game created successfully.');

        const games = [
            {
                name: 'The Legend of Zelda: Breath of the Wild',
                price: 59.99,
                genre: 'Action-Adventure',
                release_date: '2017-03-03',
                overall_rating: 9.5,
                review: 'An open-world masterpiece with stunning visuals and gameplay.'
            },
            {
                name: 'Super Mario Odyssey',
                price: 59.99,
                genre: 'Platformer',
                release_date: '2017-10-27',
                overall_rating: 9.3,
                review: 'A delightful platformer that brings back the magic of Mario.'
            },
            {
                name: 'Dark Souls III',
                price: 39.99,
                genre: 'Action RPG',
                release_date: '2016-03-24',
                overall_rating: 9.0,
                review: 'A challenging and rewarding experience for hardcore gamers.'
            },
            {
                name: 'The Witcher 3: Wild Hunt',
                price: 49.99,
                genre: 'Action RPG',
                release_date: '2015-05-19',
                overall_rating: 9.8,
                review: 'An epic tale with a vast open world and rich storytelling.'
            },
            {
                name: 'Celeste',
                price: 19.99,
                genre: 'Platformer',
                release_date: '2018-01-25',
                overall_rating: 9.4,
                review: 'A touching story about overcoming personal challenges through platforming.'
            }
        ];

        await Game.bulkCreate(games);
        console.log('Games seeded successfully.');
    } catch (error) {
        console.error('Error seeding games:', error);
    }
}

seedGames();