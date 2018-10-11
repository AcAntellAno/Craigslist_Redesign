var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Item = require('./models/Item');
var seedDB = require('./seeds')
const PORT = 8080;

var url = process.env.DATABASEURL || 'mongodb://localhost/craigslistDB'
mongoose.connect(url);

//set default view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
seedDB();

app.get('/', (req, res) => {
    res.redirect('/api/v1/items');
});

//RESTful Routes for Items

//INDEX
app.get('/api/v1/items', (req, res) => {
    Item.find({}, (err, foundItems) => {
        if (err) {
            console.log("Could not load items, command returned: " + err);
        } else {
            res.render('index', {
                foundItems: foundItems
            });
        }
    })

});

//NEW
app.get('/api/v1/items/new', (req, res) => {
    res.render('new');
});

//CREATE
app.post('/api/v1/items', (req, res) => {
    //console.log(req.body);
    var title = req.body.title;
    var image = req.body.image;
    var description = req.body.description;
    var price = req.body.price;
    var location = req.body.location;
    var newItem = {
        title: title,
        image: image,
        description: description,
        price: price,
        location: location
    };
    //create new item and save to db
    Item.create(newItem, (err, Item) => {
        if (err) {
            console.log("New item could not be added, returned with error: " + err);
        } else {
            console.log(Item);
            res.redirect('/api/v1/items');
        }
    })
});


//SHOW
app.get('/api/v1/items/:id', (req, res) => {
    var data = req.params.id;
    Item.findById(data, (err, selectedItem) => {
        if (err) {
            console.log(err);
        } else {
            console.log(req.params.id);
            res.render('show', {
                items: selectedItem
            });
        }
    });

});

//server
app.listen(PORT, () => {
    console.log("Server is on " + PORT);
});
