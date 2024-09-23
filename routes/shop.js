const express = require("express");
const router = express.Router();

// define the home page router
router.get('/', (req, res)=>{
    res.send("shop home page");
})


module.exports = router;