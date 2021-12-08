/**
 * @description:load core modules
*/
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const mongoose = require('./dbHelpers/makeConnection');
dotenv.config({path:'.env'});
/**
 * @description:Connect to mysql database and set global dbObject
 */

// routes
const categoryRoutes = require('./routes/Category/category');
const foodItemRoutes = require('./routes/FoodItem/foodItem');
const userRoutes = require('./routes/User/User');
const pinRoutes = require('./routes/Pin/pin');




/**
 * @description:Connect to mongodb database
*/

mongoose.connect();
/**
 * @description:Create express app object
*/
const app = express();
app.listen(3001,()=>{
  console.log(process.env.PORT);
});

/**
 * @description:require passport configs
*/


/**
 * @description:express configs
*/

app.use(logger('dev'));
app.use(cors({credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/category',categoryRoutes);
app.use('/api/foodItem',foodItemRoutes);
app.use('/api/user',userRoutes);
app.use('/api/pin',pinRoutes);


module.exports = app;