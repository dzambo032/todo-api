// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // isto kao gore


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp')

/*     // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b17c37b7a34e114e119efd3')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }); */
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b179f95bda585164857ec11')
    }, {
        $set: {
            name: 'Tijana'
        },
        $inc: {
            age: 1 // vrednost za koju se inkrementuje
        }
    }, {
        returnOriginal: false // da bi vratilo izmenjenu verziju
    }).then((result) => {
        console.log(result);
    });
    // client.close();
});