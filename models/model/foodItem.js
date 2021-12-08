const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1
    },
    lowerName: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    description: {
        type: String,
        trim: true
    },
    availability: {
        type: Boolean,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'Category'
    },
    maxPerOrder: {
        type: String,
        default: null
    },
    sold: {
        type: Number,
        default: 0
    }
    // images: [

    // ]
});


const foodItemModel = mongoose.model("FoodItem", foodItemSchema);
module.exports = foodItemModel;

