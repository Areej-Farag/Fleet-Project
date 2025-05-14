const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/login', userController.loginUser);

router.post('/register', userController.registerUser);

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.addUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports= router;
