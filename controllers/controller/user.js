const userService = require('./../service/user');
const mongoose = require("mongoose");

exports.registerController = async (req,res) => {
    let body = req.body;
    let userObj = {};
    Object.keys(body).forEach((key) => {
        userObj[key] = body[key];
    })
    // console.log("user obj===>>",userObj);
    let resObj = await userService.register(req,res,{userObj});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.getUserController = async (req,res) => {
    let options = {
        _id : mongoose.Types.ObjectId(req.query._id)
    }
    console.log(req.query._id)
    let resObj = await userService.getUser(req,res,options);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.addAddressController = async (req,res) => {
    let body = req.body;
    let addressObj = {};
    Object.keys(body).forEach((key) => {
        addressObj[key] = body[key];
    })
    let _id = mongoose.Types.ObjectId(req.query._id)
    // console.log("address obj===>>",addressObj);
    let resObj = await userService.addAddress(req,res,{addressObj,_id});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.updateAddressController = async (req,res) => {
    let body = req.body;
    let addressObj = {};
    Object.keys(body).forEach((key) => {
        addressObj[key] = body[key];
    })
    let _id = mongoose.Types.ObjectId(req.query._id)
    // console.log("address obj===>>",addressObj);
    let resObj = await userService.updateAddress(req,res,{addressObj,_id});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.deleteAddressController = async (req,res) => {
    let options = {
        _id: mongoose.Types.ObjectId(req.query._id),
        address_id: mongoose.Types.ObjectId(req.query.address_id)
    }
    // console.log("address obj===>>",addressObj);
    if(req.query.selectedAddress === req.query.address_id){
        options.selectedAddress = null;
    }else{
        options.selectedAddress = mongoose.Types.ObjectId(req.query.selectedAddress);
    }
    let resObj = await userService.deleteAddress(req,res,options);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.updatedSelectedAddressController = async (req,res) => {
    let options = {
        _id: mongoose.Types.ObjectId(req.query._id),
        selectedAddress: mongoose.Types.ObjectId(req.body.selectedAddress)
    }
    // console.log("address obj===>>",addressObj);
    let resObj = await userService.updateSelectedAddress(req,res,options);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}