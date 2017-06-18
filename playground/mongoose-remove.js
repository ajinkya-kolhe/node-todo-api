const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('59428d032c52e416903151d5').then((todo) => {
  console.log(todo);
});
