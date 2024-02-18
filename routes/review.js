
// 5th Jan Lecture 1:17 Minutes





const express = require('express');
const Review = require('../models/Review');
const Product = require('../models/Product');
const { validateReview } = require('../middleware');
const router = express.Router();  // mini application


// review route -
router.post('/products/:id/rating', validateReview, async(req,res)=>{
    try{

        let { rating , comment } = req.body;
        let { id } = req.params;
    
        let product = await Product.findById(id);
    
        //new review using class -
        let review = new Review({ rating , comment });
    
        product.reviews.push(review);
    
        await product.save();
        await review.save();
        res.redirect(`/products/${id}`)
    }
    catch(e){
        res.render('error', {err : e.message})
    }

})

module.exports = router;

















