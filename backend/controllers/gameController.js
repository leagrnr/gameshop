const Game = require('../models/gameModel');

const gameController = {
    // Create a new game
    create: async (req, res) => {
        try {
            const { name, price, genre, release_date, store_review, store_rating, image } = req.body;
            const game = await Game.create({
                name,
                price,
                genre,
                release_date,
                store_review,
                store_rating,
                image
            });
            res.status(201).json(game);
        } catch (error) {
            console.error('Error creating game:', error);
            res.status(500).json({
                message: 'Error while creating the game.',
                error: error.message || 'Unknown error',
            });
        }
    },

    // Get all games
    getAll: async (req, res) => {
        try {
            const { search } = req.query;
            let where = {};
            if (search) {
                where.name = { [require('sequelize').Op.like]: `%${search}%` };
            }
            const games = await Game.findAll({ where });
            res.json(games);
        } catch (error) {
            console.error('Error retrieving games:', error);
            res.status(500).json({
                message: 'Error while retrieving games.',
                error: error.message || 'Unknown error',
            });
        }
    },

    // Get one game by ID
    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const game = await Game.findByPk(id);
            if (!game) {
                return res.status(404).json({ message: 'Game not found.' });
            }
            res.json(game);
        } catch (error) {
            console.error('Error retrieving game:', error);
            res.status(500).json({
                message: 'Error while retrieving the game.',
                error: error.message || 'Unknown error',
            });
        }
    },

    // Update a game by ID
    update: async (req, res) => {
        const { id } = req.params;
        const { name, price, genre, release_date,store_review, store_rating, image } = req.body;
        try {
            const game = await Game.findByPk(id);
            if (!game) {
                return res.status(404).json({ message: 'Game not found.' });
            }
            await game.update({ name, price, genre, release_date, store_review, store_rating, image });
            res.json({ message: 'Game updated successfully.', game });
        } catch (error) {
            console.error('Error updating game:', error);
            res.status(500).json({
                message: 'Error while updating the game.',
                error: error.message || 'Unknown error',
            });
        }
    },

    // Delete a game by ID
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const game = await Game.findByPk(id);
            if (!game) {
                return res.status(404).json({ message: 'Game not found.' });
            }
            await game.destroy();
            res.json({ message: 'Game deleted successfully.' });
        } catch (error) {
            console.error('Error deleting game:', error);
            res.status(500).json({
                message: 'Error while deleting the game.',
                error: error.message || 'Unknown error',
            });
        }
    }
};

module.exports = gameController;
