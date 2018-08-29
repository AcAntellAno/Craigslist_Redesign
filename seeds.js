let mongoose = require('mongoose');
let Item = require('./models/Item');

var data = [{
        title: "PS4 For Sale",
        image: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b69ccb54b9605ead6a49c6da0cbb007f&auto=format&fit=crop&w=1384&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
        location: "Turlock, CA",
        price: "125.00",
        catagory: "Technology"
    },
    {
        title: "Oculus Rift",
        image: "https://images.unsplash.com/photo-1525540810550-5032f5d191b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0bb22ece0b49f7ec5d7f588594ad68e&auto=format&fit=crop&w=1351&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
        location: "Ceres, CA",
        price: "325.00",
        catagory: "Technology"
    },
    {
        title: "Keyboard For Sale",
        image: "https://images.unsplash.com/photo-1516721951823-4f214c97eb4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0dcd4eb0e6a22b3a16b8af876ad0471&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
        location: "Modesto, CA",
        price: "25.00",
        catagory: "Technology"
    },
    {
        title: "Computer Setup",
        image: "https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixlib=rb-0.3.5&s=09d3cf2ccb7302aa81cea56e1e0c80fd&auto=format&fit=crop&w=1489&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
        location: "Turlock, CA",
        price: "1125.00",
        catagory: "Technology"
    },
    {
        title: "PS4 Controllers",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2e8843e67935b873f32154438cf9664&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
        location: "Turlock, CA",
        price: "15.00",
        catagory: "Technology"
    },
    {
        title: "Nintendo Switch",
        image: "https://images.unsplash.com/photo-1515264741767-1b533a4cdcb7?ixlib=rb-0.3.5&s=b5f9ec888a8e422f564ffa339dd2aab7&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
        location: "Turlock, CA",
        price: "200.00",
        catagory: "Technology"
    },
    {
        title: "Mint Game Cube",
        image: "https://images.unsplash.com/photo-1494666144702-70d86c6cf884?ixlib=rb-0.3.5&s=f5d8b171c10afb1d1b5144b7a8561472&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iure est qui. In quia nesciunt ullam repudiandae iusto neque temporibus inventore perspiciatis veniam illo nulla tempora est, asperiores exercitationem error.",
        location: "Turlock, CA",
        price: "125.00",
        catagory: "Technology"
    }
];

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
console.log("Finished loading data...")
module.exports = seedDB;