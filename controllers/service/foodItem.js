const foodItemHelper = require('./../../models/helper/foodItem');
const categoryHelper = require('./../../models/helper/category');

exports.createFoodItem = async (req,res,options = {}) => {
    let resObj = await foodItemHelper.createFoodItem(req,res,options);
    return resObj;
};

exports.getAllFoodItem = async (req,res,options = {}) => {
    let resObj = await foodItemHelper.getAllFoodItem(req,res,options);
    return resObj;
};

exports.getHomeDataItem = async (req,res,options = {}) => {
    let resObj= {
        foodItems : [],
        categories: []
    }
    resObj.foodItems = await foodItemHelper.getAllFoodItem(req,res,options);
    resObj.categories = await categoryHelper.getAllCategory(req.res.options);
    return resObj;
};

exports.getFoodItem = async (req,res,options = {}) => {
    try{
        let resObj = await foodItemHelper.getFoodItem(req,res,options);
        return resObj;
    }catch(err){
        console.log(err);
        return err;
    }
};

exports.getCartItems = async (req,res,options = {}) => {
    try{
        let resObj = await foodItemHelper.getCartItems(req,res,options);
        return resObj;
    }catch(err){
        console.log(err);
        return err;
    }
};