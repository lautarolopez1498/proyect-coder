const {Router} = require('express');
const productsModel = require('../models/product.model');

const router =  Router();


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/products', async (req, res) => {
    let products = await productsModel.find();
    res.render('products', {
        products: products.map((product) => {
            return {
                _id: product._id.toString(),
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock
            }
        })        
    });
});

module.exports = router;