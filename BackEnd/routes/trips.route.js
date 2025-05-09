const router = require('express').Router();
const {
  getAllTrips,
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
  getPaginatedTrips,
  getTripsByCategory,
  getSortedTrips
} = require('../controllers/trips.controller');

// Routes
router.get('/paginated', getPaginatedTrips);
router.get('/', getAllTrips);
router.get('/:id', getTrip);
router.post('/', createTrip);
router.put('/:id', updateTrip);
router.delete('/:id', deleteTrip);
router.get('/category', getTripsByCategory);
router.get('/sorted', getSortedTrips);


module.exports = router;
