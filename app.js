// for creating a server we need http module in node
const http = require('http');

// .createServer() is a method in http module which returns -> instance of a server.
//    -> keep in mind the server isn't running right now, .createServer() creates a server and give it to you that's it.
const server = http.createServer(( req, res)=>{
  if (req.url==='/favicon.ico') {
    console.log("Inside /favicon.ico route path: "+req.url);
    res.writeHead(204); // No Content
    return res.end();
  }
  console.log("path: "+req.url);
  res.end("Hello World! - Function Ends.");
}); // -> here we created the server

// .listen() method run the created server.
server.listen(3000);