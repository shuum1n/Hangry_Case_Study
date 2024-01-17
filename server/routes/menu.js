const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menuController');

router.get('/menus', MenuController.getMenuData);
router.get('/menus/:menuId', MenuController.getOneMenu);

module.exports = router;
