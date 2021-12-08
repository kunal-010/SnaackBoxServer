var express = require('express')
var router = express.Router()

var foodItemControllers = require('./../../controllers/controller/foodItem');
router.post('/create',foodItemControllers.createFoodItemController);
router.get('/all',foodItemControllers.getAllFoodItemController);
router.get('/home',foodItemControllers.getHomeDataController);
router.post('/getCartItems',foodItemControllers.getCartItemsController)
router.get('/',foodItemControllers.getFoodItemController);

module.exports = router;