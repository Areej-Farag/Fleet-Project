const Governorate = require('../models/Governorate.model');

// إضافة محافظة جديدة
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

// جلب كل المحافظات
exports.getAllGovernorates = async (req, res) => {
  try {
    const governorates = await Governorate.find().populate('trips');
    res.json(governorates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// جلب محافظة بالـ ID
exports.getGovernorateById = async (req, res) => {
  try {
    const governorate = await Governorate.findById(req.params.id).populate('trips');
    if (!governorate) return res.status(404).json({ message: 'Governorate not found' });
    res.json(governorate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
