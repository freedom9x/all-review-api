const configValues = require('./config');

module.exports = {

  getDbConnectionString() {
    return `mongodb://${configValues.uname}:${configValues.pwd}@ds263619.mlab.com:63619/all-review-db`;
  },

};
