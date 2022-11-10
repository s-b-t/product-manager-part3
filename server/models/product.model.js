const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '* Title is required to continue!'],
        minlength: [3, '* Atleast 3 Characters Required for Title!']
    },
    price: {
        type: Number,
        required: [true, '* Price is required to continue!'],
        min: [1, '* Price must be above $1.00!']
    },
    description: {
        type: String,
        required: [true, '* Description is required to continue!'],
        minlength: [3, '* Atleast 3 Characters Required for Description!']
    }
}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;