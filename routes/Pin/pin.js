var express = require('express')
var router = express.Router()

var pinController = require('./../../controllers/controller/pin');
router.post('/',pinController.addPinController);
router.get('/',pinController.getPinController);

module.exports = router;