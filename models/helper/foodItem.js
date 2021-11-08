const foodItemModel = require('./../model/foodItem');

exports.createFoodItem = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        console.log(options.foodItemObj);
        let foodItem = await foodItemModel.create(options.foodItemObj);
        resObj.msg = "food item successfully created";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while creating food item";
    }
    return resObj;
}

exports.getAllFoodItem = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let allFoodItem = await foodItemModel.find().populate('category');
        resObj.data = allFoodItem;
        resObj.msg = "food item collected successfully ";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while getting all food item";
    }
    return resObj;
}