const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

router.post('/games', gameController.create);
router.get('/games', gameController.getAll);
router.get('/games/:id', gameController.getById);
router.put('/games/:id', gameController.update);
router.delete('/games/:id', gameController.delete);

module.exports = router;