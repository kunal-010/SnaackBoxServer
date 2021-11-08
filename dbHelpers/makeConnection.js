const mongoose = require('mongoose');
const dbConfigs = require('./../configs/configs');

exports.connect = async () => {
    mongoose
      .connect(dbConfigs.dbURI, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('mongoDB connected...'));
    return mongoose.connection;
  };