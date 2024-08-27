const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.post('/clients', clientsController.createClient);
router.get('/clients', clientsController.getClients);

module.exports = router;
