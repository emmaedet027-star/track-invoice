const express = require('express');
const router = express.router();
const invoiceController = require('/controller/invoice.controllers');
const authMiddleware = require('/middleware/authMiddleware');
const restriction = require('/middleware/restriction');

router.post('/create/invoice', authMiddleware, restriction.invoiceLimit,  invoiceController.createInvoice);
module.exports.router;

router.put('/invoice/:id', authMiddleware, invoiceController.editInvoice);
module.exports.router;

router.post('/invoice/:id', authMiddleware, invoiceController.sendInvoice);
module.exports.router;

router.post('/email', authMiddleware, restriction.emailLimit,  invoiceController.createEmail);
module.exports.router;

router.post('/email/:id', authMiddleware, invoiceController.scheduleEmail);
module.exports.router;

router.post('/email/:id', authMiddleware, invoiceController.sendEmail);
module.exports.router;

router.delete('/email/:id', authMiddleware, invoiceController.deleteEmail);
module.exports.router;

router.put('/edit/:id', authMiddleware, invoiceController.editEmail);
module.exports.router;