const Users = require('../model/userModel');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/user', (req, res) => {
    Users.find({}, (err, users) => {
      if (err) throw err;

      res.send(users);
    });
  });

  app.get('/api/user/:id', (req, res) => {
    Users.findById({ _id: req.params.id }, (err, todo) => {
      if (err) throw err;

      res.send(todo);
    });
  });

  app.post('/api/user', (req, res) => {
    if (req.body.id) {
      Users.findByIdAndUpdate(
        req.body.id,
        {
          username: req.body.username,
          pwd: req.body.pwd,
          age: req.body.age,
          isMale: req.body.isMale,
        }, (err, todo) => {
          if (err) throw err;

          res.send('Success');
        },
      );
    } else {
      const newTodo = Users({
        username: req.body.username,
        pwd: req.body.pwd,
        age: req.body.age,
        isMale: req.body.isMale,
      });
      newTodo.save((err) => {
        if (err) throw err;
        res.send('Success');
      });
    }
  });

  app.delete('/api/user', (req, res) => {
    Users.findByIdAndRemove(req.body.id, (err) => {
      if (err) throw err;
      res.send('Success');
    });
  });
};
