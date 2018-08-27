let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const PORT = 8080;

//set default view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/api/items');
});

//RESTful Routes for Items

//INDEX
app.get('/api/items', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log("Server is on " + PORT);
});