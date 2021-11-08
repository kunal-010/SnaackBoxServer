var express = require('express')
var router = express.Router()

var foodItemControllers = require('./../../controllers/controller/foodItem');
router.post('/foodItem',foodItemControllers.createFoodItemController);
router.get('/foodItem',foodItemControllers.getAllFoodItemController);



module.exports = router;