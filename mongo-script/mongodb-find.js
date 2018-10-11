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

    // client.db(dbName).collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    client.db(dbName).collection('Users').find(
        {name: 'Anand Singh'}
    ).toArray().then((docs) => {
        console.log("Users")
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })

    // client.close();
})