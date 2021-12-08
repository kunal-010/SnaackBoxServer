const mongoose = require("mongoose");
const foodItemService = require('./../service/foodItem');

exports.createFoodItemController = async (req,res) => {
    let body = req.body;
    let foodItemObj = {};
    Object.keys(body).forEach((key) => {
        foodItemObj[key] = body[key];
    })

    foodItemObj.lowerName = foodItemObj.name;
    console.log("food item obj===>>",foodItemObj);
    let resObj = await foodItemService.createFoodItem(req,res,{foodItemObj});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(foodItemObj);
}

exports.getAllFoodItemController = async (req,res) => {
    let options={
        filter: {},
        categoryWise : req.query.categoryWise
    };
    if(req.query._id){
        options.filter.category =  mongoose.Types.ObjectId(req.query._id)
    } 
    if(req.query.q){
        options.filter.lowerName = new RegExp(req.query.q)
    }
    let resObj = await foodItemService.getAllFoodItem(req,res,options);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).send(resObj);
}

exports.getHomeDataController = async (req,res) => {
    let options={};
    options.sort = { sold : -1};
    options.limit = 10
    let resObj = await foodItemService.getHomeDataItem(req,res,options);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.getFoodItemController = async (req,res) => {
    let options = {
        _id : mongoose.Types.ObjectId(req.query.foodItem_id)
    }
    try {
        let resObj = await foodItemService.getFoodItem(req,res,options);
        return res.status(200).send(resObj);
    } catch(err){
        return res.status(500).json(err);
    }   
}

exports.getCartItemsController = async (req,res) => {
    let options = {
        _ids : req.body._ids
    }
    try {
        let resObj = await foodItemService.getCartItems(req,res,options);
        return res.status(200).send(resObj);
    } catch(err){
        return res.status(500).json(err);
    }   
}