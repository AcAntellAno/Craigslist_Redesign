let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Item = require('./models/Item');
let seedDB = require('./seeds')
const PORT = 8080;

var url = process.env.DATABASEURL || 'mongodb://localhost/craigslistDB'
mongoose.connect(url);

//set default view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
seedDB();

app.get('/', (req, res) => {
    res.redirect('/api/items');
});

//RESTful Routes for Items

//INDEX
app.get('/api/items', (req, res) => {
    Item.find({}, (err, foundItems) => {
        if (err) {
            console.log("Could not load items, command returned: " + err);
        } else {
            res.render('index', {
                items: foundItems
            });
        }
    })

});

app.get('/api/items/new', (req, res) => {
    res.render('new');
});

app.listen(PORT, () => {
    console.log("Server is on " + PORT);
});