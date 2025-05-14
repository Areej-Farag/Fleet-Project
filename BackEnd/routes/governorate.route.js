const express = require('express');
const router = express.Router();
const governorateController = require('../controllers/governorate.Controller');

router.post('/', governorateController.createGovernorate);

router.get('/', governorateController.getAllGovernorates);

router.get('/:id', governorateController.getGovernorateById);

router.put('/:id', governorateController.updateGovernorate);

router.delete('/:id', governorateController.deleteGovernorate);

router.get('/by-name/:name/trips', governorateController.getTripsByGovernorateName);
// router.get('/:id/trips', governorateController.getGovernorateTrips);


module.exports = router;
