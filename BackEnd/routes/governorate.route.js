const express = require('express');
const router = express.Router();
const governorateController = require('../controllers/governorate.controller');

// POST: إنشاء محافظة
router.post('/', governorateController.createGovernorate);

// GET: جميع المحافظات
router.get('/', governorateController.getAllGovernorates);

// GET: محافظة حسب ID
router.get('/:id', governorateController.getGovernorateById);

// PUT: تحديث محافظة حسب ID
router.put('/:id', governorateController.updateGovernorate);

// DELETE: حذف محافظة حسب ID
router.delete('/:id', governorateController.deleteGovernorate);

module.exports = router;
