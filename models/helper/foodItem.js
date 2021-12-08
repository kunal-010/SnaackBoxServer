const categoryModel = require('../model/category');
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
        let allFoodItem = options.categoryWise ? await foodItemModel.
                                        aggregate([
                                        {
                                            $group: {
                                                _id: "$category", 
                                                data : { 
                                                    $push : '$$ROOT'
                                                }
                                            }
                                        },
                                        {
                                            $lookup:
                                            {
                                                from: "categories",
                                                localField: "_id",
                                                foreignField: "_id",
                                                as: "category"
                                            }
                                        },
                                        {
                                            $unwind : { "path" : "$category"} 
                                        }],
                                        function(err,results) {
                                            if (err) throw err;
                                            return results;
                                        }) : 
                                        await foodItemModel.
                                        find(options.filter).
                                        populate('category').
                                        sort(options.sort).
                                        limit(options.limit);
        resObj.data = allFoodItem;
        resObj.msg = "food item collected successfully ";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "Error while getting all food items";
    }
    return resObj;
}

exports.getFoodItem = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let foodItem = await foodItemModel.
                                        findOne({_id: options._id}).
                                        populate('category');
        resObj.data = foodItem;
        resObj.msg = "food item collected successfully ";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "Error while getting all food items";
    }
    return resObj;
}

exports.getCartItems = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let foodItem = await foodItemModel.
                                        find().
                                        where('_id').
                                        in(options._ids).
                                        populate('category');
        resObj.data = foodItem;
        resObj.msg = "cart food items collected successfully ";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "Error while getting all cart food items";
    }
    return resObj;
}