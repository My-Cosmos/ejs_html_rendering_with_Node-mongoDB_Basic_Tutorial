Server e kono Request ele [ like localhost:3000/, localhost:3000/about, localhost/post, /contactus e.t.c ]
ei function ta chole -> .createServer((req,res)=>{})
```
const server = http.createServer((req,res)=>{
  console.log(req.url);
  res.end("Hi");
})

```