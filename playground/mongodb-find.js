//const MongoClient = require('mongodb').MongoClient;
//Destructuring
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('593e5c20d4e314a93a6704fe')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined, 2));
    // }, (error) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (error) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Ajinkya'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
      console.log('Unable to fetch todos', err);
    });

    //db.close();
});
