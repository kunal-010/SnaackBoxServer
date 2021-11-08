const foodItemHelper = require('./../../models/helper/foodItem');

exports.createFoodItem = async (req,res,options = {}) => {
    let resObj = await foodItemHelper.createFoodItem(req,res,options);
    return resObj;
};

exports.getAllFoodItem = async (req,res,options = {}) => {
    let resObj = await foodItemHelper.getAllFoodItem(req,res,options);
    return resObj;
};