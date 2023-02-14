require('dotenv').config()
require('/config/database')

//Require all of the Mongoose models 
const User = require('./models/user')
// const Item = require('./models/item')
//const Order = rerquire('./models/order')

//let's set up some local variables to help test our models that we have future promised
let user, item , category, order
