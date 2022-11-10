const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json({products}))
        .catch(error => response.json({message: 'Something went wrong retrieving ALL PRODUCTS!', error: error}));
}

module.exports.findOneProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(error => response.json({message: 'Something went wrong retrieving ONE PRODUCT!', error: error}))
}

module.exports.createProduct = (request, response) => {
    const {title, price, description} = request.body;
    Product.create({
        title,
        price, 
        description
    })
        .then(product => response.json(product))
        .catch(error => response.json({message: 'Something went wrong CREATING A PRODUCT!', error: error}))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(error => response.json({message: 'Something went wrong UPDATING A PRODUCT!', error: error}))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
        .then(deletedProduct => response.json(deletedProduct))
        .catch(error => response.json({message: 'Something went wrong DELETING A PRODUCT!', error: error}))
}