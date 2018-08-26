var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  sanitize = require('express-sanitizer'),
  Item = require('./models/Item.js'),
  User = require('./models/User.js'),
  Like = require('./models/Like.js')
app = express();

//const PORT = process.env.PORT;
const PORT = 8080;
const url = process.env.DATABASEURL || 'mongodb://localhost/craigslist';
mongoose.connect(url);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/items', (req, res) => {
  //get all items form db
  Item.find({}, (err, Items) => {
    if (err) {
      console.log(err);
    } else {
      res.render('items', {
        items: Item
      });
    }
  });
});

app.listen(PORT, () => {
  console.log('Craigslist server is starting...');
});