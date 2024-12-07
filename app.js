// ~ starting using express to create server and routes instead of plain Node.js previously.

//const http = require('http');

const express = require('express');
const app = express();


/*
const server = http.createServer(( req, res )=>{
  if(req.url=='/about'){
    res.end("This is About page");
  }
  else if(req.url=='/post'){
    res.end("This is Post page");
  }
  else if(req.url=='/login'){
    res.end("This is Login page");
  }
  else if(req.url=='/signup'){
    res.end("This is Signup page");
  }else{
    res.end("Home page");
  }
});
*/

// ~ creating route using app.get();
app.get('/', (req,res)=>{
  // ~ instead of res.end(); here we send res.send() from this app.get() routes ~ This is the best practice
  res.send('This is Home page');
})

app.get('/about', (req,res)=>{
  res.send('This is About page');
})

app.get('/post', (req,res)=>{
  res.send('This is Post page');
})

app.get('/login', (req,res)=>{
  res.send('This is Login page');
})

app.get('/signup', (req,res)=>{
  res.send('This is Signup page');
})

// ~ Remember here in express.js we no need to create server (.createServer()), only if we call app.listen() then only express create the server internally and run/listen to the server.
app.listen(3000);