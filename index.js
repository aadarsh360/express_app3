const express = require("express");
const blog = require('./routes/blog.js');
const shop = require('./routes/shop.js')
const fs = require("fs");
const app = express();

const port = 3000;


// middle ware
app.use(express.static("public"));
app.use('/blog', blog);
app.use('/shop', shop);

/*
app.get('/', (req, res)=>{
    res.send("Hello world!!");
})
*/
/*

// app.post('/', (req, res)=>{
//     console.log("hey its a post request");
//     res.send("Hello World!!");
// })

// how to servlet html file

app.get('/index', (req, res)=>{
    // res.send("hello index html");
    res.sendFile('templates/index.html', {root: __dirname});
})

app.get('/api', (req, res)=>{
    res.json({a:'1', b:'2', c:'3'});
})


*/


// middleware concept

app.use(express.static("public"));

// middleware 1  - Logger for our application
app.use((req, res, next)=>{
    // console.log("middleware 1");
    // console.log(req.headers);
    req.aadarsh = "I am aadarsh pandey";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`);
    console.log(`${Date.now()} is a ${req.method}`)
    next();
})
// middleware 2
app.use((req, res, next)=>{
    console.log("middleware 2");
    next();
})


app.get('/', (req, res)=>{
    res.send("Hello World!!");
})

app.get('/about', (req, res)=>{
    res.send("Hello about"+ req.aadarsh);
})
app.listen(port, (res, req)=>{
    console.log(`Server runnng at port ${port}`);
})