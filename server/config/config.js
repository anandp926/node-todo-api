var env = process.env.NODE_ENV || 'development';

const dbName = 'TodoApp'
const testDBName = 'TodoAppTest'

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = `mongodb://localhost:27017/${dbName}`;
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = `mongodb://localhost:27017/${testDBName}`;
}