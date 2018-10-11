//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'todos';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // var collection = client.db(dbName).collection('Todos')

    // collection.insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // var collection = client.db(dbName).collection('Users')
    
    // collection.insertOne({
    //     name: 'Anand Singh',
    //     age: 20,
    //     location: 'Bangalore'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // })

    client.close();
})