const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/products', inventoryController.createProduct);
router.get('/products', inventoryController.getProducts);

module.exports = router;
