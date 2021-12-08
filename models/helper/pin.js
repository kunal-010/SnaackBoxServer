const PinModel = require('./../model/pin');

exports.addPin = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let pin = await PinModel.create(options.pinObj);
        resObj.data = pin;
        resObj.msg = "pin successfully added";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while adding pin";
    }
    return resObj;
};

exports.getPin = async (req,res,options = {}) => {
    let resObj = {
        err:false,
        msg:"",
        data:[]
    }
    try {
        let pin = await PinModel.findOne(options.filter);
        resObj.data = pin;
        resObj.msg = "pin successfully collected";
    } catch (err) {
        console.log(err);
        resObj.err = true;
        resObj.msg = "error while getting pin";
    }
    return resObj;
};

