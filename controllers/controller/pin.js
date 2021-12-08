const mongoose = require("mongoose");
const pinService = require('./../service/pin');

exports.addPinController = async (req,res) => {
    let body = req.body;
    let pinObj = {};
    Object.keys(body).forEach((key) => {
        pinObj[key] = body[key];
    })
    // console.log("category obj===>>",pinObj);
    let resObj = await pinService.addPin(req,res,{pinObj});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.getPinController = async (req,res) => {
    let options = {
        filter: {}
    }
    if(req.query._id){
        options.filter._id = mongoose.Types.ObjectId(req.query._id)
    }
    if(req.query.pin){
        options.filter.pin = req.query.pin;
    }
    // console.log("category obj===>>",pinObj);
    let resObj = await pinService.getPin(req,res,options);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}