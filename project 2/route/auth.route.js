const express = require('express');
const router = express.router();
const authController = require('/controller/auth.controller');
const authMiddleware = require('/middleware/authMiddleware');

router.post('/signup',authController.signup);
module.exports.router;

router.post('/login', authController.login);
module.exports.router;