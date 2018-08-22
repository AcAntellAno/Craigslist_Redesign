var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  sanitize = require('express-sanitizer'),
  app = express();
  const PORT = process.env.PORT;
  const url = process.env.DATABASEURL || 'mongodb://localhost/craigslist';

app.set('view engine', 'ejs');
app.use(express.static('public'));

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

app.listen(PORT, () => {
  console.log('Craigslist server is starting...');
});
