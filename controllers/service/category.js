const categoryHelper = require('./../../models/helper/category');

exports.createCategory = async (req,res,options = {}) => {
    let resObj = await categoryHelper.createCategory(req,res,options);
    return resObj;
};

exports.getAllCategory = async (req,res,options = {}) => {
    let resObj = await categoryHelper.getAllCategory(req,res,options);
    return resObj;
};