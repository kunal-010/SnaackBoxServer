const categoryService = require('./../service/category');

exports.createCategoryController = async (req,res) => {
    let body = req.body;
    let categoryObj = {};
    Object.keys(body).forEach((key) => {
        categoryObj[key] = body[key];
    })
    // console.log("category obj===>>",categoryObj);
    let resObj = await categoryService.createCategory(req,res,{categoryObj});
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj);
}

exports.getAllCategoryController = async (req,res) => {
    let resObj = await categoryService.getAllCategory(req,res,);
    if(resObj.err) {
        return res.status(500).json(resObj);
    }
    return res.status(200).json(resObj.data);
}