const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {
  app
};


// var otherTodo = new Todo({
//   text: 'Feed the cat',
//   completedAt: 123456789,
//   completed: true
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log('Unable to save todo ', error);
// });

// var newUser = new User({
//   email:'ajinkya@example.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc));
// }, (error) => {
//   console.log('Unable to save user ', error);
// });
