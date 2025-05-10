
const Governorate = require('../models/governorate.model');

exports.createGovernorate = async (req, res) => {
  try {
    const { name, image, description, video } = req.body;
    const governorate = new Governorate({ name, image, description, video });
    await governorate.save();
    res.status(201).json(governorate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllGovernorates = async (req, res) => {
  try {
    const governorates = await Governorate.find().populate('trips');
    res.json(governorates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGovernorateById = async (req, res) => {
  try {
    const governorate = await Governorate.findById(req.params.id).populate('trips');
    if (!governorate) return res.status(404).json({ message: 'Governorate not found' });
    res.json(governorate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};
exports.updateGovernorate = async (req, res) => {
  try {
    const { name, image, description, video } = req.body;
    const updatedGovernorate = await Governorate.findByIdAndUpdate(
      req.params.id,
      { name, image, description, video },
      { new: true }
    );
    if (!updatedGovernorate) return res.status(404).json({ message: 'Governorate not found' });
    res.json(updatedGovernorate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteGovernorate = async (req, res) => {
  try {
    const deletedGovernorate = await Governorate.findByIdAndDelete(req.params.id);
    if (!deletedGovernorate) return res.status(404).json({ message: 'Governorate not found' });
    res.json({ message: 'Governorate deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getGovernorateTrips = async (req, res) => {
  try {
    const governorate = await Governorate.findById(req.params.id).populate('trips');
    if (!governorate) return res.status(404).json({ message: 'Governorate not found' });
    
    // Return the populated trips array
    res.json(governorate.trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
