const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

router.get('/cart/:cartId', CartController.getCart);
router.post('/cart/add/:cartId', CartController.addItemToCart);
router.put('/cart/edit/:cartId', CartController.removeItemFromCart);    
router.put('/cart/checkout/:cartId', CartController.checkoutCart)


module.exports = router;