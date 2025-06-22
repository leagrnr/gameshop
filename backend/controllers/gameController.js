const Game = require('../models/gameModel');

const gameController = {
    create: async (req, res) => {
        try {
            const {
                name,
                price,
                genre,
                release_date,
                store_rating,
                description,
                platform,
                store_review_like,
                store_review_dislike,
                store_review_global,
                image,
                status
            } = req.body;
            const game = await Game.create({
                name,
                price,
                genre,
                release_date,
                store_rating,
                description,
                platform,
                store_review_like,
                store_review_dislike,
                store_review_global,
                image,
                status
            });
            res.status(201).json(game);
        } catch (error) {
            console.error('Erreur lors de la création du jeu :', error);
            res.status(500).json({
                message: 'Erreur lors de la création du jeu.',
                error: error.message || 'Erreur inconnue',
            });
        }
    },

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
            console.error('Erreur lors de la récupération des jeux :', error);
            res.status(500).json({
                message: 'Erreur lors de la récupération des jeux.',
                error: error.message || 'Erreur inconnue',
            });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const game = await Game.findByPk(id);
            if (!game) {
                return res.status(404).json({ message: 'Jeu non trouvé.' });
            }
            res.json(game);
        } catch (error) {
            console.error('Erreur lors de la récupération du jeu :', error);
            res.status(500).json({
                message: 'Erreur lors de la récupération du jeu.',
                error: error.message || 'Erreur inconnue',
            });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        const {
            name,
            price,
            genre,
            release_date,
            store_rating,
            description,
            platform,
            store_review_like,
            store_review_dislike,
            store_review_global,
            image,
            status
        } = req.body;
        try {
            const game = await Game.findByPk(id);
            if (!game) {
                return res.status(404).json({ message: 'Jeu non trouvé.' });
            }
            await game.update({
                name,
                price,
                genre,
                release_date,
                store_rating,
                description,
                platform,
                store_review_like,
                store_review_dislike,
                store_review_global,
                image,
                status
            });
            res.json({ message: 'Jeu mis à jour avec succès.', game });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du jeu :', error);
            res.status(500).json({
                message: 'Erreur lors de la mise à jour du jeu.',
                error: error.message || 'Erreur inconnue',
            });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const game = await Game.findByPk(id);
            if (!game) {
                return res.status(404).json({ message: 'Jeu non trouvé.' });
            }
            await game.destroy();
            res.json({ message: 'Jeu supprimé avec succès.' });
        } catch (error) {
            console.error('Erreur lors de la suppression du jeu :', error);
            res.status(500).json({
                message: 'Erreur lors de la suppression du jeu.',
                error: error.message || 'Erreur inconnue',
            });
        }
    }
};

module.exports = gameController;