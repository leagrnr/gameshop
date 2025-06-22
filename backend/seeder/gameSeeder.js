const sequelize = require('sequelize');
const Game = require('../models/gameModel');

async function seedGames() {
    try {
        await Game.sync({ force: true }); // Recreate the table
        console.log('Table Game created successfully.');

        const now = new Date();

        const games = [
            {
                name: 'The Legend of Zelda: Breath of the Wild',
                price: 59.99,
                genre: 'Action-Adventure',
                release_date: '2017-03-03',
                store_rating: 9.5,
                store_review : 'An open-world masterpiece with stunning visuals and gameplay.',
                image:'zelda-botw.jpg'
            },
            {
                name: 'Super Mario Odyssey',
                price: 59.99,
                genre: 'Platformer',
                release_date: '2017-10-27',
                store_rating: 9.3,
                store_review : 'A delightful platformer that brings back the magic of Mario.',
                image: 'mario-odyssey.jpeg'
            },
            {
                name: 'Dark Souls III',
                price: 39.99,
                genre: 'Action RPG',
                release_date: '2016-03-24',
                store_rating: 9.0,
                store_review : 'A challenging and rewarding experience for hardcore gamers.',
                image: 'dark-souls-3.jpg'
            },
            {
                name: 'The Witcher 3: Wild Hunt',
                price: 49.99,
                genre: 'Action RPG',
                release_date: '2015-05-19',
                store_rating: 9.8,
                store_review : 'An epic tale with a vast open world and rich storytelling.',
                image: 'the-witcher-3.jpg'
            },
            {
                name: 'Celeste',
                price: 19.99,
                genre: 'Platformer',
                release_date: '2018-01-25',
                store_rating: 9.4,
                store_review : 'A touching story about overcoming personal challenges through platforming.',
                image: 'celeste.jpg'
            },
            {
                name: 'Astro Bot',
                price: 39.99,
                genre: 'Platformer',
                release_date: '2024-09-06',
                store_rating: 9.2,
                store_review : 'A charming platformer.',
                image: 'astro-bot.jpg'
            },
            {
                name: 'Death Stranding 2',
                price:79.99,
                genre: 'Action',
                release_date: '2025-06-26',
                store_rating: null,
                store_review : null,
                image: 'death-stranding-2.jpg'
            },
            {
                name: 'Doom The Dark Ages',
                price: 79.99,
                genre: 'FPS',
                release_date: '2025-04-15',
                store_rating: 8.4,
                store_review : 'A thrilling return to the classic FPS genre with modern twists.',
                image: 'doom.jpg'
            },
            {
                name: 'Elden Ring Nightreign',
                price: 39.99,
                genre: 'Action RPG',
                release_date: '2025-05-20',
                store_rating: 8.6,
                store_review : 'A new chapter in the Elden Ring saga with expanded lore and gameplay.',
                image: 'elden-ring-nightreign.jpg'
            },
            {
                name: 'Clair Obscur : Expedition 33',
                price: 39.99,
                genre: 'Adventure',
                release_date: '2025-04-20',
                store_rating: 9.4,
                store_review : 'An immersive adventure game that explores the depths of human emotion.',
                image: 'expedition-33.jpg'
            },
            {
                name: 'Final Fantasy VII Rebirth',
                price: 59.99,
                genre: 'RPG',
                release_date: '2024-02-29',
                store_rating: 9.7,
                store_review : 'A stunning continuation of the Final Fantasy VII remake, expanding the beloved story with breathtaking visuals and gameplay.',
                image: 'ff7-rebirth.jpg'
            },
            {
                name: 'Grand Theft Auto VI',
                price: 69.99,
                genre: 'Action-Adventure',
                release_date: '2026-06-28',
                store_rating: null,
                store_review : null,
                image: 'gta6.jpg'
            },
            {
                name: 'Indiana Jones and the Great Circle',
                price: 69.99,
                genre: 'Action-Adventure',
                release_date: '2025-10-15',
                store_rating: 8.1,
                store_review : 'A thrilling adventure that captures the spirit of the iconic archaeologist.',
                image: 'indiana-jones.jpg'
            },
            {
                name: 'Metal Gear Solid Delta: Snake Eater',
                price: 59.99,
                genre: 'Action-Adventure',
                release_date: '2025-09-26',
                store_rating: null,
                store_review : null,
                image: 'metal-gear-solid.jpg'
            },
            {
                name: 'Hell is Us',
                price: 49.99,
                genre: 'Action-Adventure',
                release_date: '2025-09-04',
                store_rating: null,
                store_review : null,
                image: 'hell-is-us.jpg'
            },
            {
                name: 'Mafia the Old Country',
                price: 39.99,
                genre: 'Action-Adventure',
                release_date: '2025-08-08',
                store_rating: null,
                store_review : null,
                image: 'mafia-the-old-country.jpg'
            }
        ];

        const enrichedGames = games.map(game => ({
            ...game,
            status: new Date(game.release_date) > now ? 'prochaine_sortie' : 'nouveaute'
        }));

        await Game.bulkCreate(enrichedGames);
        console.log('Games seeded successfully.');
    } catch (error) {
        console.error('Error seeding games:', error);
    }
}

seedGames();