var express = require('express')
var router = express.Router()

var userController = require('./../../controllers/controller/user');
router.post('/register',userController.registerController);
router.get('/',userController.getUserController);
router.post('/address',userController.addAddressController);
router.put('/address',userController.updateAddressController);
router.delete('/address',userController.deleteAddressController);
router.put('/selectedAddress',userController.updatedSelectedAddressController)

module.exports = router;