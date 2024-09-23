// how to routing

const express = require("express");
const router = express.Router();

// define the home page router
router.get('/', (req, res)=>{
    res.send("blog home page");
})

router.get('/about', (req, res)=>{
    res.send("blog about us page");
})

router.get('/blogpost/:slug', (req, res)=>{
    res.send(`fetch the blog post for ${req.params.slug}`);
})

module.exports = router;