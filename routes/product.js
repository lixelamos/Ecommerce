const Product = require("../models/Product.js");
const { route } = require("./users.js");
const { verifyTokenAndAdmin } = require("./verifyToken.js");
const router = require("express").Router();

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
    next(); // Move next() here
  } catch (err) {
    res.status(500).json(err);
    next(err); // Call next with the error to pass control to the error-handling middleware
  }
});
//UPDATE 
router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{

    try{
        const updatedProduct= await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true})
        res.status(200).json(updatedProduct)
    }catch(err){
            res.status(500).json(err);
        }
        res.status(200).json(updatedProduct)
    });
//DELETE
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted user")
    }catch(err){
        res.status(500).json(error)
    }
});
//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
