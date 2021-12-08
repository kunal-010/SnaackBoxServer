const pinHelper = require('./../../models/helper/pin');

exports.addPin = async (req,res,options = {}) => {
    let resObj = await pinHelper.addPin(req,res,options);
    return resObj;
};

exports.getPin = async (req,res,options = {}) => {
    let resObj = await pinHelper.getPin(req,res,options);
    return resObj;
};