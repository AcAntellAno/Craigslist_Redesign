let mongoose = require('mongoose');
let Item = require('./models/Item');

var data = [{
    title: "PS4 For Sale",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
    picture: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b69ccb54b9605ead6a49c6da0cbb007f&auto=format&fit=crop&w=1384&q=80",
    catagory: "Technology",
    price: "125.00",
    location: "Turlock, CA"
}];

function seedDB() {
    //drop datase data
    Item.remove({}, err => {
        if (err) {
            console.log("Could not remove, returned with " + err);
        }
        console.log("Removed items...");
        //add new data 
        data.forEach(seed => {
            Item.create(seed, (err, item) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Added item...");
                }
            })
        })
    })
}

module.exports = seedDB;