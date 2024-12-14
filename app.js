const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
// ~ importing userModel to use it
const userModel = require('./models/user');
// ~ importing dbConnection
const dbConnection = require('./config/db');
// ~ To Read Data/req.body in Post request for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ~ To read/include static css and js file in HTML
app.use(express.static("public"));
// ~ To setUP view engine in Node.js/express.
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
  return res.render('home');
})
app.get('/login',(req,res)=>{
  return res.render('login');
})
app.post('/get-form-data', (req,res)=>{
  //console.log(req.query); // ~ in post req 'req.query' doesn't exists 'req.body' exists.
  console.log(req.body);
  return res.send("Data Received");
})


app.get('/register',(req,res)=>{
  res.render('register');
});

app.post('/register', async (req,res)=>{
  // ~ post method e data ase "req.body" tey.
  console.log(req.body);
  // ~ object destructuring
  const {username, email, password} = req.body;  
  //console.log(username, email, password);


  // ~ userModel is very important because if we want to perform any operation inside mongodb database userModel is required for every operation
  //  ~~ currently we are creating user into our database
  //    ~~~ and it takes object as a parameter
  const newUser = await userModel.create({
    username: username,
    email: email,
    password: password
  })

  

  res.send(`User Registered and the new user is:- \n ${newUser}`);
});


app.get('/get-all-users', /* async */ (req,res)=>{
  /* const allUsers = await userModel.find(); */
  userModel.find().then((allUsers)=>{
    res.send(allUsers);
  })
});
app.get('/get-single-user', /* async */ (req,res)=>{
  /* const allUsers = await userModel.find(); */
  userModel.findOne().then((oneUser)=>{
    res.send(oneUser);
  })

  // get single user whose name is t
  userModel.findOne({
    username: 't'
  }).then((user_t)=>{
    console.log(user_t);// returns the first user whose username is 't'
  });
});

// update a userEmail whose username is 't' and update email to 'updatedUser@success.com'
app.get('/update-user', async (req,res)=>{
  await userModel.findOneAndUpdate(
    {
      username: 't' //condition to match user by using 'username' key value
    },
    {
      email: 'updatedUser@success.com' //action to perform by using 'email' key value
    }
  );
  res.send("User Updated");
})

// delete a user whose usename is 'e'
app.get('/delete-a-user', async (req,res)=>{
  await userModel.findOneAndDelete({
    username: 'e'
  })
  res.send("User Deleted");
})

app.listen(3000);