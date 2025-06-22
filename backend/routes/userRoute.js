const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Authentifier un utilisateur
router.post('/login', userController.login);

// Créer un utilisateur
router.post('/', userController.create);

// Récupérer un utilisateur par ID
router.get('/:id', userController.getById);

// Récupérer tous les utilisateurs
router.get('/', userController.getAll);

// Mettre à jour un utilisateur
router.put('/:id', userController.update);

// Supprimer un utilisateur
router.delete('/:id', userController.delete);

module.exports = router;