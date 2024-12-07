const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req,res,next)=>{
    console.log("This is middleware");
    return next();
  },(req,res)=>{
    res.render('home');
  })
app.get('/post', 
  (req,res,next)=>{return next();},
  (req,res)=>{
    res.send('This is post page');
  }
)

app.listen(3000);