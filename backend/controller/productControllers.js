const Product = require('../model/productModel');
const cloudinary = require('../config/cloudinary');

const getProducts = async(req,res) =>{
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({message:'server error'});
    }
};

const getProductById = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({message:'product not found'});
        }
    } catch (error) {
        res.status(501).json({message:'server error'});
    }
};

const createProduct = async(req,res)=>{
try {
        const {name,description,price,category,stock} = req.body;
        let imageUrl = '';
        if (req.file) {
          
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }

        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);

}  catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({
        message:error.message
    });
}
    
};

const updateProduct = async(req,res)=>{
    try {
        const {name,description,price,category, stock} = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name||product.name;
            product.description = description||product.description;
            product.price =price||product.price;
            product.category = category||product.category;
            product.stock = stock||product.stock;
           if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            product.imageUrl = result.secure_url;
        }
        const updatedProduct = await product.save();
        res.json(updateProduct);
        }

    } catch (error) {
        res.status(500).json({message:'server error'})
    }
};

const deleteProduct= async(req,res)=>{
try {
        const product = await Product.findById(req.params.id);
        if(product){
            await product.deleteOne();
            res.json({message:'product removed '});
        }
        else{
            res.status(501).json({message:'product not found '})
        }
} catch (error) {
    res.status(501).json({message:'server error'});
}
};



module.exports={
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}