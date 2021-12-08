const userHelper = require('./../../models/helper/user');

exports.register = async (req,res,options = {}) => {
    let resObj = await userHelper.register(req,res,options);
    return resObj;
};

exports.getUser = async (req,res,options = {}) => {
    let resObj = await userHelper.getUser(req,res,options);
    return resObj;
};

exports.addAddress = async (req,res,options = {}) => {
    let resObj = await userHelper.addAddress(req,res,options);
    return resObj;
};

exports.updateAddress = async (req,res,options = {}) => {
    let resObj = await userHelper.updateAddress(req,res,options);
    return resObj;
};

exports.deleteAddress = async (req,res,options = {}) => {
    let resObj = await userHelper.deleteAddress(req,res,options);
    return resObj;
};

exports.updateSelectedAddress = async (req,res,options = {}) => {
    let resObj = await userHelper.updateSelectedAddress(req,res,options);
    return resObj;
};