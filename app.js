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
                items: foundItems
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
// app.get('/api/v1/items/:id', (req, res) => {
//     Item.findById(req.params.id, (err, selectedItem) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(req.params.id);

//             res.render('show', {
//                 items: selectedItem
//             });
//         }
//     });
// });

//server
app.listen(PORT, () => {
    console.log("Server is on " + PORT);
});