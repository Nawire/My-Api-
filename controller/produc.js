const { find } = require('../model/product');
const product = require('../model/product');

//create a product

module.exports={
       newProduct: (req, res, next)=>{
    const userMembers=new product(req.body);
    userMembers.save()
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(500).json(err)
    });
},
viewProduct:(req,res,next)=>{
    find({})
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{res.status(500).json(err)
    })
},

productUpdate:(req,res,next)=>{
    const {productId}= req.params;
    const newProduct = req.body;
    product.findByIdAndUpdate(productId,newProduct)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(201).json(err)
    })


},
deleteProduct:(req,res,next)=>{
    const {productId}=req.params
    product.findByIdAndDelete(productId)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>{
        res.status(500).json(err)
    })

}
}