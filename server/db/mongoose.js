var mongoose = require('mongoose');

const dbName = 'TodoApp'
const url = `mongodb://localhost:27017/${dbName}`

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true })

module.exports = {mongoose}