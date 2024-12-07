const express = require('express');
const app = express();

// ~ after installing ejs we no need to require ejs, 
  // ~~ we can directly use/set ejs using app.set().
app.set("view engine", "ejs");

app.get('/', (req,res)=>{
  res.render('home'); //This will go to 'views/' folder and render the "/home.ejs" file.
})


app.listen(3000);