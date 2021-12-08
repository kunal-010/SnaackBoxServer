const UserModel = require('./../model/user');

exports.register = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let user = await UserModel.findOne({mobile : options.userObj.mobile});
        let newUser;
        if(user){
            newUser = await UserModel.findOneAndUpdate(
                {mobile: options.userObj.mobile},
                {
                    name : options.userObj.name,
                    email: options.userObj.email
                }
            )
        }
        else{
            newUser = await UserModel.create(options.userObj);
        }
        resObj.data = newUser;
        resObj.msg = "user registerd successfully";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while registering user";
    }
    return resObj;
};

exports.getUser = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let user = await UserModel.findOne(options._id);
        resObj.data = user;
        resObj.msg = "user collected successfully";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while getting user";
    }
    return resObj;
};

exports.addAddress = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        await UserModel.updateOne(
            { _id : options._id},
            { $push : { addresses : options.addressObj }}
        );
        let user = await UserModel.findById(options._id).select("addresses");
        resObj.data = user;
        resObj.msg = "address added successfully";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while adding address";
    }
    return resObj;
};

exports.updateAddress = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let user = await UserModel.updateOne(
            { _id : options._id, "addresses._id" : options.addressObj._id},
            { $set : { "addresses.$" : options.addressObj }}
        );
        resObj.data = user;
        resObj.msg = "address updated successfully";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while updating address";
    }
    return resObj;
};

exports.deleteAddress = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let user = await UserModel.updateOne(
            { _id : options._id},
            { $pull : { addresses : { _id : options.address_id}}},
        );
        user = await UserModel.updateOne(
            {_id : options._id},
            { selectedAddress: options.selectedAddress }
        );

        resObj.data = user;
        resObj.msg = "address deleted successfully";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while deleting address";
    }
    return resObj;
};

exports.updateSelectedAddress = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let user = await UserModel.updateOne(
            { _id : options._id},
            { selectedAddress : options.selectedAddress}
        );
        resObj.data = user;
        resObj.msg = "selected address updated successfully";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while updating selected address";
    }
    return resObj;
};