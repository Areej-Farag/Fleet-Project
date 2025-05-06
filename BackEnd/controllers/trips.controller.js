const Trip = require("../models/trip.model");

module.exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while fetching trips." });
  }
};

module.exports.getTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving the trip." });
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
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update trip." });
  }
};

module.exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) return res.status(404).json({ error: "Trip not found" });
    res.status(200).json({ message: "Trip deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete trip." });
  }
};
