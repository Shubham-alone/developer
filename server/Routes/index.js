const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const controller = require('../Controller/index');

router.get('/products', controller.getAllproducts);

router.get('/products/category/:category', controller.getProductsBycategory);

router.get('/products/id/:id', controller.getProductsById);

router.get('/products/name/:name', controller.getProductsByName);

router.get('/search', controller.getSearchProducts);

module.exports = router;