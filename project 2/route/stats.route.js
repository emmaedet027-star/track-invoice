const express = require('express');
const router = express.router();
const statsController = require('/controller/stats.controllers');
const authMiddleware = require('/middleware/authMiddleware');

router.get('/stats', authMiddleware, statsController.statsDashboard);
module.exports.router;