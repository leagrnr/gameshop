const Review = require('../models/reviewModel');
const User = require('../models/userModel');

const reviewController = {
    create: async (req, res) => {
        try {
            const { gameId, userId, content, rating } = req.body;
            const review = await Review.create({
                gameId,
                userId,
                content,
                rating
            });
            res.status(201).json(review);
        } catch (error) {
            console.error('Error creating review:', error);
            res.status(500).json({
                message: 'Error while creating the review.',
                error: error.message || 'Unknown error',
            });
        }
    },

    getByGameId: async (req, res) => {
        const { gameId } = req.params;

        try {
            const reviews = await Review.findAll({
                where: { gameId },
                include: [
                    {
                        model: User,
                        attributes: ['id', 'username']
                    }
                ]
            });
            res.json(reviews);
        } catch (error) {
            console.error('Error retrieving reviews:', error);
            res.status(500).json({
                message: 'Error while retrieving reviews.',
                error: error.message || 'Unknown error',
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const reviews = await Review.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['id', 'username']
                    }
                ]
            });
            res.json(reviews);
        } catch (error) {
            console.error('Error retrieving reviews:', error);
            res.status(500).json({
                message: 'Error while retrieving reviews.',
                error: error.message || 'Unknown error',
            });
        }
    },

    update: async (req, res) => {
    const { id } = req.params;
        const { content, rating } = req.body;

        try {
            const review = await Review.findByPk(id);
            if (!review) {
                return res.status(404).json({ message: 'Review not found.' });
            }

            review.content = content;
            review.rating = rating;
            await review.save();

            res.json(review);
        } catch (error) {
            console.error('Error updating review:', error);
            res.status(500).json({
                message: 'Error while updating the review.',
                error: error.message || 'Unknown error',
            });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;

        try {
            const review = await Review.findByPk(id);
            if (!review) {
                return res.status(404).json({ message: 'Review not found.' });
            }

            await review.destroy();
            res.json({ message: 'Review deleted successfully.' });
        } catch (error) {
            console.error('Error deleting review:', error);
            res.status(500).json({
                message: 'Error while deleting the review.',
                error: error.message || 'Unknown error',
            });
        }
    }
};

module.exports = reviewController;