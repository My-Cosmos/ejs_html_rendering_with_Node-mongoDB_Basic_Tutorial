const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/',(req,res)=>{
    res.render('home');
  })
app.get('/login',(req,res)=>{
    res.render('login');
  })


// ~ For receiving form data we need to create a route
/*
app.get('/get-form-data', (req,res)=>{
  console.log(req.query);
  res.send("Data Received");
})
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/get-form-data', (req,res)=>{
  //console.log(req.query); // ~ in post req 'req.query' doesn't exists 'req.body' exists.
  console.log(req.body);
  res.send("Data Received");
})


app.listen(3000);