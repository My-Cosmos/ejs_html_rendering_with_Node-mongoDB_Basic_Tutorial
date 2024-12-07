```
<form action="/get-form-data" method="post">
.....
</form>
```
```
app.post('/get-form-data', (req,res)=>{
  console.log(req.body);
  res.send("Data Received");
})
```
### Currently "req.body" console.log in post request will return -> **undefined**
> because by-default _express_ _**can't able to read 'req.body' inside post request**_
>> express.js bydefault **post request er Body ke access kortey pare naa**

### Now, jatey express post request er body key portey pare taar jonno 2to built-in middleware use kortey hoy.
```
app.use(express.json);
app.use(express.urlencoded({ extended: true }))
```