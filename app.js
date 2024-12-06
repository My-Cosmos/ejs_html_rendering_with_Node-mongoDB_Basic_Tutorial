const http = require('http');

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

server.listen(3000);