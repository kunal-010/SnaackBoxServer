const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema({
    pin: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxlength: 6
    }
});


const PinModel = mongoose.model("Pin", pinSchema);
module.exports = PinModel;

