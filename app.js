const express = require('express');
const app = express();
// ~ importing userModel to use it
const userModel = require('./models/user');
// ~ importing dbConnection
const dbConnection = require('./config/db');
// ~ To Read Data/req.body in Post request for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ~ To read/include static css and js file in HTML
app.use(express.static("public"));
// ~ To setUP view engine in Node.js/express.
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
  return res.render('home');
})
app.get('/login',(req,res)=>{
  return res.render('login');
})
app.post('/get-form-data', (req,res)=>{
  //console.log(req.query); // ~ in post req 'req.query' doesn't exists 'req.body' exists.
  console.log(req.body);
  return res.send("Data Received");
})


app.listen(3000);