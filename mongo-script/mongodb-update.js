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

    // client.db(dbName).collection('Users').findOneAndUpdate(
    //     {_id: new ObjectId('5bbf03d5c399cd29eb5720c8')},
    //     {
    //         $set: {
    //             name: 'Anand Singh'
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result)
    // })


    client.db(dbName).collection('Users').findOneAndUpdate(
        {_id: new ObjectId('5bbf03d5c399cd29eb5720c8')},
        {
            $inc: {
                age: +8
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result)
    })

    // client.close();
})