~ To render html using backend(express backend) we need to setup **view Engine**
~~ There are many view engine available there, those are pub,ejs e.t.c


Server e kono Request ele [ like localhost:3000/, localhost:3000/about, localhost/post, /contactus e.t.c ]
ei function ta chole -> .createServer((req,res)=>{})
```
const server = http.createServer((req,res)=>{
  console.log(req.url);
  res.end("Hi");
})

```