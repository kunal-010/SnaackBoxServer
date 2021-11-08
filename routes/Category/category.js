var express = require('express')
var router = express.Router()

var categoryControllers = require('./../../controllers/controller/category');
router.post('/category',categoryControllers.createCategoryController);
router.get('/category',categoryControllers.getAllCategoryController);



module.exports = router;