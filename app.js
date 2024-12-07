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
/**
 * ~ .css and .js files are static files, 
 * ~~ static files are those file which user want to access without any authentication needed.
 * ~~~ user can directly access those static files by requesting the server.
 * ~> to setup those static files we use -> app.use(express.static("folder_name_where_static_files_are_stored")) 
 */
app.use(express.static("public"));


app.post('/get-form-data', (req,res)=>{
  //console.log(req.query); // ~ in post req 'req.query' doesn't exists 'req.body' exists.
  console.log(req.body);
  res.send("Data Received");
})


app.listen(3000);