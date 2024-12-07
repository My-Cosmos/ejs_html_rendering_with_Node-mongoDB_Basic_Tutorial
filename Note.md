### To hide the informations from the url in /get-form-data route we need to use post request.
```
like instead of using ->
app.get('/get-form-data',(req,res)=>{})

example:- http://localhost:3000/get-form-data?username=SinghfomUP&email=sangra&password=13234254

-----------------------------------------------------

we need to use -> 
app.post('/get-form-data', (req,res)=>{})

example:- http://localhost:3000/get-form-data

To hide password and other sensitive information from the req_url
```


### Another thing is that in HTML

```
<form action="/get-form-data"></form> this form action by default hits get request,

if we want to hit post req then with the backend along with ->

app.post('/get-form-data', (req,res)=>{});

we need to add method="post" in the form ->

<form action="/get-form-data" method="post"></form>
```