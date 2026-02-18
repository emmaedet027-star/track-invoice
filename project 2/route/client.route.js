const express = require('express');
const router = express.router();
const clientController = require('/controller/client.controller');
const authMiddleware = require('/middleware/authMiddleware');
const restriction = require('/middleware/restriction');

router.post('/create/client', authMiddleware, restriction.clientLimit,  clientController.createClient);
module.exports.router;

router.get('/client', authMiddleware, clientController.viewClient);
module.exports.router;

router.get('/client/:id', authMiddleware, clientController.viewOneClient);
module.exports.router;