const express = require('express');
const userController = require('../controllers/user.controllers');
const router = express.Router();

// جلب جميع المستخدمين
router.get('/users', userController.getAllUsers);

// جلب مستخدم بواسطة الـ ID
router.get('/users/:id', userController.getUserById);

// إضافة مستخدم جديد
router.post('/users', userController.addUser);

// تحديث بيانات مستخدم
router.put('/users/:id', userController.updateUser);

// حذف مستخدم
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
