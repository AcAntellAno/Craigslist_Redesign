var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  sanitize = require('express-sanitizer'),
  app = express();

const _PORT = 8080;

mongoose.connect('mongodb://localhost/craigslist');
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Schema
var postSchema = new mongoose.Schema({
  title: String,
  body: String,
  price: Number,
  image: String,
  location: String,
  date: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema);

// Post.create({
//   title: 'Mustang GT350',
//   body: 'Got a mustang GT350 for sale. No low ballers',
//   price: 36500,
//   image:
//     'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40085e3ea5d8524b7518df890e4aa72d&auto=format&fit=crop&w=1350&q=80',
//   location: 'San Mateo'
// });

app.get('/', (req, res) => {
  res.redirect('/posts');
});

//INDEX => Show Posts
app.get('/posts', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { posts: posts });
    }
  });
});

app.listen(_PORT, () => {
  console.log('Craigslist server is starting...');
});
