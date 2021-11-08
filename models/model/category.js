const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1
    },
    // image: {

    // }
});


const categoryModel = mongoose.model("Category", categorySchema);
module.exports = categoryModel;

