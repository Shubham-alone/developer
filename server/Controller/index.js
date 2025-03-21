const product = require('../Models/product');
const mongoose = require('mongoose');

//get all products from mongodb
exports.getAllproducts = async (req, res) => {
  try {
    const allProducts = await product.find(); // fetch all product from database
    res.status(200).json({ list: allProducts});
  } catch (error) {
    res.status(404).json({message: 'unable to get all products', error:error.message})
  }
};

//get products by category
exports.getProductsBycategory = async (req, res) => {
  const category_type = req.params.category;

  try {
    const allProducts  = await product.find({ category: category_type});

    if (allProducts.length >  0) {
       res.status(200).json({ product: allProducts })
    } else {
       res.status(404).json({  message: "please provide valid category"})
    }
  } catch (error) {
    res.status(500).json({ message: 'error  in getting product category'})
  }

}


//get product by name
exports.getProductsByName =  async (req, res) => {
  const name = req.params.name;

  try {
    const allProducts = await product.find({ name: name});

    if (allProducts.length > 0) {
        res.status(200).json({ product: allProducts})
    } else {
        res.status(404).json({message: "please provide valid meal name"})
    }
  } catch (error) {
       res.status(500).json({ message: "error in getting products by name"})
  }
}


//get products by id
exports.getProductsById = async (req, res) => {
    const productId = parseInt( req.params.id);

    try {
      const allProducts = await product.find({id: productId});

        if (allProducts) {
          res.status(200).json({ product: allProducts})
        } else {
          res.status(404).json({ message:  "please provide valid product id"})
        }
    } catch (error) {
      res.status(500).json({ message: "error getting in products by id"})
    }
}

//search products
exports.getSearchProducts = async (req, res) => {
  const query = req.query.query;

  try{
       const allProducts = await product.find({
        $or: [
          {name: {$regex: query, $options: "i"} },
          {description:{$regex: query, $options: "i"} }
        ]
       });

       if (allProducts) {
        res.status(200).json({ product: allProducts });
       } else {
        res.status(404).json({message: "search query is required"})
       }
  } catch (error) {
    res.status(500).json({ message: "error getiing in searching products"})
  }
}
