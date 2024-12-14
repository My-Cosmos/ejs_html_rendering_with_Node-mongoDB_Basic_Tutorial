const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
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


app.get('/register',(req,res)=>{
  res.render('register');
});

app.post('/register', async (req,res)=>{
  // ~ post method e data ase "req.body" tey.
  console.log(req.body);
  // ~ object destructuring
  const {username, email, password} = req.body;  
  //console.log(username, email, password);


  // ~ userModel is very important because if we want to perform any operation inside mongodb database userModel is required for every operation
  //  ~~ currently we are creating user into our database
  //    ~~~ and it takes object as a parameter
  const newUser = await userModel.create({
    username: username,
    email: email,
    password: password
  })

  

  res.send(`User Registered and the new user is:- \n ${newUser}`);
});


app.get('/get-users', /* async */ (req,res)=>{
  /* const allUsers = await userModel.find(); */
  userModel.find({
    username: 't'
  }).then((allUsers)=>{
    res.send(allUsers);
  })
});



app.listen(3000);