const { Router } = require('express');
const productsModel = require('../models/product.model');
const { body, validationResult } = require('express-validator');
const multerUtils = require('../multer.utils');

const router = Router();


router.get('/', async (req, res) => {
    try {
        const products = await productsModel.find();
        return res.json({
            msg: 'OK',
            payload: products
        })
    }
    catch (error) {
        return res.status(500).json({
            msg: 'error',
            payload: 'Error al obtener los productos'
        });
    }
});


// use middleware multer para ingresar imagen mediante un archivo
router.post('/', multerUtils.single('thumbnail'), async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productsModel.create(product);
        return res.json({
            msg: 'OK',
            payload: newProduct 
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'error',
            payload: 'Error al crear un producto'
        });
    };
});


module.exports = router;