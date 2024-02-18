

const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateProduct } = require('../middleware');
const router = express.Router();  // mini application


// Read -
router.get('/products' , async (req, res)=>{
    try{
        let products = await Product.find({});
        res.render('index', {products})
    }
    catch(e){
        res.render('error', {err : e.message})
    }
});

// new form - 
router.get('/products/new', (req, res)=>{
  try{
    res.render('new')
  }
  catch(e){
    res.render('error', {err : e.message})
}
});

// Actually Adding 
router.post('/products', validateProduct, async (req,res)=>{     // By default undefined
    try{
        let {name, img, price, desc} = req.body;
        await Product.create({name, img, price, desc});  
        res.redirect('/products')
    }
    catch(e){
        res.render('error', {err : e.message})
    }
})

// show particular product 
router.get('/products/:id' , async(req,res) =>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        // console.log(foundProduct);
        res.render('show', {foundProduct});
    }
    catch(e){
        res.render('error', {err : e.message})
    }
})

// show edit form -
router.get('/products/:id/edit' , async(req,res) =>{
    try{
        let {id} = req.params;
        // let foundProduct = await Product.findById(id);
        let foundProduct = await Product.findById(id);
        res.render('edit' , {foundProduct})
    }
    catch(e){
        res.render('error', {err : e.message})
    }
})

// Actually Changing the Product -
router.patch('/products/:id', validateProduct, async(req,res)=>{
    try{
        let {id} = req.params;
        let {name, img, price, desc} = req.body;
        await Product.findByIdAndUpdate(id, {name, img, price, desc} );
        res.redirect('/products')
    }
    catch(e){
        res.render('error', {err : e.message})
    }
})

// Deleting -
router.delete('/products/:id', async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
    
        // Deleting reviews before deleting product 
        for(let ids of foundProduct.reviews){
            await Review.findByIdAndDelete(ids);
        }
    
        res.redirect('/products')
        await Product.findByIdAndDelete(id);
    }
    catch(e){
        res.render('error', {err : e.message})
    }
})

module.exports = router;

















