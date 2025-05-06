<<<<<<< HEAD
const Trip = require("../models/trip.model");
=======
const Trip = require('../models/trip.model');
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396

module.exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error(error);
<<<<<<< HEAD
    res
      .status(500)
      .json({ error: "Something went wrong while fetching trips." });
=======
    res.status(500).json({ error: 'Something went wrong while fetching trips.' });
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
  }
};

module.exports.getTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
<<<<<<< HEAD
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving the trip." });
=======
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving the trip.' });
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
  }
};

module.exports.createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

module.exports.updateTrip = async (req, res) => {
  try {
<<<<<<< HEAD
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update trip." });
=======
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update trip.' });
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
  }
};

module.exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
<<<<<<< HEAD
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json({ message: "Trip deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete trip." });
=======
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json({ message: 'Trip deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete trip.' });
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
  }
};
