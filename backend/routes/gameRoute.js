const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/', gameController.create);
router.get('/', gameController.getAll);
router.get('/:id', gameController.getById);
router.put('/:id', gameController.update);
router.delete('/:id', gameController.delete);

module.exports = router;