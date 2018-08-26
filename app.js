var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  sanitize = require('express-sanitizer'),
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


app.listen(PORT, () => {
  console.log('Craigslist server is starting...');
});