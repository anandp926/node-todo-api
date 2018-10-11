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

    // deleteOne

    // client.db(dbName).collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(result) 
    // })

    // deleteMany

    // client.db(dbName).collection('Users').deleteMany({name: 'Anand Singh'}).then((result) => {
    //     console.log(result) 
    // })

    // findOneAndDelete

    client.db(dbName).collection('Users').findOneAndDelete({name: 'Anand Singh'}).then((result) => {
        console.log(result) 
    })

    // client.close();
})