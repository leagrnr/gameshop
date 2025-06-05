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
                review: 'An open-world masterpiece with stunning visuals and gameplay.',
                image:'public/images/zelda-botw.jpg'
            },
            {
                name: 'Super Mario Odyssey',
                price: 59.99,
                genre: 'Platformer',
                release_date: '2017-10-27',
                overall_rating: 9.3,
                review: 'A delightful platformer that brings back the magic of Mario.',
                image: 'public/images/mario-odyssey.jpeg'
            },
            {
                name: 'Dark Souls III',
                price: 39.99,
                genre: 'Action RPG',
                release_date: '2016-03-24',
                overall_rating: 9.0,
                review: 'A challenging and rewarding experience for hardcore gamers.',
                image: 'public/images/dark-souls-3.jpg'
            },
            {
                name: 'The Witcher 3: Wild Hunt',
                price: 49.99,
                genre: 'Action RPG',
                release_date: '2015-05-19',
                overall_rating: 9.8,
                review: 'An epic tale with a vast open world and rich storytelling.',
                image: 'public/images/the-witcher-3.jpg'
            },
            {
                name: 'Celeste',
                price: 19.99,
                genre: 'Platformer',
                release_date: '2018-01-25',
                overall_rating: 9.4,
                review: 'A touching story about overcoming personal challenges through platforming.',
                image: 'public/images/celeste.jpg'
            },
            {
                name: 'Astro Bot',
                price: 39.99,
                genre: 'Platformer',
                release_date: '2024-09-06',
                overall_rating: 9.2,
                review: 'A charming platformer.',
                image: 'public/images/astro-bot.jpg'
            },
            {
                name: 'Death Stranding 2',
                price:79.99,
                genre: 'Action',
                release_date: '2025-06-26',
                overall_rating: null,
                review: null,
                image: 'public/images/death-stranding-2.jpg'
            },
            {
                name: 'Doom The Dark Ages',
                price: 79.99,
                genre: 'FPS',
                release_date: '2025-04-15',
                overall_rating: 8.4,
                review: 'A thrilling return to the classic FPS genre with modern twists.',
                image: 'public/images/doom.jpg'
            },
            {
                name: 'Elden Ring Nightreign',
                price: 39.99,
                genre: 'Action RPG',
                release_date: '2025-05-20',
                overall_rating: 8.6,
                review: 'A new chapter in the Elden Ring saga with expanded lore and gameplay.',
                image: 'public/images/elden-ring-nightreign.jpg'
            },
            {
                name: 'Clair Obscur : Expedition 33',
                price: 39.99,
                genre: 'Adventure',
                release_date: '2025-04-20',
                overall_rating: 9.4,
                review: 'An immersive adventure game that explores the depths of human emotion.',
                image: 'public/images/expedition-33.jpg'
            },
            {
                name: 'Final Fantasy VII Rebirth',
                price: 59.99,
                genre: 'RPG',
                release_date: '2024-02-29',
                overall_rating: 9.7,
                review: 'A stunning continuation of the Final Fantasy VII remake, expanding the beloved story with breathtaking visuals and gameplay.',
                image: 'public/images/ff7-rebirth.jpg'
            },
            {
                name: 'Grand Theft Auto VI',
                price: 69.99,
                genre: 'Action-Adventure',
                release_date: '2026-06-28',
                overall_rating: null,
                review: null,
                image: 'public/images/gta6.jpg'
            },
            {
                name: 'Indiana Jones and the Great Circle',
                price: 69.99,
                genre: 'Action-Adventure',
                release_date: '2025-10-15',
                overall_rating: 8.1,
                review: 'A thrilling adventure that captures the spirit of the iconic archaeologist.',
                image: 'public/images/indiana-jones.jpg'
            },
            {
                name: 'Metal Gear Solid Delta: Snake Eater',
                price: 59.99,
                genre: 'Action-Adventure',
                release_date: '2025-09-26',
                overall_rating: null,
                review: null,
                image: 'public/images/metal-gear-solid.jpg'
            },
            {
                name: 'Hell is Us',
                price: 49.99,
                genre: 'Action-Adventure',
                release_date: '2025-09-04',
                overall_rating: null,
                review: null,
                image: 'public/images/hell-is-us.jpg'
            },
            {
                name: 'Mafia the Old Country',
                price: 39.99,
                genre: 'Action-Adventure',
                release_date: '2025-08-08',
                overall_rating: null,
                review: null,
                image: 'public/images/mafia-the-old-country.jpg'
            }
        ];

        await Game.bulkCreate(games);
        console.log('Games seeded successfully.');
    } catch (error) {
        console.error('Error seeding games:', error);
    }
}

seedGames();