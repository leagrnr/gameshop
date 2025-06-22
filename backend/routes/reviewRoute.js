const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Créer un avis
router.post('/', reviewController.create);

// Récupérer tous les avis
router.get('/', reviewController.getAll)

// Récupérer tous les avis d'un jeu
router.get('/game/:gameId', reviewController.getByGameId);

// Mettre à jour un avis
router.put('/:id', reviewController.update);

// Supprimer un avis
router.delete('/:id', reviewController.delete);

module.exports = router;