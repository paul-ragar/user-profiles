var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://hd.unsplash.com/photo-1455287278107-115faab3eafa',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://hd.unsplash.com/photo-1442605527737-ed62b867591f',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://hd.unsplash.com/photo-1453487977089-77350a275ec5',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://hd.unsplash.com/photo-1445499348736-29b6cdfc03b9',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getFriends: function(req, res) {
    var yourArrayOfFriendObjects = [];
    console.log(req.session.currentUser);
    var findFriends = function(){
      for (var i = 0; i < req.session.currentUser.friends.length; i++) {
        for (var j = 0; j < profiles.length; j++) {
          if (profiles[j].name === req.session.currentUser.friends[i]) {
            yourArrayOfFriendObjects.push(profiles[j]);
          }
        }
      }
    }();
    res.send({
      currentUser: req.session.currentUser,
      friends: yourArrayOfFriendObjects
    })
  }
}
