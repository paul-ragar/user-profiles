var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res) {
    console.log(req.body);
    for (var j = 0; j < users.length; j++){
      if (req.body.password === users[j].password && req.body.name === users[j].name) {
        req.session.currentUser = users[j];
        return res.send({ userFound: true });
      }
    }
    res.send({ userFound: false });

  }
}
