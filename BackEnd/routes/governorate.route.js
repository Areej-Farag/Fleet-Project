const express = require('express');
const router = express.Router();
const governorateController = require('../controllers/governorate.controller');

router.post('/', governorateController.createGovernorate);

router.get('/', governorateController.getAllGovernorates);

router.get('/:id', governorateController.getGovernorateById);

router.put('/:id', governorateController.updateGovernorate);

router.delete('/:id', governorateController.deleteGovernorate);

module.exports = router;
