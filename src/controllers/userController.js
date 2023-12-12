//In src/controllers/userController.js,create a function to fetch all users from the users.json file:
const fs = require('fs');

exports.getAllUsers = (req, res) => {
   fs.readFile('../React Developer Test/data/users.json', 'utf8', (err, data) => { //../data/users.json
       if (err) {
           console.error(err);
           return res.status(500).send('Server Error');
       }
       res.send(JSON.parse(data));
   });
};




exports.getUserById = (req, res) => {
  const id = req.params.id;
  fs.readFile('../React Developer Test/data/users.json', 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).send('Server Error');
      }
      const users = JSON.parse(data);
      const user = users.data.find(user => user.id == id);
      if (!user) {
          return res.status(404).send('User not found');
      }
      res.send(user);
  });
};
