const express = require('express');
const router = express.Router();
const locations = require('../routes/locations');
const menus = require('../routes/menu');
const carts = require('../routes/cart');
const errorHandler = require('../middleware/errorHandler');

router.use(locations);
router.use(menus);
router.use(carts);
router.use(errorHandler);

router.get('/', (req, res) => {
    res.send("Hello world!")
})

module.exports = router;