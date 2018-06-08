// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // isto kao gore


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp')

    // deleteMany
/*      db.collection('Users').deleteMany({location: 'Kraljevo'}).then((result) => {
        console.log(result);
    })  */
    // deleteOne
/*     db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    }); */
    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b17a66aead362184d510f88')}).then((result) => {
        console.log(result);
    });
    // client.close();
});