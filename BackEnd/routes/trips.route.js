const router = require('express').Router();
const {
  getAllTrips,
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip
} = require('../controllers/trips.controller');

// Routes
router.get('/', getAllTrips);
router.get('/:id', getTrip);
router.post('/', createTrip);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);

module.exports = router;
