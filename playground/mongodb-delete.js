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

    //delete Many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Ajinkya'}).then((result) => {
    //   console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('593c8dde534ad131343d6daa')}).then((result) => {
      console.log(result);
    });

    //db.close();
});
