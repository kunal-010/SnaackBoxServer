var express = require('express')
var router = express.Router()

var categoryControllers = require('./../../controllers/controller/category');
router.post('/create',categoryControllers.createCategoryController);
router.get('/all',categoryControllers.getAllCategoryController);



module.exports = router;