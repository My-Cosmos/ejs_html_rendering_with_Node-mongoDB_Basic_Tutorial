const mongoose = require('mongoose');
// ~ Giving structure to our schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// ~ Implemented userSchema into our database
const userModel = mongoose.model('user', userSchema);

// ~ Exporting the userModel to app.js file to implement/use.
module.exports = userModel;