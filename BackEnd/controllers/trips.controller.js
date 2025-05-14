const Trip = require("../models/trip.model");

module.exports.getAllTrips = async (req, res) => {
  try {
    // console.log("trips")
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong while fetching trips." });

}};

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
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update trip.' });
  }
};

module.exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.status(200).json({ message: 'Trip deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete trip.' });
  }};

  
  module.exports.getPaginatedTrips = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 9;
      const skip = (page - 1) * limit;
  
      const trips = await Trip.find()
        .sort({ createdAt: -1 }) 
        .skip(skip)
        .limit(limit);
  
      const totalTrips = await Trip.countDocuments();
      res.status(200).json({
        trips,
        totalPages: Math.ceil(totalTrips / limit),
        currentPage: page,
        totalTrips,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong while fetching trips.' });
    }
  };
  
  module.exports.getTripsByCategory = async (req, res) => {
    try {
      const { category } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
      const filter = category ? { category } : {};
      const trips = await Trip.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
  
      const totalTrips = await Trip.countDocuments(filter);
      res.status(200).json({
        trips,
        totalPages: Math.ceil(totalTrips / limit),
        currentPage: page,
        totalTrips,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong while fetching trips.' });
    }
  };
  
  module.exports.getSortedTrips = async (req, res) => {
    try {
      const { sortBy } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
  
      let sortOption = {};
      switch (sortBy) {
        case 'Rating':
          sortOption = { rating: -1 }; 
          break;
        case 'Price (Low to High)':
          sortOption = { discount: 1, price: 1 }; 
          break;
        case 'Recently Added':
        default:
          sortOption = { createdAt: -1 }; 
          break;
      }
  
      const trips = await Trip.find()
        .sort(sortOption)
        .skip(skip)
        .limit(limit);
  
      const totalTrips = await Trip.countDocuments();
      res.status(200).json({
        trips,
        totalPages: Math.ceil(totalTrips / limit),
        currentPage: page,
        totalTrips,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong while fetching trips.' });
    }
  };
  