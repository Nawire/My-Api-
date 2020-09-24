const express = require('express');
const router = express.Router();

const productController = require('../controller/product')


//create the product
router.route('/')
.post(productController.newProduct)
.get(productController.viewProduct)


router.route('/id')
.put(productController.productUpdate)
.delete(productController.deleteProduct)



//export the module
module.exports = router;