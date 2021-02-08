var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Odin Project Message Board', messages });
});

/* POST new message to home page. */
router.post('/added-message', function (req, res, next) {
  const newMessage = { text: req.body.message, user: req.body.author, added: new Date };
  messages.push(newMessage);
  res.redirect('/');
});


module.exports = router;
