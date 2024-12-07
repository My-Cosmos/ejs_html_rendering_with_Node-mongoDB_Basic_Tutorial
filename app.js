const express = require('express');
const app = express();

app.set("view engine", "ejs");

// ~ This is how we can use middleware
  // ~ ar ekhaney kono specific route nei bole server e jekono request elei[example:- '/', '/post', '/about'] ei middleware er moddhe dhukbey tarpor next(); function ta pele respective ['/', '/post', '/profile', '/about', '/contact'] route e chole jabe
app.use((req,res,next)=>{
  console.log("This is middleware");

  const a=2;
  const b=3;

  console.log(a+b);

  return next();
})

app.get('/', (req,res)=>{
  res.render('home');
})
app.get('/post', (req,res)=>{
  res.send('This is post page');
})


app.listen(3000);