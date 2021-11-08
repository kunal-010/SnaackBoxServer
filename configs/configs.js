const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:'.env'});

module.exports = {
    dbURI : process.env.NODE_ENV === 'development' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PROD,
};