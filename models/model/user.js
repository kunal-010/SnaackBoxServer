const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    mobile: {
        type: String,
        trim:true,
        required: true
    },
    // avatar: {

    // },
    addresses: [
        {
            address: {
                type: String,
                trim: true,
            },
            pin: {
                type:String,
                trim: true,
                minlength: 6,
                maxlength: 6
            },
            mobile: {
                type: String,
                trim:true,
            }
        }
    ],
    selectedAddress : {
        type : mongoose.Schema.Types.ObjectId,
        trim : true
    }
});


const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;

