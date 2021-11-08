const categoryModel = require('./../model/category');

exports.createCategory = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        console.log(options.categoryObj);
        let category = await categoryModel.create(options.categoryObj);
        resObj.msg = "category successfully created";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while creating category";
    }
    return resObj;
};

exports.getAllCategory = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let category = await categoryModel.find();
        resObj.data = category;
        resObj.msg = "category successfully created";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while creating category";
    }
    return resObj;
};

