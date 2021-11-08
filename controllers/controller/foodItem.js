const foodItemService = require('./../service/foodItem');

exports.createFoodItemController = async (req,res) => {
    let body = req.body;
    let foodItemObj = {};
    Object.keys(body).forEach((key) => {
        foodItemObj[key] = body[key];
    })
    console.log("food item obj===>>",foodItemObj);
    let resObj = await foodItemService.createFoodItem(req,res,{foodItemObj});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(foodItemObj);
}

exports.getAllFoodItemController = async (req,res) => {
    let resObj = await foodItemService.getAllFoodItem(req,res);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj.data);
}